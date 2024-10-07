import React, { useEffect, useState } from "react";
import {
  FaUser,
  FaCog,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // Import Tippy.js styles
import moment from "moment"; // For formatting date
import HorizontalTabBar from "../UI/HorizontalTabBar";
import { Outlet } from "react-router-dom";
import { storedUser } from "../../utils/getUser";

const UserProfile = () => {
  const [user, setUser] = useState({});
  const [activeTab, setActiveTab] = useState("ProfileDetails");

  useEffect(() => {
    setUser(storedUser);
  }, []);
  const tabs = [
    { label: "Profile", icon: <FaUser />, path: "/user-profile/details" },
    { label: "Settings", icon: <FaCog />, path: "/user-profile/settings" },
  ];
  return (
    <div className="max-w-full min-h-screen mx-10 bg-white border border-b-2 rounded-lg overflow-hidden mt-10">
      {/* Profile Header */}
      <div className="relative p-6 flex items-center">
        <div className="flex-shrink-0 w-24 h-24">
          {user.profile_image ? (
            <img
              src={user.profile_image}
              alt="Profile"
              className="w-full h-full rounded-full object-cover border-4 border-white shadow-md"
            />
          ) : user.gender ? (
            user.gender === 1 ? (
              <img
                src="images/male_profile.svg"
                alt="Profile"
                className="w-full h-full rounded-full object-cover border-2 border-white shadow-md"
              />
            ) : (
              <img
                src="images/female_profile.svg"
                alt="Profile"
                className="w-full h-full rounded-full object-cover border-4 border-white shadow-md"
              />
            )
          ) : (
            <img
              src="images/male_profile.svg"
              alt="Profile"
              className="w-full h-full rounded-full object-cover border-4 border-white shadow-md"
            />
          )}
        </div>
        <div className="ml-6">
          <h1 className="text-2xl font-semibold text-gray-900">
            {user.first_name} {user.last_name}
          </h1>
          <p className="text-gray-700 mt-1 italic">{user.bio}</p>
          <p className="text-sm text-gray-500 mt-1">
            Member since {moment(user.date_joined).format("MMMM YYYY")}
          </p>
        </div>
        <div className="absolute top-6 right-6">
          {user.is_verified ? (
            <Tippy
              content={
                <div className="flex items-center gap-2">
                  Email is verified <FaCheckCircle className="text-green-500" />
                </div>
              }
              theme="light"
              placement="top"
              arrow={true}
            >
              <span className="flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold shadow-md cursor-pointer">
                <FaCheckCircle className="mr-1" /> Verified
              </span>
            </Tippy>
          ) : (
            <span className="flex items-center bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-semibold shadow-md">
              <FaExclamationCircle className="mr-1" /> Not Verified
            </span>
          )}
        </div>
      </div>
      {/* Horizontal Navigation Bar */}
      <HorizontalTabBar
        items={tabs}
        activeTab={activeTab}
        onTabClick={(item) => setActiveTab(item.label)}
      />
      {/* Render Selected Section */}
      <div className="px-6 py-2">
        <Outlet />
      </div>
    </div>
  );
};

export default UserProfile;
