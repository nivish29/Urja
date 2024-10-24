import { ArrowRightToLine, Pencil } from "lucide-react"
import { useRef, useState } from "react"

const GrantQuestionSideBar = () => {
  return (
    <div className=" h-full flex flex-col justify-between">
      <div className="p-5 overflow-y-auto">
        <div className="flex items-center mb-8">
          <ArrowRightToLine />
          <div className="text-xl font-light ml-4">Grant Questions</div>
        </div>

        {/*form */}
        <h1 className="text-lg font-normal mt-8 mb-4">User Information</h1>
        <form action="">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <h1 className="font-normal text-sm mb-2 ">Email Address</h1>
              <input
                type="text"
                className="border h-8 rounded-md border-gray-300 w-full pl-3 placeholder:font-light text-sm placeholder:text-sm"
                placeholder="wiko@example.com" // Hint text
                name="email"
              />
            </div>
            <div>
              <h1 className="font-normal text-sm   mb-2">
                Number Of Questions
              </h1>
              <input
                type="text"
                className="border h-8 rounded-md  border-gray-300 w-full pl-3 placeholder:font-light text-sm placeholder:text-sm"
                placeholder="3" // Hint text
                name="firstName"
              />
            </div>
          </div>
          <div>
            <h1 className="font-normal text-sm mb-2 mt-4 ">Expiry Date</h1>
            <input
              type="date"
              className="border h-8 rounded-md border-gray-300 w-full pl-3 placeholder:font-light text-sm placeholder:text-sm"
              placeholder="dd/mm/yyyy" // Hint text
              name="startdate"
            />
          </div>
        </form>
      </div>
      <div className="ml-auto pr-5">
        <button
          type="submit"
          className="bg-black text-white px-10 py-2 rounded-lg mt-5 mb-2 hover:scale-95 hover:bg-neutral-800 transition-all duration-300"
        >
          Grant
        </button>
      </div>
    </div>
  )
}
export default GrantQuestionSideBar
