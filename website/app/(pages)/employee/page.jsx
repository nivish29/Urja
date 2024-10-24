"use client"
import { Delete, Edit, Pencil, Plus, Trash } from "lucide-react"
import { useState } from "react"
import AddEmployeeSideBar from "../../components/Sidebars/addEmployeeSidebar"
import { data } from "../../utils/employee_data"
import EditEmployeeSideBar from "../../components/Sidebars/editEmployeeSidebar"

const Employee = () => {
  const [expanded, setExpanded] = useState(false)
  const [editExpanded, setEditExpanded] = useState(false)

  const columns = [
    "Employment ID",
    "Name",
    "Start Date",
    "Employment Type",
    "Role",
    "Gender",
    "",
    "Action",
  ]

  const handleExpanded = () => {
    console.log(expanded)
    setExpanded((prev) => !prev)
  }

  const handleEditExpanded = () => {
    setEditExpanded((prev) => !prev)
  }

  return (
    <div className="max-h-full">
      <div className="h-16 border border-gray-100 rounded-xl bg-white relative">
        <div className="h-full flex items-center justify-between px-4">
          <h1 className=" font-normal text-2xl">Employee</h1>
          <button
            type="button"
            className="bg-[#014E53] items-center flex text-white px-12 py-2 rounded-lg hover:scale-95 hover:bg-[#014E53] transition-all duration-300"
            onClick={handleExpanded}
          >
            <Plus width={18} height={18} className="mr-2" /> Add New Employee
          </button>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-black bg-opacity-100 z-40 transition-opacity duration-300 ease-in-out ${
          expanded
            ? "opacity-50 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={handleExpanded}
      />
      <div
        className={`fixed top-0 right-0 h-full w-[34rem] justify-between flex-col flex bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          expanded ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <AddEmployeeSideBar />
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
                      className="px-6 py-2 font-light text-[#595959] border-b border-l border-r"
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
                      {row.employmentId}
                    </td>
                    <td className="px-6 border-r ">{row.name}</td>
                    <td className="px-6 border-r">{row.startDate}</td>
                    <td className="px-6 border-r py-1 text-xs">
                      <div
                        className={` w-fit px-3 py-[3px] rounded-md ${
                          row.employmentType == "Full Time"
                            ? "text-[#1570EF] bg-[#EFF8FF]"
                            : row.employmentType == "Part Time"
                              ? "text-[#079455] bg-[#ECFDF3]"
                              : row.employmentType == "Contract"
                                ? "text-[#D92D20] bg-[#FEF3F2]"
                                : "text-[#DC6803] bg-[#FFFAEB]"
                        }`}
                      >
                        {row.employmentType}
                      </div>
                    </td>
                    <td className="px-6 border-r py-1 text-xs">
                      <div className="bg-[#F5F5F5] w-fit py-[3px] px-3 rounded-md">
                        {row.role}
                      </div>
                    </td>
                    <td className="px-6 border-r">
                      <div
                        className={` w-fit px-3 py-[3px] rounded-md ${
                          row.gender == "Male"
                            ? "text-[#1570EF] bg-[#EFF8FF]"
                            : "text-[#079455] bg-[#ECFDF3]"
                        }`}
                      >
                        {row.gender}
                      </div>
                    </td>
                    <td className="px-6 border-r w-[10rem]"></td>
                    <td className="px-4 border-r w-[5rem]">
                      {" "}
                      <div className="flex justify-around ">
                        {" "}
                        <Pencil
                          size={16}
                          color="#1F1F1F"
                          className="cursor-pointer transition-all duration-200 hover:scale-110"
                          onClick={handleEditExpanded}
                        />{" "}
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
      <div
        className={`fixed inset-0 bg-black bg-opacity-100 z-40 transition-opacity duration-300 ease-in-out ${
          editExpanded
            ? "opacity-50 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={handleEditExpanded}
      />
      <div
        className={`fixed top-0 right-0 h-full w-[35rem] justify-between flex-col flex bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          editExpanded ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <EditEmployeeSideBar />
      </div>
    </div>
  )
}
export default Employee
