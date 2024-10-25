"use client";
import { useEffect, useState } from "react";
import { Pencil, Trash } from "lucide-react";

const EVUsers = () => {
  const [users, setUsers] = useState([]); // State to store user data
  const [searchPhone, setSearchPhone] = useState(""); // State for search input
  const [filteredUsers, setFilteredUsers] = useState([]); // State for filtered user data

  // Define columns for the table
  const columns = ["Name", "Phone No.", "Email ID", "Aadhar Number", "Action"];

  // Fetch user data from the API
  const fetchUsers = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/evUser/users`);
      const data = await response.json();
      setUsers(data); // Set the fetched user data
      setFilteredUsers(data); // Initialize filtered users
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Effect to fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle search button click
  const handleSearch = () => {
    if (searchPhone) {
      // Filter users based on phone number
      const filtered = users.filter((user) =>
        user.phone_number.includes(searchPhone)
      );
      setFilteredUsers(filtered); // Update filtered users
    } else {
      setFilteredUsers(users); // Reset to original user data if input is empty
    }
  };

  return (
    <div className="max-h-full">
      <div className="h-16 border border-gray-100 rounded-xl bg-white relative">
        <div className="h-full flex items-center justify-between px-4">
          <h1 className="font-normal text-2xl text-black">Registered Battery Swap Users</h1>
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
                {filteredUsers.length > 0 ? (
                  filteredUsers.map((user) => (
                    <tr key={user._id} className="bg-white border-b hover:bg-gray-50">
                      <td className="px-6 py-1 border-r border-l font-sm text-[#1F1F1F]">
                        {`${user.firstname} ${user.lastname}`} {/* Display user's full name */}
                      </td>
                      <td className="px-6 py-2 border-r">{user.phone_number}</td>
                      <td className="px-6 border-r">{user.email}</td>
                      <td className="px-6 border-r">{user.aadhar || "N/A"}</td> {/* Display "N/A" if aadhar is empty */}
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
                      No users found.
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

export default EVUsers;
