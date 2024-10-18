import React from "react";
import Sidebar from "../UI/SidebarV2";
import { FaCog, FaLock, FaUser, FaUserEdit } from "react-icons/fa";
import Footer from "./Footer";
import Header from "./Header";
import { MdFeedback } from "react-icons/md";

function AccountSettingsLayout({ element }) {
  const items = {
    links: [
      {
        text: "Profile",
        icon: <FaUser />,
        route: "/user-profile",
      },
      {
        text: "Profile Settings",
        icon: <FaCog />,
        links: [
          {
            text: "Password",
            icon: <FaLock />,
            route: "/change-password",
          },
          {
            text: "Edit Profile",
            icon: <FaUserEdit />,
            route: "/edit-profile-details",
          },
        ],
      },
      {
        text: "Feedback",
        icon: <MdFeedback />,
        route: "/give-feedback",
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
          <Sidebar items={items} bgColor={"bg-gray-100"} />
        </div>

        {/* Content area */}
        <div className="flex-1 overflow-y-auto">
          <div className="flex flex-col justify-between min-h-full">
            <div className="flex justify-center min-h-screen">
              <div className="p-6 md:p-10 w-full max-w-3xl mx-4">
                <main>{element}</main>
              </div>
            </div>
            {/* Footer */}
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountSettingsLayout;
