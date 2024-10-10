// EditProfileDetailsForm.js
import React, { useEffect, useState } from "react";
import { FaUser, FaMapMarkerAlt, FaInfoCircle } from "react-icons/fa"; // Import relevant icons
import InputField from "../../UI/InputField";
import Button from "../../UI/Button";
import { AiOutlineUser } from "react-icons/ai";
import {
  editProfileDetails,
} from "../../../Redux/Actions/UserActions";
import { useDispatch, useSelector } from "react-redux";

const EditProfileDetailsForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [bio, setBio] = useState("");
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();

  const profileErrors = useSelector(
    (state) => state.edit_profile_details_reducer.errors
  );
  const isLoading = useSelector(
    (state) => state.edit_profile_details_reducer.isLoading
  );
  const updatedUser = useSelector(
    (state) => state.edit_profile_details_reducer.editProfileDetails
  );

  useEffect(() => {
    setErrors(profileErrors);
  }, [profileErrors]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")) || {};
    setFirstName(user.first_name);
    setLastName(user.last_name);
    setUsername(user.username);
    setAddress(user.address);
    setBio(user.bio);
  }, [updatedUser, isLoading]);
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const body = {};
    if (firstName.trim()) body.first_name = firstName;
    if (lastName.trim()) body.last_name = lastName;
    if (username.trim()) body.user_name = username;
    if (address.trim()) body.address = address;
    if (bio.trim()) body.bio = bio;
    dispatch(editProfileDetails(body));
  };

  return (
    <div className="bg-white px-4 md:px-16 py-4 rounded-xl">
      <form onSubmit={handleUpdateProfile}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
          {/* Name field with user icon */}
          <InputField
            label="First Name"
            type="text"
            name="first_name"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
              setErrors((prevErrors) => ({ ...prevErrors, first_name: "" }));
            }}
            error={errors?.first_name}
            Icon={<FaUser />} // User icon
          />
          {/* Name field with user icon */}
          <InputField
            label="Last Name"
            type="text"
            name="last_name"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
              setErrors((prevErrors) => ({ ...prevErrors, last_name: "" }));
            }}
            error={errors?.last_name}
            Icon={<FaUser />} // User icon
          />

          {/* Username field with edit user icon */}
          <InputField
            label="Username"
            type="text"
            name="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setErrors((prevErrors) => ({ ...prevErrors, username: "" }));
            }}
            error={errors?.username}
            Icon={<AiOutlineUser />} // Edit user icon
          />

          {/* Address field with map marker icon */}
          <InputField
            label="Address"
            type="text"
            name="address"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
              setErrors((prevErrors) => ({ ...prevErrors, address: "" }));
            }}
            error={errors?.address}
            Icon={<FaMapMarkerAlt />} // Map marker icon
          />

          {/* Bio field with info icon */}
          <InputField
            label="Bio"
            type="textarea"
            name="bio"
            value={bio}
            onChange={(e) => {
              setBio(e.target.value);
              setErrors((prevErrors) => ({ ...prevErrors, bio: "" }));
            }}
            error={errors?.bio}
            Icon={<FaInfoCircle />} // Info circle icon
          />
        </div>
        <Button isLoading={isLoading} type="submit">
          Update Profile
        </Button>
      </form>
    </div>
  );
};

export default EditProfileDetailsForm;
