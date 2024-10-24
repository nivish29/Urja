import { Frown } from "lucide-react"

const NotFound = () => {
  return (
    <div className="flex items-center justify-center text-center h-full">
      <div className="bg-white border border-gray-200 p-10 rounded-2xl shadow-xl ">
        <div className="flex justify-center">
          <Frown width={70} height={70} />
        </div>
        <div className="text-xl font-light my-2 tracking-wide">Sorry!</div>
        <h1 className="text-lg font-light tracking-wider">
          This Page Is Under Development...
        </h1>
      </div>
    </div>
  )
}

export default NotFound
