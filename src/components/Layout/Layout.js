import React from "react";
import Sidebar from "../UI/Sidebar";
import { FaGraduationCap, FaLaptopCode, FaRunning } from "react-icons/fa";
import Footer from "./Footer";
import { FcMenu } from "react-icons/fc";
import { BsPersonRaisedHand } from "react-icons/bs";
import Header from "./Header";
import { TbTimelineEventText } from "react-icons/tb";
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";
import { GiFeather } from "react-icons/gi";
import { MdSportsEsports } from "react-icons/md";

function Layout({ element }) {
  const items = {
    barsIcon: <FcMenu />,
    links: [
      {
        text: "Personal",
        icon: <BsPersonRaisedHand />,
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
        text: "E-Sports",
        icon: <MdSportsEsports />,
        route: "/esports",
      },
      {
        text: "Academics",
        icon: <FaGraduationCap />,
        route: "/academics",
      },
      {
        text: "Connect",
        icon: <HiChatBubbleBottomCenterText />,
        route: "/connect-with-me",
      },
      {
        text: "Skills",
        icon: <FaLaptopCode />,
        route: "/skills",
      },
      {
        text: "Poem",
        icon: <GiFeather />,
        route: "/poem",
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
            <main>{element}</main>

            {/* Footer */}
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
