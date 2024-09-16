import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../Redux/Actions/AuthAction/LogoutAction";
import { FaUserCircle } from "react-icons/fa";
import Tippy from "@tippyjs/react";
import { VscSignOut } from "react-icons/vsc";

const Sidebar = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null); // To track active link
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout(navigate));
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <div className='flex flex-col bg-gray-100 transition-width duration-300 p-2 w-16'>
      <nav className="flex flex-col flex-grow mt-4">
        <ul className="flex flex-col flex-grow gap-y-4">
          {items.links.map((link, index) => (
            <Tippy content={<p className="text-xs">{link.text}</p>} placement="right" arrow={false} key={index}>
              <li
                className={`flex items-center justify-center p-3 cursor-pointer rounded-full 
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
                {link.icon && <span className="text-2xl">{link.icon}</span>}
              </li>
            </Tippy>
          ))}
        </ul>
        <div className="mt-auto flex flex-col gap-y-4">
          <Tippy content={<p className="text-xs">User Profile</p>} placement="right" arrow={false}>
            <li
              className={`flex items-center justify-center p-3 cursor-pointer rounded-full
                ${
                  activeIndex === -1
                    ? "bg-gray-200 text-green-600"
                    : "text-gray-600 hover:bg-gray-200"
                }`}
              onClick={() => {
                setActiveIndex(-1);
                navigate('/user-profile');
              }}
            >
              <FaUserCircle className="text-2xl" />
            </li>
          </Tippy>
          <Tippy content={<p className="text-xs">Logout</p>} placement="right" arrow={false}>
            <li
              className="flex items-center justify-center p-3 cursor-pointer rounded-full text-gray-600 hover:bg-gray-200"
              onClick={handleLogout}
            >
              <VscSignOut className="text-2xl text-red-600" />
            </li>
          </Tippy>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
