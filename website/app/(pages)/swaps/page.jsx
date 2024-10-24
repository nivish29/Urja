"use client";
import { Delete, Edit, Pencil, Plus, Trash } from "lucide-react";
import { useState } from "react";
import { data } from "../../utils/employee_data"; // Make sure your data structure contains the new fields

const Employee = () => {
  const [expanded, setExpanded] = useState(false);
  const [editExpanded, setEditExpanded] = useState(false);

  // Updated columns to reflect the new requirements
  const columns = [
    "Name",
    "Phone No.",
    "Transaction ID",
    "Date",
    "Station Name",
    "Battery ID",
    "Action",
  ];

  const handleExpanded = () => {
    setExpanded((prev) => !prev);
  };

  const handleEditExpanded = () => {
    setEditExpanded((prev) => !prev);
  };

  return (
    <div className="max-h-full">
      <div className="h-16 border border-gray-100 rounded-xl bg-white relative">
        <div className="h-full flex items-center justify-between px-4">
          <h1 className="font-normal text-2xl text-black">
            Battery Swap Details
          </h1>
          <div className="flex items-center  w-[40%]">
            <input
              type="text"
              className="border h-10 rounded-md border-gray-300 pl-3 w-full placeholder:font-light text-sm placeholder:text-gray-400"
              placeholder="Search by Phone Number"
              // value={searchPhone}
              // onChange={(e) => setSearchPhone(e.target.value)}
            />
            <button
              type="button"
              className="bg-[#014E53] ml-4 text-white px-4 py-2 rounded-lg hover:scale-95 hover:bg-[#2f6a6c] transition-all duration-300"
              // onClick={handleSearchCustomer} // Trigger search
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="border border-gray-100 rounded-xl bg-white mt-3 ">
        <div className="overflow-x-auto sm:rounded-lg p-3">
          <div className="max-h-[calc(100vh-135px)] overflow-y-auto">
            <table className="min-w-full text-sm text-left font-light">
              <thead className="text-sm sticky top-0 bg-white">
                <tr>
                  {columns.map((column, index) => (
                    <th
                      key={index}
                      scope="col"
                      className="px-6 py-2  font-light text-[#595959] border-b border-l border-r"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className="bg-white border-b hover:bg-gray-50"
                  >
                    <td className="px-6 py-1 border-r border-l font-sm text-[#1F1F1F] ">
                      {row.name}
                    </td>
                    <td className="px-6 py-2 border-r">{row.phoneNo}</td>
                    <td className="px-6 border-r">{row.transactionId}</td>
                    <td className="px-6 border-r">{row.date}</td>
                    <td className="px-6 border-r">{row.stationName}</td>
                    <td className="px-6 border-r">{row.batteryId}</td>
                    <td className="px-4 border-r w-[5rem]">
                      <div className="flex justify-around">
                        <Pencil
                          size={16}
                          color="#1F1F1F"
                          className="cursor-pointer transition-all duration-200 hover:scale-110"
                          onClick={handleEditExpanded}
                        />
                        <Trash
                          size={16}
                          color="#1F1F1F"
                          className="cursor-pointer transition-all duration-200 hover:scale-110"
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;
