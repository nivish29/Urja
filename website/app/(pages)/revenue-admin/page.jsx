"use client";
import { useState } from "react";

const RevenueAdmin = () => {
    const stations = [
        { name: "Central Station", revenue: 7520, users: 3450 },
        { name: "Eastside Terminal", revenue: 9120, users: 4150 },
        { name: "West End Depot", revenue: 6400, users: 2830 },
        { name: "North Point Station", revenue: 8700, users: 3910 },
        { name: "South Hills Station", revenue: 5600, users: 1980 },
        { name: "Lakeview Terminal", revenue: 10150, users: 4890 },
        { name: "Green Park Station", revenue: 7830, users: 3560 },
        { name: "Riverside Station", revenue: 9300, users: 4250 },
        { name: "Airport Terminal", revenue: 11800, users: 5400 },
        { name: "City Center Station", revenue: 8500, users: 3920 },
        { name: "Union Station", revenue: 9450, users: 4380 },
      ];
      

  return (
    <div className="max-h-full">
      <div className="h-16 border border-gray-100 rounded-xl bg-white relative mb-4">
        <div className="h-full flex items-center justify-between px-4">
          <h1 className="font-normal text-2xl text-black">Revenue</h1>
          <div className="flex items-center text-xl mr-2">
            <h1>Total Revenue: $10,600</h1>
          </div>
        </div>
      </div>

      {/* Grid of cards for station revenue and user visits */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {stations.map((station, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 shadow-lg">
            <h2 className="text-lg font-medium text-gray-800 mb-6">{station.name}</h2>
            <div className="flex justify-between mb-1">
              <p className="text-gray-600">Revenue Generated:</p>
              <p className="text-black font-bold">${station.revenue}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Total Users Visited:</p>
              <p className="text-black font-bold">{station.users}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RevenueAdmin;
