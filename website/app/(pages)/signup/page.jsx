"use client";
import axios from "axios";
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
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/signup/user`,
        {
          firstname: firstName,
          lastname: lastName,
          email: email,
          password: password,
          address: address,
          phone_number: phoneNumber,
          city: city,
          state: state,
          pincode: pincode,
        }
      );

      if (response.status === 201) {
        console.log("user registerd");
        setIsModalOpen(true); // Show success modal
      }
    } catch (err) {
      console.error("Sign-up failed:", err);
      alert("Failed to register. Please try again.");
    }
  };

  const handleCloseModal = () => {
    
    // Reset all input fields
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setAddress("");
    setPhoneNumber("");
    setCity("");
    setState("");
    setPincode("");
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
                placeholder="Prateek"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="w-full">
              <h1 className="font-normal text-sm mb-2">Last Name</h1>
              <input
                type="text"
                className="border h-8 rounded-md border-gray-300 w-full pl-3 placeholder:font-light text-sm placeholder:text-sm"
                placeholder="Kumar"
                name="lastName"
                value={lastName}

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
                value={email}

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
                value={phoneNumber}

                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>

          <div className="flex space-x-4 mt-4">
            <div className="w-full">
              <h1 className="font-normal text-sm mb-2">City</h1>
              <input
                type="text"
                className="border h-8 rounded-md border-gray-300 w-full pl-3 placeholder:font-light text-sm placeholder:text-sm"
                placeholder="City"
                name="city"
                value={city}

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
                value={state}

                onChange={(e) => setState(e.target.value)}
              />
            </div>
          </div>
          <div className="flex space-x-4 mt-4">
            <div className="w-full">
              <h1 className="font-normal text-sm mb-2">Pincode</h1>
              <input
                type="text"
                className="border h-8 rounded-md border-gray-300  w-full pl-3 placeholder:font-light text-sm placeholder:text-sm"
                placeholder="Pincode"
                name="pincode"
                value={pincode}

                onChange={(e) => setPincode(e.target.value)}
              />
            </div>
            <div className="w-full">
              <h1 className="font-normal text-sm mb-2">Password</h1>
              <input
                type="password"
                className="border h-8 rounded-md border-gray-300 w-full pl-3 placeholder:font-light text-sm placeholder:text-sm"
                placeholder="Password"
                name="password"
                value={password}

                onChange={(e) => setPassword(e.target.value)}
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
              value={address}

              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <span className="block text-sm text-gray-500 mt-4">
            Already have an account?{" "}
            <a href="/signin" className="text-blue-500 hover:underline">
              Sign In
            </a>
          </span>
          <button
            type="submit"
            className="bg-[#014E53] w-full text-white px-10 py-2 rounded-lg mt-8 mb-2 hover:scale-95 hover:bg-[#2f6a6c] transition-all duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>

      {/* Modal for Success Message */}
      {isModalOpen && (
        <div className="fixed inset-0  flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white w-[40%] p-5 rounded-lg shadow-lg text-center py-12 px-12">
            <h2 className="font-bold text-2xl mb-8 ">
              Registration Successful!
            </h2>
            <p className="mb-12">
              Our executive will reach out to you shortly to discuss the next
              steps and arrange a visit to the site for further details. We
              appreciate your patience and look forward to assisting you
              further!
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
