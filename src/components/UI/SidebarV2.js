import { useState } from 'react'; 
import { FaChevronDown, FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { FaBarsStaggered } from "react-icons/fa6";

const Sidebar = ({ items }) => {
  const [openSections, setOpenSections] = useState({});
  const [isCollapsed, setIsCollapsed] = useState(false); // State to track sidebar collapse
  const navigate = useNavigate();

  // Toggle the open state of sections
  const toggleSection = (text) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [text]: !prevState[text],
    }));
  };

  // Handle link click, if sublinks exist, toggle; otherwise navigate
  const handleLinkClick = (item) => {
    if (item.links && item.links.length) {
      toggleSection(item.text);
    } else {
      navigate(item.route);
    }
  };

  // Toggle the sidebar collapse/expand state
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`flex h-screen transition-width duration-300 ${isCollapsed ? 'w-28' : 'w-52'} bg-gray-100`}>
      <div className="p-4 w-full space-y-1">
        {/* Toggle button for the sidebar */}
        <button onClick={toggleSidebar} className="p-2 rounded-md hover:bg-gray-200">
          { isCollapsed ? <FaBars /> : <FaBarsStaggered />}
        </button>

        {items.links.map((item) => (
          <div key={item.text}>
            <div
              className="flex items-center justify-between cursor-pointer hover:bg-gray-200 p-2 rounded-md"
              onClick={() => handleLinkClick(item)}
            >
              <div className="flex items-center space-x-2">
                <span className="text-xl">{item.icon}</span>
                {/* Conditionally render the text based on sidebar collapse state */}
                {!isCollapsed && <span className="text-gray-800 text-sm">{item.text}</span>}
              </div>

              {/* Rotate the Chevron icon with transition */}
              {item.links && item.links.length > 0 && (
                <span className={`transition-transform duration-300 ${openSections[item.text] ? 'rotate-180' : ''}`}>
                  <FaChevronDown size={12} />
                </span>
              )}
            </div>

            {/* Render sublinks with sliding animation */}
            <div
              className={`ml-8 space-y-1 transition-all duration-500 overflow-hidden ${
                openSections[item.text] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              {item.links && item.links.map((subLink) => (
                <div
                  key={subLink.text}
                  className="flex items-center space-x-2 cursor-pointer hover:bg-gray-200 p-2 rounded-md"
                  onClick={() => navigate(subLink.route)}
                >
                  <span className="text-xl">{subLink.icon}</span>
                  {!isCollapsed && <span className="text-gray-800 text-sm">{subLink.text}</span>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
