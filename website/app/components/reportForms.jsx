"use client"

export const ReportForms = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted")
  }

  return (
    <form
      className="border border-gray-100 rounded-xl bg-white p-4"
      onSubmit={handleSubmit}
    >
      <h1 className="text-[16px] mb-2">Report Name</h1>
      <input
        type="text"
        className="border h-10 rounded-lg border-gray-300 w-full pl-3 placeholder:font-light text-sm placeholder:text-sm"
        placeholder="Natal Chart" // Hint text
        name="reportName"
      />

      <h1 className="text-[16px] mb-2 mt-4">Report Price (INR)</h1>
      <input
        type="text"
        className="border h-10 rounded-lg border-gray-300 w-full pl-3 placeholder:font-light text-sm placeholder:text-sm"
        placeholder="49" // Hint text
        name="reportPriceINR"
      />

      <h1 className="text-[16px] mb-2 mt-4">Report Price (USD)</h1>
      <input
        type="text"
        className="border h-10 rounded-lg border-gray-300 w-full pl-3 placeholder:font-light text-sm placeholder:text-sm"
        placeholder="5" // Hint text
        name="reportPriceUSD"
      />

      <button
        type="submit"
        className="bg-black text-white px-8 py-2 rounded-lg mt-5 mb-2 hover:scale-95 hover:bg-neutral-800 transition-all duration-300"
      >
        Update
      </button>
    </form>
  )
}
