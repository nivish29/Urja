import { ReportForms } from "../../components/reportForms"

const PDFReport = () => {
  return (
    <div className="pb-32">
      <div className="h-16 border border-gray-100 rounded-xl bg-white">
        <div className="h-full flex items-center ">
          <h1 className="ml-4 font-normal text-2xl">PDF Reports</h1>
        </div>
      </div>
      <h1 className="mt-5 mb-4 text-xl ml-4">Vedic Reports</h1>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(18rem,1fr))] gap-5">
        <ReportForms />
        <ReportForms />
        <ReportForms />
        <ReportForms />
      </div>
      <h1 className="mt-5 mb-4 text-xl ml-4">Western Reports</h1>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(18rem,1fr))] gap-5">
        <ReportForms />
        <ReportForms />
        <ReportForms />
        <ReportForms />
      </div>
    </div>
  )
}

export default PDFReport
