import React, { useState } from "react";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";

// Reusable MenuItem component
const MenuItem = ({ items }) => {
  const [openItem, setOpenItem] = useState(null);

  const handleToggle = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index}>
          <div
            className={`flex items-center justify-between p-2 cursor-pointer hover:bg-gray-200 rounded-lg ${
              item.subItems ? "font-semibold" : ""
            }`}
            onClick={() => (item.subItems ? handleToggle(index) : item.onClick())}
          >
            <div className="flex items-center space-x-3">
              <span className="text-xl">{item.icon}</span>
              <span>{item.text}</span>
            </div>
            {item.subItems && (
              <span>
                {openItem === index ? <FiChevronDown /> : <FiChevronRight />}
              </span>
            )}
          </div>
          {/* Recursive rendering for sub-items */}
          {item.subItems && openItem === index && (
            <div className="ml-6">
              <MenuItem items={item.subItems} />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};


export default MenuItem;