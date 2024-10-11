import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FaUser,
  FaCog,
  FaCheckCircle,
  FaExclamationCircle,
  FaCamera,
} from "react-icons/fa";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import moment from "moment";
import HorizontalTabBar from "../UI/HorizontalTabBar";
import { Outlet } from "react-router-dom";
import { MdFeedback } from "react-icons/md";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { getProfileDetails } from "../../Redux/Actions/UserActions";
import Modal from "../UI/Modal";
import EditProfileImage from "./EditProfileImage";

const UserProfile = () => {
  const dispatch = useDispatch();
  const getProfileDetailsData = useSelector(
    (state) => state.get_profile_details_reducer.getProfileDetails
  );
  const user = getProfileDetailsData ? getProfileDetailsData.result : null;
  const isLoading = useSelector(
    (state) => state.get_profile_details_reducer.isLoading
  );
  const [activeTab, setActiveTab] = useState("Profile");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(getProfileDetails());
  }, [dispatch]);

 
  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  const tabs = [
    { label: "Profile", icon: <FaUser />, path: "/user-profile/details" },
    { label: "Settings", icon: <FaCog />, path: "/user-profile/settings" },
    {
      label: "Feedback",
      icon: <MdFeedback />,
      path: "/user-profile/give-feedback",
    },
  ];

  return (
    <div className="max-w-full min-h-screen mx-10 bg-white border rounded-lg overflow-hidden mt-10">
      {/* Profile Header */}
      <div className="relative p-6 flex items-center mb-4">
        {isLoading ? (
          <>
            <Skeleton circle={true} height={96} width={96} />
            <div className="ml-6">
              <Skeleton width={180} height={24} />
              <Skeleton width={250} height={18} className="mt-2" />
              <Skeleton width={180} height={14} className="mt-2" />
            </div>
          </>
        ) : (
          <>
            <div className="relative flex-shrink-0 w-24 h-24 cursor-pointer group">
              <img
                src={
                  user?.profile_picture
                    ? user.profile_picture
                    : user?.gender
                    ? user.gender === 1
                      ? "/images/male_profile.svg"
                      : "/images/female_profile.svg"
                    : "images/male_profile.svg"
                }
                alt="Profile"
                className="w-full h-full rounded-full object-cover border-2 border-white shadow-md"
              />
              {/* Icon that appears on hover */}
              <div
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                onClick={() => {
                  setIsModalOpen(true);
                }}
              >
                <FaCamera className="text-white text-2xl" />
              </div>
            </div>
            <div className="ml-6">
              <h1 className="text-2xl font-semibold text-gray-900">
                {user?.first_name} {user?.last_name}
              </h1>
              <p className="text-gray-700 mt-1 italic">{user?.bio}</p>
              <p className="text-sm text-gray-500 mt-1">
                Member since {moment(user?.date_joined).format("MMMM YYYY")}
              </p>
            </div>
            <div className="absolute top-6 right-6">
              {user?.is_verified ? (
                <Tippy
                  content={
                    <div className="flex items-center gap-2">
                      Email is verified{" "}
                      <FaCheckCircle className="text-green-500" />
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
          </>
        )}
      </div>

      {/* Horizontal Navigation Bar */}
      <HorizontalTabBar
        items={tabs}
        activeTab={activeTab}
        onTabClick={(item) => setActiveTab(item.label)}
      />

      {/* Render Selected Section */}
      <div className="pb-10">
        <Outlet />
      </div>

      {/* Modal for image upload */}
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <EditProfileImage />
      </Modal>
    </div>
  );
};

export default UserProfile;
