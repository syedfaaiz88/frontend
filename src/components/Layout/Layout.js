import React from "react";
import Sidebar from "../UI/Sidebar";
import { LiaBarsSolid } from "react-icons/lia";
import { FaBriefcase, FaGraduationCap, FaRunning } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import Footer from "./Footer";

function Layout({ element }) {
  const items = {
    barsIcon: <LiaBarsSolid />,
    links: [
      {
        text: "Portfolio",
        icon: <FaBriefcase />,
        route: "/portfolio",
      },
      {
        text: "Fitness",
        icon: <FaRunning />,
        route: "/fitness",
      },
      {
        text: "Education",
        icon: <FaGraduationCap />,
        route: "/education",
      },
      {
        text: "Social",
        icon: <IoShareSocialSharp />,
        route: "/social",
      },
    ],
  };
  return (
    <div className="flex flex-row max-h-screen">
      {/* Sidebar (Hidden by default on mobile) */}
      <Sidebar items={items} />

      {/* Main Content Area */}
      <div className="flex-1 min-h-screen overflow-y-scroll">
        <div className="flex flex-col justify-between min-h-screen">
          <main className="p-6 overflow-auto">{element}</main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout;
