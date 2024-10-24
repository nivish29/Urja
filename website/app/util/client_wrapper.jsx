"use client";

import { usePathname } from "next/navigation";
import SidebarMain from "./SidebarMain";
import { useState } from "react";
import GrantQuestionSideBar from "../components/Sidebars/grantQuestionSidebar";

export default function ClientWrapper({ children }) {
  const pathname = usePathname();
  const isSignInPage = pathname === "/signin";
  const isSignUpPage = pathname === "/signup";

  const [isGrantSidebarVisible, setGrantSidebarVisible] = useState(false);

  const toggleGrantSidebar = () => {
    setGrantSidebarVisible((prev) => !prev);
  };

  const togglePromoCodeSidebar = () => {};

  return (
    <div className="flex h-screen overflow-hidden">
      {!isSignInPage && !isSignUpPage && (
        <div className="flex-shrink-0">
          <SidebarMain onGrantQuestionClick={toggleGrantSidebar} />
        </div>
      )}

      <main
        className={`flex-grow overflow-y-auto p-4 ${
          isSignInPage || isSignUpPage ? "w-full" : ""
        } `}
      >
        {children}
      </main>

      <div
        className={`fixed inset-0 bg-black bg-opacity-100 z-40 transition-opacity duration-300 ease-in-out ${
          isGrantSidebarVisible
            ? "opacity-50 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleGrantSidebar}
      />

      <div
        className={`fixed top-0 right-0 h-full w-[34rem] bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isGrantSidebarVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <GrantQuestionSideBar />
      </div>
    </div>
  );
}
