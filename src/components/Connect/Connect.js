import React, { useState } from "react";
import Button from "../UI/Button";
import { FcContacts, FcHome } from "react-icons/fc";
import { GiTalk } from "react-icons/gi";
import { Social } from "./Social";
import { Contact } from "./Contact";
import { Location } from "./Location";

export const Connect = () => {
  const [activeSection, setActiveSection] = useState("socials");
  return (
    <div className="flex flex-col items-center space-y-6 p-6 bg-white rounded-lg shadow-lg max-w-4xl mx-auto">
      <div className="flex flex-col justify-center items-center gap-3 space-x-4 mb-6 md:flex-row md:gap-0">
        <Button
          onClick={() => setActiveSection("socials")}
          className={`py-2 px-4 rounded ${
            activeSection === "socials"
              ? "bg-gray-200"
              : ""
          } transition-colors duration-300`}
          Icon={<GiTalk size={30} className="text-purple-400"/>}          
        >
          Socials
        </Button>
        <Button
          onClick={() => setActiveSection("contact")}
          className={`py-2 px-4 rounded ${
            activeSection === "contact"
              ? "bg-gray-200"
              : ""
          } transition-colors duration-300`}
          Icon={<FcContacts size={30}/>}
        >
          Contact
        </Button>
        <Button
          onClick={() => setActiveSection("location")}
          className={`py-2 px-4 rounded ${
            activeSection === "location"
              ? "bg-gray-200"
              : ""
          } transition-colors duration-300`}
          Icon={<FcHome size={30} className="text-red-500"/>}
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
