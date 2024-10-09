import React from "react";
import Sidebar from "../UI/SidebarV2";
import {
  FaComments,
  FaFistRaised,
  FaGraduationCap,
  FaLaptopCode,
  FaRunning,
} from "react-icons/fa";
import Footer from "./Footer";
import { FcMenu } from "react-icons/fc";
import { BsPersonRaisedHand } from "react-icons/bs";
import Header from "./Header";
import { TbTimelineEventText } from "react-icons/tb";
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";
import {
  GiFeather,
  GiHighKick,
  GiWeightLiftingUp,
} from "react-icons/gi";
import { MdPermContactCalendar, MdSportsEsports } from "react-icons/md";
import { RiBilliardsFill } from "react-icons/ri";
import { TiLocation } from "react-icons/ti";

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
        links: [
          {
            text: "Taekwondo",
            icon: <GiHighKick />,
            route: "/taekwondo",
          },
          {
            text: "Calisthenics",
            icon: <FaFistRaised />,
            route: "/calisthenics",
          },
          {
            text: "Powerlifting",
            icon: <GiWeightLiftingUp />,
            route: "/powerlifting",
          },
          {
            text: "Bodybuilding",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                color="#000000"
                fill="none"
                className="text-gray-800"
              >
                <path
                  d="M2.01792 20.3051C3.14656 21.9196 8.05942 23.1871 10.3797 20.1645C12.8894 21.3649 17.0289 20.9928 20.3991 19.1134C20.8678 18.8521 21.3112 18.5222 21.5827 18.0593C22.1957 17.0143 22.2102 15.5644 21.0919 13.4251C19.2274 8.77072 15.874 4.68513 14.5201 3.04212C14.2421 2.78865 12.4687 2.42868 11.3872 2.08279C10.9095 1.93477 10.02 1.83664 8.95612 3.23862C8.45176 3.90329 6.16059 5.5357 9.06767 6.63346C9.51805 6.74806 9.84912 6.95939 11.9038 6.58404C12.1714 6.53761 12.8395 6.58404 13.3103 7.41041L14.2936 8.81662C14.3851 8.94752 14.4445 9.09813 14.4627 9.25682C14.635 10.7557 14.6294 12.6323 15.4651 13.5826C14.1743 12.6492 10.8011 11.5406 8.2595 14.6951M2.00189 12.94C3.21009 11.791 6.71197 9.97592 10.4179 12.5216"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ),
            route: "/bodybuilding",
          },
        ],
      },
      {
        text: "Esports",
        icon: <MdSportsEsports />,
        links: [
          {
            text: "8 Ball Pool",
            icon: <RiBilliardsFill />,
            route: "/8ballpool",
          },
        ],
      },
      {
        text: "Academics",
        icon: <FaGraduationCap />,
        route: "/academics",
      },
      {
        text: "Connect",
        icon: <HiChatBubbleBottomCenterText />,
        links: [
          {
            text: "Socials",
            icon: <FaComments />,
            route: "/socials",
          },
          {
            text: "Contact",
            icon: <MdPermContactCalendar />,
            route: "/contact",
          },
          {
            text: "Location",
            icon: <TiLocation />,
            route: "/location",
          },
        ],
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
        <div className="hidden md:block">
          <Sidebar items={items} bgColor={'bg-gray-100'}/>
        </div>

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
