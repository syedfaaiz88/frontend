// EditProfileDetailsForm.js
import React, { useState } from "react";
import { FaUser, FaMapMarkerAlt, FaInfoCircle } from "react-icons/fa"; // Import relevant icons
import InputField from "../../UI/InputField";
import Button from "../../UI/Button";
import { AiOutlineUser } from "react-icons/ai";
// import { useDispatch, useSelector } from "react-redux";
// import { updateProfileDetails } from "../../../Redux/Actions/UserActions";

const EditProfileDetailsForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [bio, setBio] = useState("");
  const [errors, setErrors] = useState({});
  
//   const dispatch = useDispatch();
  
//   const profileErrors = useSelector((state) => state.update_profile_reducer.errors);
//   const isLoading = useSelector((state) => state.update_profile_reducer.isLoading);
  
//   useEffect(() => {
//     setErrors(profileErrors);
//   }, [profileErrors]);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    // const body = { firstName, lastName, username, address, bio };
    // dispatch(updateProfileDetails(body));

    // Optionally reset fields after submission
    setFirstName("");
    setLastName("");
    setUsername("");
    setAddress("");
    setBio("");
  };

  return (
    <div className="bg-white p-16 rounded-xl">
      <form onSubmit={handleUpdateProfile}>
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
          required
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
          required
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
          required
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
        
        <Button type="submit">
          Update Profile
        </Button>
      </form>
    </div>
  );
};

export default EditProfileDetailsForm;
