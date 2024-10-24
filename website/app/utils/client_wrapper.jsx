"use client";

import { usePathname } from "next/navigation";
import SidebarMain from "../utils/SidebarMain";
import { useState } from "react";
import GrantQuestionSideBar from "../components/Sidebars/grantQuestionSidebar";
// import PromoCodeSideBar from "../components/Sidebars/grantPromoCodeSidebar";

export default function ClientWrapper({ children }) {
  const pathname = usePathname();
  const isSignInPage = pathname === "/signin";
  const [isGrantSidebarVisible, setGrantSidebarVisible] = useState(false);
  // const [isPromoCodeSidebarVisible, setPromoCodeSidebarVisible] =
  //   useState(false);

  const toggleGrantSidebar = () => {
    setGrantSidebarVisible((prev) => !prev);
  };
  const togglePromoCodeSidebar = () => {
    // setPromoCodeSidebarVisible((prev) => !prev);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {!isSignInPage && (
        <div className="flex-shrink-0">
          <SidebarMain
            onGrantQuestionClick={toggleGrantSidebar}
            // onPromoCodeClick={togglePromoCodeSidebar}
          />
        </div>
      )}

      <main
        className={`flex-grow overflow-y-auto p-4 ${
          isSignInPage ? "w-full" : ""
        }`}
      >
        {children}
      </main>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-100 z-40 transition-opacity duration-300 ease-in-out ${
          isGrantSidebarVisible
            ? "opacity-50 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleGrantSidebar}
      />
      {/* Right Sliding GrantQuestion Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[34rem] bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isGrantSidebarVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <GrantQuestionSideBar />
      </div>

      {/* Overlay */}
      {/* <div
        className={`fixed inset-0 bg-black bg-opacity-100 z-40 transition-opacity duration-300 ease-in-out ${
          isPromoCodeSidebarVisible
            ? "opacity-50 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={togglePromoCodeSidebar}
      /> */}
      {/* Right Sliding PromoCode Sidebar */}
      {/* <div
        className={`fixed top-0 right-0 h-full w-[34rem] bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isPromoCodeSidebarVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <PromoCodeSideBar />
      </div> */}
    </div>
  );
}
