import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../Redux/Actions/AuthAction/LogoutAction";
import { VscSignOut } from "react-icons/vsc";
import { FaUserCircle } from "react-icons/fa";
import { Tooltip } from "react-tooltip";

const Sidebar = ({ items }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null); // To track active link
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout(navigate));
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <div
      className={`min-h-full ${
        isCollapsed ? "w-20" : "w-40"
      } flex flex-col bg-gray-100 shadow-lg transition-width duration-300 p-2`}
    >
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="p-2 text-gray-600 focus:outline-none text-xl"
      >
        {items.barsIcon}
      </button>
      <nav className="flex flex-col flex-grow mt-4">
        <ul className="flex flex-col flex-grow gap-y-2">
          {items.links.map((link, index) => (
            <>
              <Tooltip id="my-tooltip" place="right"/>
              <li
                data-tooltip-id="my-tooltip"
                data-tooltip-content={link.text}
                key={index}
                className={`flex items-center p-4 cursor-pointer rounded-full 
                ${
                  activeIndex === index
                    ? "bg-gray-200 text-green-600"
                    : "text-gray-600 hover:bg-gray-200"
                }
                `}
                onClick={() => {
                  setActiveIndex(index);
                  navigate(link.route);
                }}
              >
                {link.icon && (
                  <span className="mr-3 text-3xl">{link.icon}</span>
                )}
                {!isCollapsed && <span>{link.text}</span>}
              </li>
            </>
          ))}
        </ul>
        <div className="mt-auto">
          <li
            className={`flex items-center p-4 cursor-pointer rounded-full
              ${
                activeIndex === -1
                  ? "bg-gray-200 text-green-600"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
            onClick={() => {
              setActiveIndex(-1);
              // navigate('/profile');
            }}
          >
            <span className="mr-3 text-3xl">
              <FaUserCircle />
            </span>
            {!isCollapsed && <span>Profile</span>}
          </li>
          <li
            className={`flex items-center p-4 cursor-pointer rounded-full text-gray-600 hover:bg-gray-200`}
            onClick={handleLogout}
          >
            <span className="mr-3 text-3xl text-red-600">
              <VscSignOut />
            </span>
            {!isCollapsed && <span>Logout</span>}
          </li>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
