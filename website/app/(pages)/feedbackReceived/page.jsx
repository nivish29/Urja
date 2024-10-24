import {
  FeedbacksReceivedForm,
  QuestionsReceivedForm,
} from "../../components/feedbackReceivedForm"

const FeedBackReceived = () => {
  return (
    <div className="pb-32">
      <div className="h-16 border border-gray-100 rounded-xl bg-white">
        <div className="h-full flex items-center ">
          <h1 className="ml-4 font-normal text-2xl">Feedback Received</h1>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(18rem,1fr))] gap-5">
        <FeedbacksReceivedForm />
        <FeedbacksReceivedForm />
        <FeedbacksReceivedForm />
        <FeedbacksReceivedForm />
      </div>
    </div>
  )
}

export default FeedBackReceived
