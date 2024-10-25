"use client";
import { useState, useEffect } from "react";
import axios from "axios";

const RevenueAdmin = () => {
  const [stations, setStations] = useState([]);
  const [totalRevenue, setTotalRevenue] = useState(0);

  // Fetch data from the APIs on component mount
  useEffect(() => {
    const fetchStationRevenue = async () => {
      try {
        // Fetch revenue and user visit count for each station
        const stationsResponse = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/evUser/revenue/all/stations`
        );
        setStations(stationsResponse.data);

        // Fetch the total revenue
        const totalResponse = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/evUser/revenue/total`
        );
        setTotalRevenue(totalResponse.data.totalRevenue);
      } catch (error) {
        console.error("Error fetching revenue data:", error);
      }
    };

    fetchStationRevenue();
  }, []);

  return (
    <div className="max-h-full">
      <div className="h-16 border border-gray-100 rounded-xl bg-white relative mb-4">
        <div className="h-full flex items-center justify-between px-4">
          <h1 className="font-normal text-2xl text-black">Revenue</h1>
          <div className="flex items-center text-xl mr-2">
            <h1>Total Revenue: ${totalRevenue}</h1>
          </div>
        </div>
      </div>

      {/* Grid of cards for station revenue and user visits */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {stations.map((station) => (
          <div key={station._id} className="bg-white border border-gray-200 rounded-xl p-4 shadow-lg">
            <h2 className="text-lg font-medium text-gray-800 mb-6">{station.name}</h2>
            <div className="flex justify-between mb-1">
              <p className="text-gray-600">Revenue Generated:</p>
              <p className="text-black font-bold">${station.revenue}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Total Users Visited:</p>
              <p className="text-black font-bold">{station.user_visited_count}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RevenueAdmin;
