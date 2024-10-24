import axios from "axios";
import { jwtDecode } from "jwt-decode";
let isRefreshing = false;
let failedQueue = [];

// Function to process requests waiting for token refresh
const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (token) {
      prom.resolve(token);
    } else {
      prom.reject(error);
    }
  });
  failedQueue = [];
};

// Check if token is expired
const isTokenExpired = (token) => {
  if (!token) return true;
  const decodedToken = jwtDecode(token);
  const currentTime = Date.now() / 1000;
  return decodedToken.exp < currentTime;
};

const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL || "http://localhost:3002",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
// Request Interceptor
axiosInstance.interceptors.request.use(
  async (config) => {
    let accessToken = localStorage.getItem("accessToken");

    if (accessToken && isTokenExpired(accessToken)) {
      if (!isRefreshing) {
        isRefreshing = true;
        try {
          const { data } = await axios.get(
            "http://localhost:3002/auth/issue-access-token",
            {
              withCredentials: true,
            }
          );
          localStorage.setItem("accessToken", data.data.accessToken);
          accessToken = data.data.accessToken;
          processQueue(null, accessToken);
        } catch (error) {
          processQueue(error, null);
          throw error;
        } finally {
          isRefreshing = false;
        }
      }

      return new Promise((resolve, reject) => {
        failedQueue.push({
          resolve: (token) => {
            config.headers["Authorization"] = `Bearer ${token}`;
            resolve(config);
          },
          reject: (error) => {
            reject(error);
          },
        });
      });
    }

    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers["Authorization"] = `Bearer ${token}`;
            return axiosInstance(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      isRefreshing = true;

      return new Promise((resolve, reject) => {
        axios
          .get("http://localhost:3002/auth/issue-access-token", {
            withCredentials: true,
          })
          .then(({ data }) => {
            localStorage.setItem("accessToken", data.data.accessToken);
            axiosInstance.defaults.headers[
              "Authorization"
            ] = `Bearer ${data.data.accessToken}`;
            processQueue(null, data.data.accessToken);
            resolve(axiosInstance(originalRequest));
          })
          .catch((err) => {
            processQueue(err, null);
            reject(err);
          })
          .finally(() => {
            isRefreshing = false;
          });
      });
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
