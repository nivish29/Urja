import { EngagementCard } from "../../components/engagementCard"

const Dashboard = () => {
  return (
    <div>
      <div className="h-16 border border-gray-100 rounded-xl bg-white">
        <div className="h-full flex items-center ">
          <h1 className="ml-4 font-normal text-2xl">Dashboard</h1>
        </div>
      </div>
      <h1 className="text-xl mt-4 ml-4 mb-4">User Engagement KPIs</h1>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-5">
        <EngagementCard name="Total Users" num="1,99,825" per="12%" />
        <EngagementCard name="Online Users" num="21,358" per="12%" />
        <EngagementCard name="Daily Active Users" num="2,325" per="12%" />
        <EngagementCard name="Weekly Active Users" num="1,354" per="12%" />
        <EngagementCard name="Monthly Active Users" num="524" per="12%" />
        <EngagementCard name="Session Length" num="~20mins" per="12%" />
        <EngagementCard name="Session Frequency" num="22" per="12%" />
      </div>
      <h1 className="text-xl mt-5 ml-4 mb-4">Growth KPIs</h1>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-5">
        <EngagementCard name="User Acquisition Rate" num="20%" per="12%" />
        <EngagementCard name="Referral Rate" num="12%" per="12%" />
        <EngagementCard name="Organic Referral Rate" num="8%" per="12%" />
        <EngagementCard name="Paid Referral Rate" num="2%" per="12%" />
      </div>
      <h1 className="text-xl mt-5 ml-4 mb-4">Analytics KPIs</h1>
      <div className="w-72">
        <EngagementCard name="User Demographics" num="20%" per="12%" />
      </div>
      <h1 className="text-xl mt-5 ml-4 mb-4">Revenue & Financial KPIs</h1>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-5">
        <EngagementCard name="Monthly Revenue(INR)" num="12,00,000" per="12%" />
        <EngagementCard name="Monthly Revenue(USD)" num="$9800" per="12%" />
        <EngagementCard name="Annual Revenue(INR)" num="12,00,000" per="12%" />
        <EngagementCard name="Annual Revenue(USD)" num="$9800" per="12%" />
      </div>
    </div>
  )
}

export default Dashboard
