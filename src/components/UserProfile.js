import React, { useEffect, useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBirthdayCake,
  FaTransgender,
  FaPen,
  FaUserTag,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // Import Tippy.js styles
import moment from "moment"; // For formatting date

const UserProfile = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    // Fetch user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser || {}); // Default to an empty object if no user data found
  }, []);

  return (
    <div className="max-w-lg mx-auto bg-gradient-to-r from-gray-50 to-gray-200 shadow-xl rounded-lg overflow-hidden mt-10 border border-gray-300">
      <div className="bg-gray-200 p-6 text-gray-600 flex items-center justify-between relative">
        <div className="flex items-center space-x-4">
          {user.profile_image ? (
            <img
              src={user.profile_image}
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
            />
          ) : (
            <FaUser size={50} className="text-gray-600" />
          )}
          <div>
            <h1 className="text-3xl font-extrabold">
              {user.first_name} {user.last_name}
            </h1>
            <p className="text-md italic mt-1">{user.bio}</p>
            <p className="text-xs mt-2">
              Member since {moment(user.date_joined).format("MMMM YYYY")}
            </p>
          </div>
        </div>
        <div className="absolute top-4 right-4">
          {user.is_verified ? (
            <Tippy content={<div className="flex flex-row gap-2 items-center">Email is verified <FaCheckCircle className="text-green-300" /></div>} placement="top" arrow={true}>
              <span className="flex items-center bg-green-200 text-green-800 cursor-pointer text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                <FaCheckCircle className="mr-2" />
                Verified
              </span>
            </Tippy>
          ) : (
            <span className="flex items-center bg-red-200 text-red-800 text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
              <FaExclamationCircle className="mr-2" />
              Not Verified
            </span>
          )}
        </div>
      </div>
      <div className="p-6 bg-white space-y-4">
        <div className="flex items-center text-gray-700">
          <FaUserTag className="text-gray-500 mr-3" />
          <p>
            <strong className="text-gray-900">Username:</strong> {user.username}
          </p>
        </div>
        <div className="flex items-center text-gray-700">
          <FaEnvelope className="text-gray-500 mr-3" />
          <p>
            <strong className="text-gray-900">Email:</strong> {user.email}
          </p>
        </div>
        <div className="flex items-center text-gray-700">
          <FaPhone className="text-gray-500 mr-3" />
          <p>
            <strong className="text-gray-900">Phone:</strong>{" "}
            {user.phone_number}
          </p>
        </div>
        <div className="flex items-center text-gray-700">
          <FaMapMarkerAlt className="text-gray-500 mr-3" />
          <p>
            <strong className="text-gray-900">Address:</strong> {user.address}
          </p>
        </div>
        <div className="flex items-center text-gray-700">
          <FaBirthdayCake className="text-gray-500 mr-3" />
          <p>
            <strong className="text-gray-900">Date of Birth:</strong>{" "}
            {moment(user.date_of_birth).format("MMMM Do, YYYY")}
          </p>
        </div>
        <div className="flex items-center text-gray-700">
          <FaTransgender className="text-gray-500 mr-3" />
          <p>
            <strong className="text-gray-900">Gender:</strong>{" "}
            {user.gender === 1 ? "Male" : "Female"}
          </p>
        </div>
      </div>
      <div className="bg-gray-100 p-6 text-center">
        {user.is_verified ? (
          <Tippy content="Edit Profile" placement="top" arrow={true}>
            <button className="px-6 py-3 bg-gray-500 text-white rounded-full shadow-md hover:bg-gray-600 focus:outline-none transition duration-300">
              <FaPen className="inline-block mr-2" /> Edit Profile
            </button>
          </Tippy>
        ) : (
          <div>
            <p className="text-red-600 text-sm mb-2">
              Verify your email to unlock full profile features.
            </p>
            <button className="px-6 py-3 bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 focus:outline-none transition duration-300">
              Verify Email Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
