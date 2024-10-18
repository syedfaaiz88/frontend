import React from "react";
import InfoCard from "../../UI/InfoCard";
import EditProfileDetails from "./EditProfileDetails";
import EditProfileImage from "./EditProfileImage";
import EditName from "./EditName";
import EditUsername from "./EditUsername";

const EditProfile = () => {
  const cardItems = [
    {
      title: "Name",
      content: "",
      component: EditName
    },
    {
      title: "Username",
      content: "",
      component: EditUsername
    },
    {
      title: "Profile Picture",
      content: "",
      component: EditProfileImage
    },
    {
      title: "Profile Details",
      content: "",
      component: EditProfileDetails
    },
  ];

  return (
      <InfoCard items={cardItems} />
  );
};

export default EditProfile;
