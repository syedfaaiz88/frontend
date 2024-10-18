import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaCamera,
  FaBirthdayCake,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaTransgender,
  FaUserTag,
} from "react-icons/fa";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import moment from "moment";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { getProfileDetails } from "../../Redux/Actions/UserActions";
import Modal from "../UI/Modal";
import EditProfileImage from "./EditProfile/EditProfileImage";
import InfoItem from "../UI/InfoItem";

const UserProfile = () => {
  const dispatch = useDispatch();
  const getProfileDetailsData = useSelector(
    (state) => state.get_profile_details_reducer.getProfileDetails
  );
  const user = getProfileDetailsData ? getProfileDetailsData.result : null;
  const isLoading = useSelector(
    (state) => state.get_profile_details_reducer.isLoading
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(getProfileDetails());
  }, [dispatch]);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Profile Header */}
      <div className="relative flex flex-col sm:flex-row sm:items-center mb-4">
        {isLoading ? (
          <div className="flex flex-col items-center sm:flex-row sm:items-center">
            <Skeleton circle={true} height={96} width={96} />
            <div className="mt-4 sm:ml-6 sm:mt-0">
              <Skeleton width={150} height={24} />
              <Skeleton width={220} height={18} className="mt-2" />
              <Skeleton width={150} height={14} className="mt-2" />
            </div>
          </div>
        ) : (
          <>
            <div className="relative flex-shrink-0 w-24 h-24 mx-auto sm:mx-0 cursor-pointer group">
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
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-full opacity-0 group-hover:opacity-100"
                onClick={() => {
                  setIsModalOpen(true);
                }}
              >
                <FaCamera className="text-white text-2xl" />
              </div>
            </div>
            <div className="mt-4 sm:ml-6 sm:mt-0 text-center sm:text-left">
              <h1 className="text-2xl font-semibold text-gray-900">
                {user?.first_name} {user?.last_name}
              </h1>
              <p className="text-gray-700 mt-1">{user?.bio}</p>
              <p className="text-sm text-gray-500 mt-1">
                Member since {moment(user?.date_joined).format("MMMM YYYY")}
              </p>
            </div>
            <div className="absolute top-6 right-6 hidden sm:block">
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
      <div className="text-xs md:text-sm space-y-4 grid grid-cols-1 mt-10">
      {[
          { icon: FaUserTag, tooltip: "Username", value: user?.username },
          { icon: FaEnvelope, tooltip: "Email", value: user?.email },
          { icon: FaPhone, tooltip: "Phone", value: user?.phone_number },
          { icon: FaMapMarkerAlt, tooltip: "Address", value: user?.address },
          { icon: FaBirthdayCake, tooltip: "Date of Birth", value: moment(user?.date_of_birth).format("MMMM Do, YYYY") },
          { icon: FaTransgender, tooltip: "Gender", value: user?.gender === 1 ? "Male" : "Female" },
        ].map((item, index) => (
          <InfoItem key={index} icon={item.icon} tooltip={item.tooltip} value={item.value} isLoading={isLoading}/>
        ))}
      </div>
      {/* Modal for image upload */}
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <EditProfileImage />
      </Modal>
    </div>
  );
};

export default UserProfile;
