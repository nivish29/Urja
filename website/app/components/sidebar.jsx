"use client"
import { jwtDecode } from "jwt-decode"
import { CircleChevronLeft, CircleChevronRight, LogOut } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { createContext, useContext, useEffect, useState } from "react"
import { usePathname } from "next/navigation"

const SidebarContext = createContext()
const SideBar = ({ children }) => {
  const [expanded, setExpanded] = useState(true)
  const router = useRouter()
  const pathname = usePathname()
  const logOut = () => {
    localStorage.clear()
    router.replace("/signin")
  }
  useEffect(() => {
    if (pathname === "/simulation") {
      setExpanded(false)
    }
  }, [pathname]);


  return (
    <>
      <div className="h-full py-4 pl-4 ">
        <div
          className={`bg-white h-full ${
            expanded ? "w-72" : "w-14"
          }  border-[0.1px] border-gray-200 rounded-xl flex flex-col`}
        >
          <div className="flex justify-between p-3">
            <div
              className={`transition-all duration-300 ${
                expanded ? "w-30 h-8" : "w-0 h-0 overflow-hidden"
              }`}
            >
             <div className="flex">
             <Image
                src="/urja_logo.webp"
                width={expanded ? 325 : 0}
                height={expanded ? 30 : 0}
                alt="Picture of the author"
                className={`transition-transform duration-300 rounded-full w-10 ${
                  expanded ? "" : "scale-0"
                }`}
              />
              <Image
                src="/logo_name.png"
                width={expanded ? 90 : 0}
                height={expanded ? 30 : 0}
                alt="Picture of the author"
                className={`transition-transform duration-300 ${
                  expanded ? "" : "scale-0"
                }`}
              />
             </div>
            </div>
            <button
              onClick={() => {
                setExpanded((curr) => !curr)
              }}
              className="mr-[6px]"
            >
              {expanded ? (
                <CircleChevronLeft
                  className="mt-[6px]"
                  height={20}
                  width={20}
                />
              ) : (
                <CircleChevronRight
                  className="mt-[6px]"
                  height={20}
                  width={20}
                />
              )}
            </button>
          </div>
          <SidebarContext.Provider value={{ expanded }}>
            <ul className="flex-1 px-3 pt-2">{children}</ul>
          </SidebarContext.Provider>
          <div className="p-4">
            <div
              className={` text-[16px] items-center duration-0 ${
                expanded ? "" : "scale-0"
              }`}
            >
              Nihal
            </div>
            <div
              className={` text-xs text-[#8C8C8C]  items-center pb-3 duration-0 ${
                expanded ? "" : "scale-0"
              }`}
            >
              Admin
            </div>
            <div className="flex cursor-pointer hover:scale-95 transition-all duration-200">
              <button>
                <LogOut className="" color="#D92D20" height={20} width={20} />
              </button>
              <span
                className={`text-[#D92D20] ml-2 flex items-center duration-0 ${
                  expanded ? "" : "scale-0"
                }`}
              >
                <button onClick={logOut} className="">
                  Logout
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export function SideBarItem({ text, active, onClick }) {
  const { expanded } = useContext(SidebarContext)
  return (
    expanded && (
      <li
        className={`my-1 py-[5px] cursor-pointer font-light text-xl rounded-md transition-colors groups ${
          active
            ? "bg-[#e6eeef] font-normal"
            : "hover:bg-[#E6EEEF] hover:font-normal"
        }`}
        onClick={onClick}
      >
        <span
          className={`text-sm px-2 overflow-hidden  ${expanded ? "w-52" : ""}`}
        >
          {text}
        </span>
      </li>
    )
  )
}

export default SideBar
