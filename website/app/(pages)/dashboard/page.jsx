"use client";
import React, { useState } from "react";
import EnergyChart from "@/app/components/energyChart";
import EnergyTransferChart from "@/app/components/energyTransferChart";
import { data } from "@/app/utils/energyHistory_data";
import { Pencil, Trash } from "lucide-react";

const columns = [
  "Time",
  "Energy",
  "Source", // solar or grid
];

const Dashboard = () => {
  // State to track whether energy sharing is active
  const [isSharingEnergy, setIsSharingEnergy] = useState(true);

  // Function to toggle energy sharing state
  const toggleEnergySharing = () => {
    setIsSharingEnergy((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col">
      <div className="h-16 border mb-6 border-gray-200 rounded-xl bg-white relative">
        <div className="h-full flex items-center justify-between px-4">
          <h1 className=" font-normal text-2xl">Customer Details</h1>
          <div className="flex">
            <div className=" items-center mr-10">
              <div>Energy Reserved: 100KW</div>
              <div>Total Energy Produced: 1000KW</div>
            </div>
            <button
              type="button"
              onClick={toggleEnergySharing}
              className="bg-[#014E53] ml-4 text-white px-4 py-2 rounded-lg hover:scale-95 hover:bg-[#2f6a6c] transition-all duration-300"
            >
              {isSharingEnergy ? "Stop Sharing Energy" : "Resume Sharing Energy"}
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <EnergyChart />
        <EnergyTransferChart />
      </div>
      <h1 className="text-2xl font-normal mt-4">History</h1>
      <div className="border border-gray-100 rounded-xl bg-white mt-3 w-[100%] ">
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
                      {row.Time}
                    </td>
                    <td className="px-6 border-r">{row.Energy}</td>
                    <td className="px-6 border-r">{row.Source}</td>
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

export default Dashboard;
