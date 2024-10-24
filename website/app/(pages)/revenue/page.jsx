"use client"
import { EngagementCard } from "../../components/engagementCard"
import DailyRevenue from "@/app/components/dailyRevenue";

const Revenue = () => {
    return (
        <div>
            <div className="h-16 border border-gray-100 rounded-xl bg-white">
                <div className="h-full flex items-center ">
                    <h1 className="ml-4 font-normal text-2xl">Revenue</h1>
                </div>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5 mt-4">
                <EngagementCard name={"Solar Power Supplied To Station (in KWatt)"} num={55} />
                <EngagementCard name={"Cost per unit (INR)"} num={7} />
            </div>
            <DailyRevenue />
        </div>
    )
}

export default Revenue;