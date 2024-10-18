// EditProfileDetailsForm.js
import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaInfoCircle } from "react-icons/fa"; // Import relevant icons
import InputField from "../../UI/InputField";
import Button from "../../UI/Button";
import { editProfileDetails } from "../../../Redux/Actions/UserActions";
import { useDispatch, useSelector } from "react-redux";

const EditProfileDetails = () => {
  const [address, setAddress] = useState("");
  const [bio, setBio] = useState("");
  const [errors, setErrors] = useState({});
  const [storedUser, setStoredUsername] = useState("")

  const dispatch = useDispatch();

  const profileErrors = useSelector(
    (state) => state.edit_profile_details_reducer.errors
  );
  const isLoading = useSelector(
    (state) => state.edit_profile_details_reducer.isLoading
  );

  useEffect(() => {
    setErrors(profileErrors);
  }, [profileErrors]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")) || {};
    setStoredUsername(user)
    setAddress(user.address);
    setBio(user.bio);
  }, []);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const body = {};
    if (address.trim()) body.address = address;
    if (bio.trim()) body.bio = bio;
    dispatch(editProfileDetails(body));
  };

  const disabled = storedUser && storedUser.bio === bio && storedUser.address === address

  return (
    <div className="bg-white px-2 md:px-16 py-4 rounded-xl">
      <form onSubmit={handleUpdateProfile}>
          {/* Address field with map marker icon */}
          <InputField
            label="Address"
            type="textarea"
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
        <Button isLoading={isLoading} type="submit" disabled={disabled}>
          Update Profile
        </Button>
      </form>
    </div>
  );
};

export default EditProfileDetails;
