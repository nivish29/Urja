import { FeedbacksReceivedForm } from "../../components/feedbackReceivedForm";
import { data } from "@/app/utils/feedback_data";

const FeedBackReceived = () => {
  return (
    <div className="pb-32">
      <div className="h-16 border border-gray-100 rounded-xl bg-white">
        <div className="h-full flex items-center">
          <h1 className="ml-4 font-normal text-2xl">Feedbacks</h1>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(18rem,1fr))] gap-5 mt-4">
        {data.map((feedback) => (
          <FeedbacksReceivedForm
            key={feedback.feedbackId}
            feedbackId={feedback.feedbackId}
            date={feedback.date}
            name={feedback.name}
            email={feedback.email}
            subject={feedback.subject}
            message={feedback.message}
            status={feedback.status}
          />
        ))}
      </div>
    </div>
  );
};

export default FeedBackReceived;
