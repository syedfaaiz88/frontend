import React, { useEffect, useState } from "react";
import { BiSolidUserRectangle } from "react-icons/bi";
import { VscSignOut } from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../../Redux/Actions/AuthAction/LogoutAction";
import Button from "../../UI/Button";

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
        <p className="text-base text-gray-800 mb-2">
          {user.first_name} {user.last_name}
        </p>
        <div className="flex flex-col space-y-2">
          <Button>
            <BiSolidUserRectangle className="text-lg" />
            <Link to="/user-profile" className="ml-2 text-sm">
              View Profile
            </Link>
          </Button>
          <Button onClick={handleLogout}>
            <VscSignOut className="text-lg text-red-600" />
            <span className="ml-2 text-sm">Logout</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileContent;
