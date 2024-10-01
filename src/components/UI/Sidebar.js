import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // Import Tippy styles

const Sidebar = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null); // Track active parent link
  const [drawerOpenIndex, setDrawerOpenIndex] = useState(null); // Track open drawer (for sublinks)
  const [activeSublinkIndex, setActiveSublinkIndex] = useState(null); // Track active sublink
  const navigate = useNavigate();

  // Function to close the drawer
  const closeDrawer = () => {
    setDrawerOpenIndex(null); // Close the drawer
  };

  return (
    <div className='flex flex-col bg-gray-100 transition-width duration-300 p-2 w-16'>
      <nav className="flex flex-col flex-grow mt-4">
        <ul className="flex flex-col flex-grow gap-y-2">
          {items.links.map((link, index) => (
            <div key={index} className="relative">
            <Tippy content={<p className="text-xs">{link.text}</p>} arrow={false} key={index}>
              <li
                className={`flex items-center justify-center p-3 cursor-pointer rounded-full 
                  ${
                    activeIndex === index
                      ? "bg-gray-200 text-green-600"
                      : "text-gray-600 hover:bg-gray-200"
                  }
                  `}
                  style={{
                    width: "48px", // Circle shape
                    height: "48px",
                    padding: "10px",
                  }}
                  onClick={() => {
                    if (link.links) {
                      if (drawerOpenIndex !== index) {
                        setDrawerOpenIndex(index);
                        setActiveIndex(index);
                        setActiveSublinkIndex(null);
                      } else {
                        closeDrawer(); // Close the drawer when clicking again
                      }
                    } else {
                      setActiveIndex(index);
                      closeDrawer(); // Close any drawer when navigating
                      navigate(link.route);
                    }
                  }}
                >
                  {link.icon && <span className="text-2xl">{link.icon}</span>}
                </li>
              </Tippy>

                {/* Drawer for Sublinks */}
                {drawerOpenIndex === index && link.links && (
                <div
                  className="ml-2 absolute left-full top-1/2 transform -translate-y-1/2 flex space-x-2 bg-gray-100 rounded-lg shadow-md z-10" // Added flex and space-x-2 for horizontal layout
                  style={{ padding: "10px" }} // Drawer styling
                >
                  <ul className="flex flex-row space-x-2"> {/* Change to flex-row for sublinks */}
                    {link.links.map((sublink, subindex) => (
                      <Tippy
                        content={<p className="text-xs">{sublink.text}</p>}
                        placement="bottom" // Change placement to better suit horizontal layout
                        arrow={false}
                        key={subindex}
                      >
                        <li
                          className={`flex items-center justify-center cursor-pointer rounded-full text-sm text-gray-500
                          ${
                            activeSublinkIndex === subindex &&
                            activeIndex === index
                              ? "bg-blue-200 text-blue-600"
                              : "hover:bg-gray-200"
                          }
                        `}
                          style={{
                            width: "40px", // Circle shape for sublinks
                            height: "40px",
                            padding: "8px",
                          }}
                          onClick={() => {
                            setActiveSublinkIndex(subindex);
                            setActiveIndex(index); // Keep parent active
                            closeDrawer(); // Close the drawer after sublink selection
                            navigate(sublink.route);
                          }}
                        >
                          {sublink.icon && (
                            <span className="text-2xl">{sublink.icon}</span>
                          )}
                        </li>
                      </Tippy>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
