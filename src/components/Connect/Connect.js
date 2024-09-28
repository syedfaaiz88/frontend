import React, { useState } from "react";
import Button from "../UI/Button";
import { GiTalk } from "react-icons/gi";
import { Social } from "./Social";
import { Contact } from "./Contact";
import { Location } from "./Location";
import { MdPermContactCalendar } from "react-icons/md";
import { TiHome } from "react-icons/ti";

export const Connect = () => {
  const [activeSection, setActiveSection] = useState("socials");
  return (
    <div className="flex flex-col items-center space-y-6 p-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-3 space-x-4 mb-6">
        <Button
          onClick={() => setActiveSection("socials")}
          className={`py-2 px-4 rounded ${
            activeSection === "socials"
              ? "bg-gray-200"
              : ""
          } transition-colors duration-300 md:text-lg text-sm`}
          Icon={<GiTalk size={24} className="text-gray-500"/>}          
        >
          Socials
        </Button>
        <Button
          onClick={() => setActiveSection("contact")}
          className={`py-2 px-4 rounded ${
            activeSection === "contact"
              ? "bg-gray-200"
              : ""
          } transition-colors duration-300 md:text-lg text-sm`}
          Icon={<MdPermContactCalendar className="text-gray-500" size={24}/>}
        >
          Contact
        </Button>
        <Button
          onClick={() => setActiveSection("location")}
          className={`py-2 px-4 rounded ${
            activeSection === "location"
              ? "bg-gray-200"
              : ""
          } transition-colors duration-300 md:text-lg text-sm`}
          Icon={<TiHome size={24} className="text-gray-500"/>}
        >
          Location
        </Button>
      </div>

      {/* Social Media Links */}
      {activeSection === "socials" && (<Social/>)}

      {/* Contact Numbers */}
      {activeSection === "contact" && (<Contact/>)}

      {/* Location */}
      {activeSection === "location" && (<Location/>)}
    </div>
  );
};
