import { ChartLine } from "lucide-react"

export const EngagementCard = ({ name, num, per }) => {
  return (
    <div className="bg-white flex border border-gray-100 p-3 flex-col rounded-xl ">
      <span className="pb-5">{name}</span>
      <h1 className="text-2xl">{num}</h1>
      <div className="mt-2 flex bg-green-50 px-2 py-1 rounded-2xl w-14">
        <ChartLine color="#079455 " height={14} width={14} />
        <span className="text-[#079455] text-[11px] ">{per}</span>
      </div>
    </div>
  )
}
