export const FeedbacksReceivedForm = () => {
  return (
    <div className="border border-gray-100 rounded-xl bg-white p-4 mt-4">
      <div className="flex items-center">
        <div className="w-4 h-2 rounded-xl bg-[#1570EF] mr-2" />
        <span className="mr-2 text-[#595959] font-light text-[15px]">
          #FB1245 <span className="ml-2 mr-1">.</span>
        </span>
        <span className="text-[#595959] font-light text-[15px]">
          03/09/2024
        </span>
      </div>
      <div>
        <div className="mt-3">
          <span className="text-[#8C8C8C]">Name :</span> <span>John Doe</span>
        </div>
        <div className="mt-2">
          <span className="text-[#8C8C8C]">Email :</span>{" "}
          <span>John@gmail.com</span>
        </div>
        <div className="mt-2">
          <span className="text-[#8C8C8C]">Subject :</span>{" "}
          <span>Complain regarding payment</span>
        </div>
        <div className="mt-2">
          <span className="text-[#8C8C8C]">Message :</span>{" "}
          <span>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            pulvinar dictum sollicitudin. Sed consectetur feugiat ligula, nec
            semper mauris semper vitae. Aliquam et metus vehicula, imperdiet
            lacus rutrum, porttitor ligula. Morbi viverra felis ac dolor
            rhoncus, vel gravida ligula malesuada.
          </span>
        </div>
      </div>
      <div className="bg-[#EFF8FF] text-[#079455] mt-3 rounded-sm px-2 text-xs inline-block">
        Resolved
      </div>
    </div>
  )
}
