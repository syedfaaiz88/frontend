import React from "react";
import InfoCard from "../../UI/InfoCard";

const ProfileSettings = () => {
  const cardItems = [
    {
      title: "Name",
      content: "",
    },
    {
      title: "Username",
      content: "",
    },
    {
      title: "Profile Picture",
      content: "",
    },
    {
      title: "Profile Details",
      content: "",
    },
  ];
  return <InfoCard items={cardItems} />;
};

export default ProfileSettings;
