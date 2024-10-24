"use client"
import axios from "axios"
import { useState } from "react"

const Simulation = () => {
  const [loading, setLoading] = useState(false)
  const insertIndex = 4
  const removeIndex = 13

  const handleApiCall = async (index, text) => {
    setLoading(true)
    try {
      const response = await axios.post(
        "http://localhost:9001/api/send-message",
        {
          index: index,
          removeIdx:removeIndex,
          action: text,
        }
      )
      console.log(response.data)
    } catch (error) {
      console.error("Error fetching data:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col mx-4 md:mx-12 font-medium text-3xl">
      <div className="pl-4 md:pl-12 py-6">Swap Station</div>
      <div className="grid grid-cols-4 gap-5 p-4 mx-2 md:mx-10">
        {Array.from({ length: 16 }, (_, index) => (
          <div
            key={index}
            onClick={() => {
              if (index === insertIndex) {
                handleApiCall(index, "insert")
              } else if (index === removeIndex) {
                handleApiCall(index, "remove")
              } else {
                console.log("Sorry no index matched")
              }
            }}
            className={`h-24 md:h-40 text-lg font-normal flex items-center justify-center
              ${
                index === insertIndex
                  ? "bg-white border border-black"
                  : index === removeIndex
                  ? "bg-red-500"
                  : "bg-green-500"
              } 
              rounded-lg shadow-md transition-transform duration-300 hover:scale-105`}
          >
            {/* Optionally show a loading state */}     
            {(index === insertIndex)
              ? "Insert"
              : (index === removeIndex)? `Remove`:''}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Simulation
