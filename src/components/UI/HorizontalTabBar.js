import React from "react";
import { Link, useLocation } from "react-router-dom";

const HorizontalTabBar = ({ items }) => {
  const location = useLocation();

  return (
    <div className="w-full overflow-x-auto">
      <div className="flex flex-nowrap items-center justify-start space-x-10 py-3 px-4">
        {items.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`flex flex-col items-center gap-1 py-2 text-gray-600 transition-all duration-200 ease-in-out ${
              location.pathname === item.path
                ? "font-semibold border-b-2 border-gray-500"
                : "border-b-2 border-white"
            }`}
          >
            {item.icon && <span className="text-xl">{item.icon}</span>}
            {<span className="text-md">{item.label}</span>}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HorizontalTabBar;
