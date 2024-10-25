"use client";
import { useState, useEffect } from "react";

const Requests = () => {
  const [expanded, setExpanded] = useState(false);
  const [editExpanded, setEditExpanded] = useState(false);
  const [showUnapproved, setShowUnapproved] = useState(false); // Toggle state
  const [data, setData] = useState([]); // State for user data
  const [loading, setLoading] = useState(true); // State for loading

  const columns = [
    "Name",
    "Phone No.",
    "Email ID",
    "Address",
    "City",
    "State",
    "Pincode",
    "Action",
  ];

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true before fetching
      try {
        const response = await fetch(`${process.env.VERCEL_NEXT_PUBLIC_BACKEND_URL}/api/user/getAllUsers`);
        const result = await response.json();
        const formattedData = result.map((user) => ({
          name: `${user.firstname} ${user.lastname}`, // Combining first and last name
          phone: user.phone_number,
          email: user.email,
          address: user.address,
          city: user.city,
          state: user.state,
          pincode: user.pincode,
          action: user.approved, // Using the approved field for action
        }));
        setData(formattedData); 
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchData(); // Call the fetch function
  }, []);

  // Filter the data based on toggle state
  const filteredData = showUnapproved
    ? data.filter((row) => !row.action) // Show unapproved data only when the toggle is on
    : data;

  const handleToggleUnapproved = () => {
    setShowUnapproved((prev) => !prev); // Toggle unapproved filter
  };

  return (
    <div className="max-h-full">
      <div className="h-16 border border-gray-100 rounded-xl bg-white relative">
        <div className="h-full flex items-center justify-between px-4">
          <h1 className="font-normal text-2xl text-black">
            Battery Swap Details
          </h1>
          <div className="flex items-center w-[40%]">
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

      {/* Toggle Button */}
      <div className="mt-4 mb-3">
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="mr-2"
            checked={showUnapproved}
            onChange={handleToggleUnapproved}
          />
          Show Unapproved Only
        </label>
      </div>

      <div className="border border-gray-100 rounded-xl bg-white mt-3 ">
        <div className="overflow-x-auto sm:rounded-lg p-3">
          <div className="max-h-[calc(100vh-135px)] overflow-y-auto">
            {loading ? ( // Conditional rendering for loading state
              <div className="text-center py-4">
                <p className="text-gray-500">Loading data...</p>
              </div>
            ) : (
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
                  {filteredData.map((row, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className="bg-white border-b hover:bg-gray-50"
                    >
                      <td className="px-6 py-1 border-r border-l font-sm text-[#1F1F1F] ">
                        {row.name}
                      </td>
                      <td className="px-6 py-1 border-r">{row.phone}</td>
                      <td className="px-6 border-r">{row.email}</td>
                      <td className="px-6 border-r">{row.address}</td>
                      <td className="px-6 border-r">{row.city}</td>
                      <td className="px-6 border-r">{row.state}</td>
                      <td className="px-6 border-r">{row.pincode}</td>

                      <td className="px-4 text-[12px] border-r w-[5rem]">
                        <div
                          className={`flex justify-around rounded-md px-2 ${
                            row.action === true ? "bg-green-300" : "bg-red-300"
                          }`}
                        >
                          {row.action === true ? "Approved" : "UnApproved"}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requests;
