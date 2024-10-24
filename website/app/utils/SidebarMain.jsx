"use client";
import SideBar, { SideBarItem } from "../components/sidebar";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function SidebarMain({
  onGrantQuestionClick,
  onPromoCodeClick,
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [activePath, setActivePath] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    // Get the role from local storage
    const storedRole = localStorage.getItem("role") || "";
    setRole(storedRole);
    setActivePath(pathname);
  }, [pathname]);

  const handleItemClick = (path) => {
    setActivePath(path);
    router.push(path);
  };

  return (
    <div className="h-full">
      <SideBar>
        {/* If the role is 'Admin' or empty, show admin-specific items */}
        {role === "admin" || role === "" ? (
          <>
            <SideBarItem
              text="Details"
              active={activePath === "/detail"}
              onClick={() => handleItemClick("/detail")}
            />
            <SideBarItem
              text="Swaps detail"
              active={activePath === "/swaps"}
              onClick={() => handleItemClick("/swaps")}
            />
            <SideBarItem
              text="EV users"
              active={activePath === "/evuser"}
              onClick={() => handleItemClick("/evuser")}
            />
            <SideBarItem
              text="Revenue"
              active={activePath === "/revenue-admin"}
              onClick={() => handleItemClick("/revenue-admin")}
            />
            <SideBarItem
              text="Feedbacks"
              active={activePath === "/feedbackReceived"}
              onClick={() => handleItemClick("/feedbackReceived")}
            />
          </>
        ) : null}

        {/* If the role is 'user', show user-specific items */}
        {role === "user" ? (
          <>
            <SideBarItem
              text="Dashboard"
              active={activePath === "/dashboard"}
              onClick={() => handleItemClick("/dashboard")}
            />
            <SideBarItem
              text="Revenue"
              active={activePath === "/revenue"}
              onClick={() => handleItemClick("/revenue")}
            />
          </>
        ) : null}
      </SideBar>
    </div>
  );
}
