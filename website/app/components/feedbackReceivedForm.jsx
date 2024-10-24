export const FeedbacksReceivedForm = ({ feedbackId, date, name, email, subject, message, status }) => {
  return (
    <div className="border shadow-md border-gray-100 rounded-xl bg-white p-4 mt-4">
      <div className="flex items-center">
        <div className="w-4 h-2 rounded-xl bg-[#1570EF] mr-2" />
        <span className="mr-2 text-[#595959] font-light text-[15px]">
          {feedbackId} <span className="ml-2 mr-1">.</span>
        </span>
        <span className="text-[#595959] font-light text-[15px]">
          {date}
        </span>
      </div>
      <div>
        <div className="mt-3">
          <span className="text-[#8C8C8C]">Name :</span> <span>{name}</span>
        </div>
        <div className="mt-2">
          <span className="text-[#8C8C8C]">Email :</span> <span>{email}</span>
        </div>
        <div className="mt-2">
          <span className="text-[#8C8C8C]">Subject :</span> <span>{subject}</span>
        </div>
        <div className="mt-2">
          <span className="text-[#8C8C8C]">Message :</span> <span>{message}</span>
        </div>
      </div>
      <div className={`mt-3 rounded-sm px-2 text-xs inline-block ${status === 'Resolved' ? 'bg-[#EFF8FF] text-[#079455]' : 'bg-[#FFE0E0] text-[#D93025]'}`}>
        {status}
      </div>
    </div>
  );
};
