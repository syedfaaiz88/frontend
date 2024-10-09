// Settings.js
import React from "react";
import { FaUserEdit } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import HorizontalTabBar from "../../UI/HorizontalTabBar";
import { RiRotateLockFill } from "react-icons/ri";

const Settings = () => {
  const items = [
      {
        label: "Change Password",
        icon: <RiRotateLockFill />,
        path: "change-password",
      },
      {
        label: "Edit Profile Details",
        icon: <FaUserEdit />,
        path: "edit-profile-details",
      }
    ]
  return (
    <div className="flex flex-col h-auto gap-6">
      {/* Sidebar */}
      <HorizontalTabBar items={items}/>
      {/* Main Content (Outlet) */}
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Settings;
