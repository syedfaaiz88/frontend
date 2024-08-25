import React from "react";
import Sidebar from "../UI/Sidebar";
import { FaComments, FaLaptopCode, FaRunning } from "react-icons/fa";
import Footer from "./Footer";
import { FcMenu } from "react-icons/fc";
import { PiCertificateFill } from "react-icons/pi";
import { BsPersonVcardFill } from "react-icons/bs";

function Layout({ element }) {
  const items = {
    barsIcon: <FcMenu />,
    links: [
      {
        text: "Personal",
        icon: <BsPersonVcardFill />,
        route: "/personal",
      },
      {
        text: "Fitness",
        icon: <FaRunning />,
        route: "/fitness",
      },
      {
        text: "Academics",
        icon: <PiCertificateFill />,
        route: "/academics",
      },
      {
        text: "Connect",
        icon: <FaComments />,
        route: "/connect-with-me",
      },
      {
        text: "Skills",
        icon: <FaLaptopCode />,
        route: "/skills",
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
