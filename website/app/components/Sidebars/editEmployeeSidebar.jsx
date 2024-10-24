import {
  ArrowRightToLine,
  AtSign,
  BriefcaseBusiness,
  CalendarCheck,
  CaseSensitive,
  CircleDashed,
  CircleDotDashed,
  CircleUser,
  Folder,
  House,
  Pencil,
  PhoneCall,
  Shell,
  SquareUser,
  Trash,
} from "lucide-react"
import { data } from "../../utils/employee_working_hour"
import { useRef, useState } from "react"

const EditEmployeeSideBar = () => {
  const [image, setImage] = useState(null)
  const fileInputRef = useRef(null)
  const columns = ["Day", "Start Hour", "End Hour", "Total Hour", "Action"]
  return (
    <div className=" h-full flex flex-col justify-between">
      <div className="p-5 overflow-y-auto">
        <div className="flex items-center mb-6 justify-between">
          <div className="flex items-center">
            <ArrowRightToLine size={24} />
            <div className="text-xl font-light ml-4">Employee Detail</div>
          </div>
          <div>
            <button
              type="submit"
              className="bg-[#014E53] text-white text-sm px-8 py-2 rounded-lg hover:scale-95 hover:bg-[#014E53] transition-all duration-300"
            >
              Edit Employee
            </button>
          </div>
        </div>
        <div className="flex ">
          <div>
            <div className="relative">
              <div className="w-36 h-36 rounded-lg bg-gray-200 overflow-hidden">
                {image ? (
                  <img
                    src={image}
                    alt="Avatar"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex text-xs items-center justify-center text-gray-400">
                    No Image
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/*form */}
        <h1 className="text-lg font-normal mt-4">Employee Information</h1>
        <div className="grid grid-cols-[minmax(180px,auto)_1fr] gap-x-8 gap-y-2 mt-2">
          <span className="text-[#595959] text-base font-extralight flex items-center">
            <span>
              <SquareUser size={16} className="mr-2" />
            </span>{" "}
            Employee ID
          </span>
          <span className="text-[#1F1F1F]">12345678901234</span>
          <span className="text-[#595959] text-base font-extralight flex items-center">
            <span>
              <CaseSensitive size={16} className="mr-2" />
            </span>{" "}
            Full Name
          </span>
          <span className="text-[#1F1F1F] break-all">Brian Perez</span>

          <span className="text-[#595959] text-base font-extralight flex items-center">
            <span>
              <CalendarCheck size={16} className="mr-2" />
            </span>{" "}
            Data of Birth
          </span>
          <span className="text-[#1F1F1F]">May 12, 1998</span>

          <span className="text-[#595959] text-base font-extralight flex items-center">
            <span>
              <AtSign size={16} className="mr-2" />
            </span>{" "}
            Email Address
          </span>
          <div className="break-all ">brianperez@example.com</div>

          <span className="text-[#595959] text-base font-extralight flex items-center">
            <span>
              <PhoneCall size={16} className="mr-2" />
            </span>{" "}
            Phone Number
          </span>
          <span className="text-[#1F1F1F]">+1 234 567 890 12</span>

          <span className="text-[#595959] text-base font-extralight flex items-center">
            <span>
              <House size={16} className="mr-2" />
            </span>{" "}
            Address
          </span>
          <span className="text-[#1F1F1F] break-all">
            123 Main Street, Anytown, USA, 12345
          </span>
        </div>
        <h1 className="text-lg font-normal mt-4">Work Information</h1>
        <div className="grid grid-cols-[minmax(180px,auto)_1fr] gap-x-8 gap-y-2 mt-2">
          <span className="text-[#595959] text-base font-extralight flex items-center">
            <span>
              <Shell size={16} className="mr-2" />
            </span>
            Role
          </span>
          <span className="text-[#1F1F1F]">Web Developer</span>
          <span className="text-[#595959] text-base font-extralight flex items-center ">
            <span>
              <Folder size={16} className="mr-2" />
            </span>{" "}
            Department
          </span>
          <span className="text-[#1F1F1F] break-all">
            Technology Department B
          </span>

          <span className="text-[#595959] text-base font-extralight flex items-center">
            <span>
              <CircleUser size={16} className="mr-2" />
            </span>{" "}
            Manager/Supervisor
          </span>
          <span className="text-[#1F1F1F]">Mr. Young Ronald</span>

          <span className="text-[#595959] text-base font-extralight flex items-center">
            <span>
              <CircleDotDashed size={16} className="mr-2" />
            </span>{" "}
            Employment Status
          </span>
          <div className="break-all ">Full-Time</div>

          <span className="text-[#595959] text-base font-extralight flex items-center">
            <span>
              <CalendarCheck size={16} className="mr-2" />
            </span>{" "}
            Start Date
          </span>
          <span className="text-[#1F1F1F]">May 12, 2023</span>

          <span className="text-[#595959] text-base font-extralight flex items-center">
            <span>
              <BriefcaseBusiness size={16} className="mr-2" />
            </span>{" "}
            Day Off Slot
          </span>
          <span className="text-[#1F1F1F] break-all">12 Days / Year</span>
        </div>
        <h1 className="text-lg font-normal my-4">Working Hour</h1>
        <div className="overflow-x-auto sm:rounded-lg">
          <div className="max-h-[calc(100vh-135px)] overflow-y-auto">
            <table className="min-w-full text-sm text-left font-light">
              <thead className="text-sm sticky top-0 bg-white">
                <tr>
                  {columns.map((column, index) => (
                    <th
                      key={index}
                      scope="col"
                      className="px-2 py-1 font-light text-[#595959] border-b  border-r"
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
                    className="bg-white border-b hover:bg-gray-50 "
                  >
                    <td className="px-2 border-r py-1">{row.day}</td>
                    <td className="px-2 border-r py-1">{row.startHour}</td>
                    <td className="px-2 border-r py-1 text-xs">
                      <div>{row.endHour}</div>
                    </td>
                    <td className="px-2 border-r py-1">
                      <div>{row.totalHour}</div>
                    </td>
                    <td className="border-t w-[5rem] py-1">
                      {" "}
                      <div className="flex justify-around ">
                        {" "}
                        <Pencil
                          size={16}
                          color="#1F1F1F"
                          className="cursor-pointer transition-all duration-200 hover:scale-110"
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

      <div className="ml-auto pr-5">
        <button
          type="submit"
          className="bg-black text-white px-10 py-2 rounded-lg mt-5 mb-2 hover:scale-95 hover:bg-neutral-800 transition-all duration-300"
        >
          Add
        </button>
      </div>
    </div>
  )
}
export default EditEmployeeSideBar
