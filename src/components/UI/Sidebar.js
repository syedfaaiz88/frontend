import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Tippy from "@tippyjs/react";

const Sidebar = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null); // To track active link
  const navigate = useNavigate();

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
      </nav>
    </div>
  );
};

export default Sidebar;
