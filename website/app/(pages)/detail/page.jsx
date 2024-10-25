"use client";
import axios from "axios";
import { Plus } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CustomerDetails = () => {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [city, setCity] = useState("");
  const [card, setCard] = useState("");
  const [aadhar, setAadhar] = useState("");

  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [machineSetup, setMachineSetup] = useState("");
  const [machineUUID, setMachineUUID] = useState("");

  const [searchPhone, setSearchPhone] = useState("");
  const [modalMessage, setModalMessage] = useState("");

  useEffect(() => {}, []);

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const isMachineSetup = machineSetup === "yes";
    try {
      const customerId = searchPhone; 
      console.log({ card, machineSetup, machineUUID });
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/${customerId}`,
        {
          card_details:card,
          aadhar:aadhar,
          machineSetup: isMachineSetup,
          machine_uuid:machineUUID,
        }
      );

      console.log("Customer updated:", response.data);

      setModalMessage("Customer has been updated successfully!");
      setIsModalOpen(true);
    } catch (err) {
      console.error(err);
    }
  };

  const Modal = ({ message, isVisible, onClose }) => {
    if (!isVisible) return null;

    return (
      <div className="fixed top-4 right-4 z-50 bg-white shadow-lg rounded-lg p-4 border border-gray-300">
        <div className="flex items-center">
          <p className="text-md font-semibold">{message}</p>
          <button
            className="ml-4 text-gray-600 hover:text-gray-900"
            onClick={onClose}
          >
            ✖
          </button>
        </div>
      </div>
    );
  };

  const closeModal = () => {
    setIsModalOpen(false); 
    setModalMessage("");
  };

  const handleSearchCustomer = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/${searchPhone}`
      );
      console.log(response);
      const customerData = response.data;

      setFirstName(customerData.firstname);
      setLastName(customerData.lastname);
      setEmail(customerData.email);
      setPhoneNumber(customerData.phone_number);
      setAddress(customerData.address);
      setCity(customerData.city);
      setCard(customerData.card_details);
      setMachineUUID(customerData.machine_uuid);
      setAadhar(customerData.aadhar);
      setState(customerData.state);
      setPincode(customerData.pincode);
      setMachineSetup(customerData.machine_setup ? "yes" : "no");
    } catch (error) {
      console.error("Error fetching customer data:", error);
    }
  };

  return (
    <div className="h-full justify-center items-center">
      <Modal
        message={modalMessage}
        isVisible={isModalOpen}
        onClose={closeModal}
      />
      <div className="h-16 border mb-6 border-gray-200 rounded-xl bg-white relative">
        <div className="h-full flex items-center justify-between px-4">
          <h1 className=" font-normal text-2xl">Customer Details</h1>
          <div className="flex items-center  w-[40%]">
            <input
              type="text"
              className="border h-10 rounded-md border-gray-300 pl-3 w-full placeholder:font-light text-sm placeholder:text-gray-400"
              placeholder="Search by Phone Number"
              value={searchPhone}
              onChange={(e) => setSearchPhone(e.target.value)}
            />
            <button
              type="button"
              className="bg-[#014E53] ml-4 text-white px-4 py-2 rounded-lg hover:scale-95 hover:bg-[#2f6a6c] transition-all duration-300"
              onClick={handleSearchCustomer}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <h1 className="text-md mb-4  text-gray-400">
        Approve Customer Details and add other fields *
      </h1>
      <div className="w-[86rem] border flex  flex-col items-center text-center shadow-lg p-10 rounded-2xl">
        <form className="w-full text-start " onSubmit={handleOnSubmit}>
          <div className="flex space-x-4">
            <div className="w-full">
              <h1 className="font-normal text-sm mb-2">First Name</h1>
              <input
                type="text"
                className="border h-8 rounded-md border-gray-300 w-full pl-3 placeholder:font-light text-sm placeholder:text-sm"
                placeholder="John"
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
                placeholder="Doe"
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
              <h1 className="font-normal text-sm mb-2">Address</h1>
              <input
                type="text"
                className="border h-8 rounded-md border-gray-300 w-full pl-3 placeholder:font-light text-sm placeholder:text-sm"
                placeholder="123 Main Street"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="w-full">
              <h1 className="font-normal text-sm mb-2">Card Details</h1>
              <input
                type="text"
                className="border h-8 rounded-md border-gray-300 w-full pl-3 placeholder:font-light text-sm placeholder:text-sm"
                placeholder="0000 0000 0000 0000"
                name="card"
                value={card}
                onChange={(e) => setCard(e.target.value)}
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
                className="border h-8 rounded-md border-gray-300 w-full pl-3 placeholder:font-light text-sm placeholder:text-sm"
                placeholder="pincode"
                name="city"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
              />
            </div>
            <div className="w-full">
              <h1 className="font-normal text-sm mb-2">Aadhar</h1>
              <input
                type="text"
                className="border h-8 rounded-md border-gray-300 w-full pl-3 placeholder:font-light text-sm placeholder:text-sm"
                placeholder="0000 0000 0000 0000"
                name="Aadhar"
                value={aadhar}
                onChange={(e) => setAadhar(e.target.value)}
              />
            </div>
          </div>
          <div className="flex w-[49%] space-x-4 mt-4">
            <div className="w-1/3">
              <h1 className="font-normal text-sm mb-2">Machine Setup</h1>
              <select
                className="border h-8 rounded-md border-gray-300 w-full pl-3 text-sm"
                name="machineSetup"
                value={machineSetup}
                onChange={(e) => setMachineSetup(e.target.value)}
              >
                <option value="" disabled selected>
                  Select your option
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="w-2/3">
              {" "}
              {/* Adjusted width for Machine UUID */}
              <h1 className="font-normal text-sm mb-2">Machine UUID</h1>
              <input
                type="text"
                className="border h-8 rounded-md border-gray-300 w-full pl-3 placeholder:font-light text-sm placeholder:text-sm"
                placeholder="Enter Machine UUID"
                name="machineUUID"
                value={machineUUID}
                onChange={(e) => setMachineUUID(e.target.value)} // Create this state variable
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-[#014E53] w-full text-white px-10 py-2 rounded-lg mt-10 mb-2 hover:scale-100 hover:bg-[#2f6a6c] transition-all duration-300"
          >
            Approve
          </button>
        </form>
      </div>
    </div>
  );
};

export default CustomerDetails;
