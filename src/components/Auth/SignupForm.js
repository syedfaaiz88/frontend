import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputField from "../UI/InputField";
import { signUp } from "../../Redux/Actions/AuthAction/SignUpAction";
import Button from "../UI/Button";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaPhone,
  FaHome,
  FaBirthdayCake,
  FaVenusMars,
  FaPen,
} from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";

const SignupForm = () => {
  const initialState = {
    username: "",
    email: "",
    password: "",
    phone_number: "",
    address: "",
    date_of_birth: "",
    gender: "",
    bio: "",
    first_name: "",
    last_name: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const signupErrors = useSelector((state) => state.signup_reducer.errors);
  const isLoading = useSelector((state) => state.signup_reducer.isLoading);

  useEffect(() => {
    setErrors(signupErrors);
  }, [signupErrors]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(formData));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg space-y-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          label="First Name"
          name="first_name"
          placeholder="First Name"
          onChange={handleChange}
          error={errors?.first_name}
          Icon={<FaUser />}
        />
        <InputField
          label="Last Name"
          name="last_name"
          placeholder="Last Name"
          onChange={handleChange}
          error={errors?.last_name}
          Icon={<FaUser />}
        />
        <InputField
          label="Username"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          error={errors?.username}
          Icon={<AiOutlineUser />}
        />
        <InputField
          label="Email"
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          error={errors?.email}
          Icon={<FaEnvelope />}
        />
        <InputField
          label="Password"
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          error={errors?.password}
          Icon={<FaLock />}
        />
        <InputField
          label="Phone Number"
          name="phone_number"
          placeholder="Phone Number"
          onChange={handleChange}
          error={errors?.phone_number}
          Icon={<FaPhone />}
        />
        <InputField
          label="Address"
          name="address"
          placeholder="Address"
          onChange={handleChange}
          error={errors?.address}
          Icon={<FaHome />}
        />
        <InputField
          label="Date of Birth"
          name="date_of_birth"
          type="date"
          defaultValue="2002-01-01"
          placeholder="Date of Birth"
          onChange={handleChange}
          error={errors?.date_of_birth}
          Icon={<FaBirthdayCake />}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          label="Gender"
          name="gender"
          type="select"
          options={[
            { label: "Male", value: "1" },
            { label: "Female", value: "2" },
            { label: "Prefer not to say", value: "3" },
          ]}
          onChange={handleChange}
          error={errors?.gender}
          Icon={<FaVenusMars/>}
        />
        <InputField
          label="Bio"
          name="bio"
          type="textarea"
          placeholder="Bio"
          onChange={handleChange}
          error={errors?.bio}
          Icon={<FaPen/>}
        />
      </div>
      <Button type="submit" isLoading={isLoading}>
        Signup
      </Button>
    </form>
  );
};

export default SignupForm;
