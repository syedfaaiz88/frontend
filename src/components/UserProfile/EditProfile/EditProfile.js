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
    <div className="flex justify-center min-h-screen">
      <div className="p-2 md:p-10 w-full max-w-2xl mx-4"> {/* You can control left/right margin with mx-4 */}
        <InfoCard items={cardItems} />
      </div>
    </div>
  );
};

export default EditProfile;
