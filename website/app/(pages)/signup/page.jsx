"use client";
import axiosInstance from "@/app/util/axios_instance";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SignUp = () => {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      router.replace("/dashboard");
    }
  }, []);

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    try {
      // const response = await axiosInstance.post(
      //   "/auth/signup", // Adjust the endpoint as necessary
      //   {
      //     firstName,
      //     lastName,
      //     email,
      //     password,
      //     address,
      //     phoneNumber,
      //     city,
      //     state,
      //     pincode,
      //   },
      //   { withCredentials: true }
      // )
      // console.log(response)
      // localStorage.setItem("accessToken", response.data.data.accessToken)
      setIsModalOpen(true); // Open modal on successful sign-up
      // Optionally, redirect after a delay
      setTimeout(() => {
        // router.push("/dashboard")
      }, 2000);
    } catch (err) {
      console.error(err);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="h-full flex justify-center items-center">
      <div className="w-[50rem] flex flex-col items-center text-center shadow-lg p-10 rounded-2xl">
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
            alt="Picture of the author"
            className="transition-transform duration-300 mb-2"
          />
        </div>
        <span className="px-8 text-[#595959] font-light">
          Been a while! Ready to dive back in? Let's get you Registered!
        </span>
        <form className="w-full text-start mt-12" onSubmit={handleOnSubmit}>
          <div className="flex space-x-4">
            <div className="w-full">
              <h1 className="font-normal text-sm mb-2">First Name</h1>
              <input
                type="text"
                className="border h-8 rounded-md border-gray-300 w-full pl-3 placeholder:font-light text-sm placeholder:text-sm"
                placeholder="John"
                name="firstName"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="w-full">
              <h1 className="font-normal text-sm mb-2">Last Name</h1>
              <input
                type="text"
                className="border h-8 rounded-md border-gray-300 w-full pl-3 placeholder:font-light text-sm placeholder:text-sm"
                placeholder="Doe"
                name="lastName"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="flex space-x-4 mt-4">
            <div className="w-full">
              <h1 className="font-normal text-sm mb-2">Email Address</h1>
              <input
                type="text"
                className="border h-8 rounded-md border-gray-300 w-full pl-3 placeholder:font-light text-sm placeholder:text-sm"
                placeholder="urja@example.com"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="w-full">
              <h1 className="font-normal text-sm mb-2">Phone Number</h1>
              <input
                type="text"
                className="border h-8 rounded-md border-gray-300 w-full pl-3 placeholder:font-light text-sm placeholder:text-sm"
                placeholder="(123) 456-7890"
                name="phoneNumber"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-4">
            <h1 className="font-normal text-sm mb-2">Address</h1>
            <input
              type="text"
              className="border h-8 rounded-md border-gray-300 w-full pl-3 placeholder:font-light text-sm placeholder:text-sm"
              placeholder="123 Main St"
              name="address"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="flex space-x-4 mt-4">
            <div className="w-full">
              <h1 className="font-normal text-sm mb-2">City</h1>
              <input
                type="text"
                className="border h-8 rounded-md border-gray-300 w-full pl-3 placeholder:font-light text-sm placeholder:text-sm"
                placeholder="City"
                name="city"
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="w-full">
              <h1 className="font-normal text-sm mb-2">State</h1>
              <input
                type="text"
                className="border h-8 rounded-md border-gray-300 w-full pl-3 placeholder:font-light text-sm placeholder:text-sm"
                placeholder="State"
                name="state"
                onChange={(e) => setState(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-4">
            <h1 className="font-normal text-sm mb-2">Pincode</h1>
            <input
              type="text"
              className="border h-8 rounded-md border-gray-300  w-full pl-3 placeholder:font-light text-sm placeholder:text-sm"
              placeholder="Pincode"
              name="pincode"
              onChange={(e) => setPincode(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-[#014E53] w-full text-white px-10 py-2 rounded-lg mt-10 mb-2 hover:scale-95 hover:bg-[#2f6a6c] transition-all duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>

      {/* Modal for Success Message */}
      {isModalOpen && (
        <div className="fixed inset-0  flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white w-[70%] p-5 rounded-lg shadow-lg text-center py-16 px-12">
            <h2 className="font-bold text-2xl mb-8 ">
              Registration Successful!
            </h2>
            <p className="mb-12">
              Our executive will reach out to you shortly to discuss the next
              steps and arrange a visit to the site for further details. In the
              meantime, we invite you to take a moment to relax and enjoy a cup
              of tea. We appreciate your patience and look forward to assisting
              you further!
            </p>
            <div className="flex justify-end">
              <button
                className="bg-[#014E53] text-white px-4 py-2 rounded-lg "
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
