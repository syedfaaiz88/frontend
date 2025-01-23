import React, { useEffect, useState } from "react";
import ProfileContent from "./ProfileContent";
import Dropdown from "../../UI/Dropdown";

const HeaderLinks = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser || {});
  }, []);
  const links = [
    {
      link: (
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
        />
      ),
      component: <ProfileContent />,
    },
  ];
  return links.map((item, index) => (
    <Dropdown
      key={index} // Adding the key prop with a unique value
      triggerComponent={
        <div className="w-10 h-10 rounded-full border-2 border-gray-300 bg-gray-200 cursor-pointer text-2xl flex items-center justify-center overflow-hidden">
          {item.link}
        </div>
      }
      dropdownContent={item.component}
    />
  ));
};

export default HeaderLinks;
