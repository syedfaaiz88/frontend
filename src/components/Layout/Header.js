import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  const [user, setUser] = useState({});
  const [authStatus, setAuthStatus] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      if (!localStorage.getItem("user") && !localStorage.getItem("tokens")) {
        setAuthStatus(false);
      } else {
        setAuthStatus(true);
      }
    };

    checkAuth();
  }, []);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser || {});
  }, []);

  const renderUserProfileContent = () => (
    <div className="flex flex-col justify-center items-center p-5 bg-white">
      <div className="flex items-center justify-center mb-3">
        {user.profile_image ? (
          <img
            src={user.profile_image}
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover border-4 border-blue-500"
          />
        ) : (
          <FaUser size={60} className="text-gray-500" />
        )}
      </div>
      <div className="text-center">
        <p className="text-xl font-semibold text-gray-800 mb-1">
          {user.first_name} {user.last_name}
        </p>
        <p className="text-lg text-gray-600 mb-1">
          <AiOutlineUser className="inline mr-1" />@{user.username}
        </p>
        <p className="text-md text-gray-500">
          <AiOutlineMail className="inline mr-1" />
          {user.email}
        </p>
        <Link
          to="/user-profile"
          className="inline-flex items-center px-4 py-2 mt-4 text-white bg-green-500 hover:bg-green-600 rounded-lg font-medium shadow-md transition-colors duration-300"
        >
          View Full Profile
        </Link>
      </div>
    </div>
  );

  const renderAuthenticatedUser = () => (
    <>
      <Tippy
        content={renderUserProfileContent()}
        placement="bottom"
        arrow={true}
        interactive={true}
        theme="light"
      >
        <span className="text-lg text-gray-100 cursor-pointer">
          {user.first_name}
        </span>
      </Tippy>
      {user.profile_image && (
        <img
          src={user.profile_image}
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover"
        />
      )}
    </>
  );

  const renderUnauthenticatedUserLinks = () => (
    <div className="flex space-x-4">
      <Link to="/signup" className="text-lg text-gray-100 hover:text-blue-500">
        Sign Up
      </Link>
      <Link to="/login" className="text-lg text-gray-100 hover:text-blue-500">
        Login
      </Link>
    </div>
  );

  return (
    <header className="bg-gray-700 py-2 text-xl px-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="logo_white.png" alt="Syed Faaiz" className="w-10 h-10" />
          <Link
            to="/"
            className="text-xl font-semibold text-white"
          >
            Syed Faaiz
          </Link>
        </div>
        <div className="flex items-center space-x-3">
          {authStatus
            ? renderAuthenticatedUser()
            : renderUnauthenticatedUserLinks()}
        </div>
      </div>
    </header>
  );
};

export default Header;
