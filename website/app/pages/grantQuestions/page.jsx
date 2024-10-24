"use client"
import { Plus } from "lucide-react"
import { useState } from "react"
import GrantQuestionSideBar from "../../components/Sidebars/grantQuestionSidebar"

const GrantQuestion = () => {
  const [expanded, setExpanded] = useState(false)
  const handleExpanded = () => {
    setExpanded((prev) => !prev)
  }
  return (
    <div className="max-h-full">
      <div className="h-16 border border-gray-100 rounded-xl bg-white relative">
        <div className="h-full flex items-center justify-between px-4">
          <h1 className=" font-normal text-2xl">Grant Question</h1>
          <button
            type="button"
            className="bg-[#014E53] items-center flex text-white px-12 py-2 rounded-lg hover:scale-95 hover:bg-[#014E53] transition-all duration-300"
            onClick={handleExpanded}
          >
            <Plus width={18} height={18} className="mr-2" /> Grant
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
        <GrantQuestionSideBar />
      </div>
    </div>
  )
}

export default GrantQuestion
