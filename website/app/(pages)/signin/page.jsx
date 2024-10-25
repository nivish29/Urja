"use client";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SignIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      router.replace("/dashboard");
    }
  }, []);

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.VERCEL_NEXT_PUBLIC_BACKEND_URL}/api/auth/signin`,
        {
          email,
          password,
        }
      );

      // Assuming the token is in response.data.token and the role is in response.data.user.role
      const { token, user } = response.data;

      localStorage.setItem("accessToken", token);
      localStorage.setItem("role", user.role);

      if (user.role === "admin") {
        router.push("/requests");
      } else if (user.role === "user") {
        router.push("/dashboard");
      } else {
        console.warn("Unrecognized role");
      }
    } catch (err) {
      console.error("Sign-in failed", err);
    }
  };

  return (
    <div className="h-full flex justify-center items-center">
      <div className="w-[30rem] flex flex-col items-center text-center shadow-lg p-10 rounded-2xl">
        <div className="flex mb-12">
          <Image
            src="/urja_logo.webp"
            alt="logo"
            className="rounded-full w-16"
            height={42}
            width={42}
          />
          <Image
            src="/logo_name.png"
            width={120}
            height={30}
            alt="Logo name"
            className="transition-transform duration-300 mb-2"
          />
        </div>
        <span className="px-8 text-[#595959] font-light">
          Been a while! Ready to dive back in? Let's get you signed in and back
          to business!
        </span>
        <form className="w-full text-start mt-12" onSubmit={handleOnSubmit}>
          <div>
            <h1 className="font-normal text-sm mb-2">Email Address</h1>
            <input
              type="text"
              className="border h-8 rounded-md border-gray-300 w-full pl-3 placeholder:font-light text-sm"
              placeholder="urja@example.com"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <h1 className="font-normal text-sm mb-2">Password</h1>
            <input
              type="password"
              className="border h-8 rounded-md border-gray-300 w-full pl-3 placeholder:font-light text-sm"
              placeholder="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <span className="block text-sm text-gray-500 mt-4">
            Not have an account?{" "}
            <a href="/signup" className="text-blue-500 hover:underline">
              Create
            </a>
          </span>
          <button
            type="submit"
            className="bg-[#014E53] w-full text-white px-10 py-2 rounded-lg mt-10 mb-2 hover:scale-95 hover:bg-[#2f6a6c] transition-all duration-300"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
