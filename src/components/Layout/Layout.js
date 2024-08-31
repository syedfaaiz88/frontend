import React from "react";
import Sidebar from "../UI/Sidebar";
import { FaComments, FaLaptopCode, FaRunning } from "react-icons/fa";
import Footer from "./Footer";
import { FcMenu } from "react-icons/fc";
import { PiCertificateFill } from "react-icons/pi";
import { BsPersonVcardFill } from "react-icons/bs";
import Header from "./Header";
import { TbTimelineEventText } from "react-icons/tb";

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
        text: "Timeline",
        icon: <TbTimelineEventText />,
        route: "/timeline",
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
    <div className="flex flex-col h-screen">
      {/* Header */}
      <Header />

      {/* Main layout with sidebar and content */}
      <div className="flex flex-row h-full overflow-hidden">
        {/* Sidebar */}
        <Sidebar items={items} />

        {/* Content area */}
        <div className="flex-1 overflow-y-auto">
          <div className="flex flex-col justify-between min-h-full">
            {/* Main content */}
            <main className="p-6">{element}</main>

            {/* Footer */}
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
