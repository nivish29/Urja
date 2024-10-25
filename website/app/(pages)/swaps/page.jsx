"use client";
import { useEffect, useState } from "react";
import { Pencil, Trash } from "lucide-react";

const Employee = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchPhone, setSearchPhone] = useState("");
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  // Updated columns to reflect the new requirements
  const columns = [
    "Name",
    "Phone No.",
    "Transaction ID",
    "Date",
    "Station Name",
    "Battery ID",
    "Price Paid",
    "Action",
  ];

  // Fetch transaction data from the API
  const fetchTransactions = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/evUser/transactions`);
      const data = await response.json();
      setTransactions(data);
      setFilteredTransactions(data); // Initialize filtered data
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  // Fetch transactions based on phone number search
  const fetchFilteredTransactions = async (phone) => {
    try {
      const response = await fetch(`${process.env.BACKEND_URL}/api/evUser/transactions/search/${phone}`);
      const data = await response.json();

      // Check if the data is an array before updating the state
      if (Array.isArray(data)) {
        setFilteredTransactions(data); // Update the filtered transactions
      } else {
        setFilteredTransactions([]); // Reset to empty if not an array
      }
    } catch (error) {
      console.error("Error fetching filtered transactions:", error);
      setFilteredTransactions([]); // Reset to empty on error
    }
  };

  // Effect to fetch transactions on component mount
  useEffect(() => {
    fetchTransactions();
  }, []);

  // Handle search button click
  const handleSearch = () => {
    if (searchPhone) {
      fetchFilteredTransactions(searchPhone);
    } else {
      setFilteredTransactions(transactions); // Reset to original data if search is cleared
    }
  };

  return (
    <div className="max-h-full">
      <div className="h-16 border border-gray-100 rounded-xl bg-white relative">
        <div className="h-full flex items-center justify-between px-4">
          <h1 className="font-normal text-2xl text-black">Battery Swap Details</h1>
          <div className="flex items-center w-[40%]">
            <input
              type="text"
              className="border h-10 rounded-md border-gray-300 pl-3 w-full placeholder:font-light text-sm placeholder:text-gray-400"
              placeholder="Search by Phone Number"
              value={searchPhone}
              onChange={(e) => setSearchPhone(e.target.value)} // Update searchPhone on input change
            />
            <button
              type="button"
              className="bg-[#014E53] ml-4 text-white px-4 py-2 rounded-lg hover:scale-95 hover:bg-[#2f6a6c] transition-all duration-300"
              onClick={handleSearch} // Trigger search
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="border border-gray-100 rounded-xl bg-white mt-3">
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
                {Array.isArray(filteredTransactions) && filteredTransactions.length > 0 ? (
                  filteredTransactions.map((row) => (
                    <tr key={row._id} className="bg-white border-b hover:bg-gray-50">
                      <td className="px-6 py-1 border-r border-l font-sm text-[#1F1F1F] ">
                        {row.name}
                      </td>
                      <td className="px-6 py-2 border-r">{row.phone_number}</td>
                      <td className="px-6 border-r">{row.transaction_id}</td>
                      <td className="px-6 border-r">{new Date(row.date).toLocaleString()}</td>
                      <td className="px-6 border-r">{row.station_name}</td>
                      <td className="px-6 border-r">{row.battery_id}</td>
                      <td className="px-6 border-r">{row.price_paid}</td>

                      <td className="px-4 border-r w-[5rem]">
                        <div className="flex justify-around">
                          <Pencil
                            size={16}
                            color="#1F1F1F"
                            className="cursor-pointer transition-all duration-200 hover:scale-110"
                          />
                          <Trash
                            size={16}
                            color="#1F1F1F"
                            className="cursor-pointer transition-all duration-200 hover:scale-110"
                          />
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={columns.length} className="text-center py-2">
                      No transactions found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;
