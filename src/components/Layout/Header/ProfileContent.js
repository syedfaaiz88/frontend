import React, { useEffect, useState } from "react";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { BiSolidUserRectangle } from "react-icons/bi";
import { VscSignOut } from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../../Redux/Actions/AuthAction/LogoutAction";

const ProfileContent = () => {
  const [user, setUser] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser || {});
  }, []);

  const handleLogout = () => {
    dispatch(logout(navigate));
    navigate("/login"); // Redirect to login page after logout
  };
  return (
    <div className="flex flex-col justify-center items-center p-5 bg-white">
      <div className="flex items-center justify-center mb-3">
        {
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
            className="w-20 h-20 rounded-full object-cover border-2 border-white"
          />
        }
      </div>
      <div className="text-center">
        <p className="text-xl font-semibold text-gray-800 mb-1">
          {user.first_name} {user.last_name}
        </p>
        <p className="text-lg text-gray-600 mb-1">
          <AiOutlineUser className="inline mr-1" />@{user.username}
        </p>
        <p className="text-md text-gray-500 mb-4">
          <AiOutlineMail className="inline mr-1" />
          {user.email}
        </p>
        <div className="flex flex-col space-y-4">
          <Link
            to="/user-profile"
            className="flex items-center justify-center p-2 w-full text-white bg-green-500 border border-gray-300 rounded-lg hover:bg-green-600 shadow-md transition-colors duration-300"
          >
            <BiSolidUserRectangle className="text-lg" />
            <span className="ml-2 text-sm">View Profile</span>
          </Link>
          <button
            className="flex items-center justify-center p-2 w-full text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 shadow-md transition-colors duration-300"
            onClick={handleLogout}
          >
            <VscSignOut className="text-lg text-red-600" />
            <span className="ml-2 text-sm">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileContent;
