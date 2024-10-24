"use client"
import SideBar, { SideBarItem } from "../components/sidebar"
import { useRouter, usePathname } from "next/navigation"
import { useState, useEffect } from "react"

export default function SidebarMain({
  onGrantQuestionClick,
  onPromoCodeClick,
}) {
  const router = useRouter()
  const pathname = usePathname()
  const [activePath, setActivePath] = useState("")

  useEffect(() => {
    setActivePath(pathname)
  }, [pathname])

  const handleItemClick = (path) => {
    setActivePath(path)
    // console.log(pathname)
    // console.log(searchParams)
    router.push(path)
  }

  return (
    <div className="h-full">
      <SideBar>
        <SideBarItem
          text="Dashboard"
          active={activePath === "/dashboard"}
          onClick={() => handleItemClick("/dashboard")}
        />
        <SideBarItem
          text="Details"
          active={activePath === "/detail"}
          onClick={() => handleItemClick("/detail")}
        />
        <SideBarItem
          text="Revenue"
          active={activePath === "/revenue"}
          onClick={() => handleItemClick("/revenue")}
        />
        <SideBarItem
          text="Feedbacks Received"
          active={activePath === "/feedbackReceived"}
          onClick={() => handleItemClick("/feedbackReceived")}
        />
        <SideBarItem
          text="Customers"
          active={activePath === "/customer"}
          onClick={() => handleItemClick("/customer")}
        />
        <SideBarItem
          text="Grant Questions"
          active={activePath === "/grantQuestions"}
          // onClick={() => handleItemClick("/grantQuestions")}
          onClick={onGrantQuestionClick}
        />
      </SideBar>
    </div>
  )
}
