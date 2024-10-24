import axiosInstance from "@/app/utils/axios_instance";
import { ArrowRightToLine, Pencil } from "lucide-react";
import { useRef, useState } from "react";

const AddEmployeeSideBar = () => {
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    mobileNumber: "",
    gender: "",
    role: "",
    shareOfRevenue: "",
    instagramHandle: "",
  });
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleEditClick = () => {
    fileInputRef.current.click();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const token = localStorage.getItem("accessToken");
    const data = {
      email: formData.email,
      password: formData.password,
      first_name: formData.firstName,
      last_name: formData.lastName,
      social_id: { instagram: formData.instagramHandle },
      mobile_number: formData.mobileNumber,
      gender: formData.gender,
      role: formData.role,
      share_of_revenue: parseInt(formData.shareOfRevenue, 10),
    };
    console.log(data);

    try {
      const response = await axiosInstance.post("auth/signup", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error signing up:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full flex flex-col justify-between">
      <div className="p-5 overflow-y-auto">
        <div className="flex items-center mb-8">
          <ArrowRightToLine size={24} />
          <div className="text-xl font-light ml-4">Add Employee</div>
        </div>
        <div className="flex">
          <div>
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden">
                {image ? (
                  <img
                    src={image}
                    alt="Avatar"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex text-xs items-center justify-center text-gray-400">
                    No Image
                  </div>
                )}
              </div>
              <button
                onClick={handleEditClick}
                className="absolute bottom-0 right-0 bg-[#014E53] p-2 rounded-full text-white hover:bg-blue-600 transition-colors"
              >
                <Pencil size={10} />
              </button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageChange}
                accept="image/*"
                className="hidden"
              />
            </div>
          </div>
          <div className="ml-5">
            <h1 className="font-medium text-sm">Upload Profile Picture</h1>
            <div className="font-thin text-xs mt-3">
              This profile will be visible to all employees, so please ensure it
              reflects a professional and polished image.
            </div>
          </div>
        </div>

        {/* Form */}
        <h1 className="text-lg font-normal mt-8">Employee Information</h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <h1 className="font-normal text-sm mb-1 mt-2">First Name</h1>
              <input
                type="text"
                className="border h-8 rounded-md border-gray-300 w-full pl-3 placeholder:font-light text-sm placeholder:text-sm"
                placeholder="Enter first name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div>
              <h1 className="font-normal text-sm mb-1 mt-2">Last Name</h1>
              <input
                type="text"
                className="border h-8 rounded-md border-gray-300 w-full pl-3 placeholder:font-light text-sm placeholder:text-sm"
                placeholder="Enter last name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div>
              <h1 className="font-normal text-sm mb-1">Email Address</h1>
              <input
                type="text"
                className="border h-8 rounded-md border-gray-300 w-full pl-3 placeholder:font-light text-sm placeholder:text-sm"
                placeholder="wiko@example.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <h1 className="font-normal text-sm mb-1">Password</h1>
              <input
                type="password"
                className="border h-8 rounded-md border-gray-300 w-full pl-3 placeholder:font-light text-sm placeholder:text-sm"
                placeholder="********"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <h1 className="font-normal text-sm mb-1">Gender</h1>
              <select
                className="border h-8 rounded-md border-gray-300 w-full pl-3 placeholder:font-light text-sm"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <h1 className="font-normal text-sm mb-1">Share of Revenue</h1>
              <input
                type="text"
                className="border h-8 rounded-md border-gray-300 w-full pl-3 placeholder:font-light text-sm placeholder:text-sm"
                placeholder="25"
                name="shareOfRevenue"
                value={formData.shareOfRevenue}
                onChange={handleChange}
              />
            </div>
            <div>
              <h1 className="font-normal text-sm mb-1">Gender</h1>
              <select
                className="border h-8 rounded-md border-gray-300 w-full pl-3 placeholder:font-light text-sm"
                name="role"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select Role
                </option>
                <option value="Male">admin</option>
                <option value="Female">viewer</option>
              </select>
            </div>
            {/* <div>
              <h1 className="font-normal text-sm mb-1">Instagram Handle</h1>
              <input
                type="text"
                className="border h-8 rounded-md border-gray-300 w-full pl-3 placeholder:font-light text-sm placeholder:text-sm"
                placeholder="@influencer_name"
                name="instagramHandle"
                value={formData.instagramHandle}
                onChange={handleChange}
              />
            </div> */}
          </div>
          <div>
            <h1 className="font-normal text-sm mb-1 mt-3">Phone Number</h1>
            <input
              type="text"
              className="border h-8 rounded-md border-gray-300 w-full pl-3 placeholder:font-light text-sm placeholder:text-sm"
              placeholder="+91"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
      <div className="ml-auto pr-5">
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-black text-white px-10 py-2 rounded-lg mt-5 mb-2 hover:scale-95 hover:bg-neutral-800 transition-all duration-300"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add"}
        </button>
      </div>
    </div>
  );
};

export default AddEmployeeSideBar;
