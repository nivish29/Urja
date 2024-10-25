"use client";
import React, { useEffect, useState } from "react";
import EnergyChart from "@/app/components/energyChart";
import EnergyTransferChart from "@/app/components/energyTransferChart";

const columns = [
  "Time",
  "Power",
  "Source", 
];

const Dashboard = () => {
  const [isSharingEnergy, setIsSharingEnergy] = useState(true);
  const [historyData, setHistoryData] = useState([]);

  const toggleEnergySharing = () => {
    setIsSharingEnergy((prevState) => !prevState);
  };

  useEffect(() => {
    const fetchHistoryData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/energy/671b2e80ece35bb263336978`);
        const data = await response.json();
        setHistoryData(data);
      } catch (error) {
        console.error('Error fetching history data:', error);
      }
    };

    fetchHistoryData();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="h-16 border mb-2 border-gray-200 rounded-xl bg-white relative">
        <div className="h-full flex items-center justify-between px-4">
          <h1 className="font-normal text-2xl">Customer Details</h1>
          <div className="flex">
            <div className="items-center text-sm mr-10">
              <div>Power Reserved: 100KW</div>
              <div>Total Power Produced: 1000KW</div>
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
      <div className="border border-gray-100 rounded-xl bg-white mt-3 w-[100%]">
        <div className="overflow-x-auto sm:rounded-lg p-3">
          <div className="max-h-[calc(100vh-135px)] overflow-y-auto">
            <table className="min-w-full text-sm text-left font-light">
              <thead className="text-sm sticky top-0 bg-white">
                <tr>
                  {columns.map((column, index) => (
                    <th
                      key={index}
                      scope="col"
                      className="px-6 py-2 font-light text-[#595959] border-b border-l border-r"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {historyData.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className="bg-white border-b hover:bg-gray-50"
                  >
                    <td className="px-6 py-1 border-r border-l font-sm text-[#1F1F1F]">
                      {row.time} {/* Ensure 'time' corresponds to your API response */}
                    </td>
                    <td className="px-6 border-r">{row.energy} kW</td>
                    <td className="px-6 border-r">{row.source}</td>
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
