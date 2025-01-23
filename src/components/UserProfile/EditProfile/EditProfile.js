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
      content: "You can edit your first name and last name.",
      component: EditName
    },
    {
      title: "Username",
      content: "You can change your username but it must be unique.",
      component: EditUsername
    },
    {
      title: "Profile Picture",
      content: "You can change your profile picture but Size must be less than 5MB.",
      component: EditProfileImage
    },
    {
      title: "Profile Details",
      content: "See your profile details like name, username, profile picture etc.",
      component: EditProfileDetails
    },
  ];

  return (
      <InfoCard items={cardItems} />
  );
};

export default EditProfile;
