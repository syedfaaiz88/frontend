// ChangePasswordForm.js
import React, { useEffect, useState } from "react";
import { FaLock } from "react-icons/fa"; // Import the lock icon
import InputField from "../UI/InputField";
import Button from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../../Redux/Actions/UserActions";

const ChangePasswordForm = () => {
  const [old_password, setCurrentPassword] = useState("");
  const [new_password, setNewPassword] = useState("");
  const [again_new_password, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});

  const changePasswordErrors = useSelector(
    (state) => state.change_password_reducer.errors
  );
  const isLoading = useSelector(
    (state) => state.change_password_reducer.isLoading
  );

  useEffect(() => {
    setErrors(changePasswordErrors);
  }, [changePasswordErrors]);

  const handleChangePassword = (e) => {
    e.preventDefault();
    const body = {
      new_password: new_password,
      again_new_password: again_new_password,
      old_password: old_password,
    };
    dispatch(changePassword(body));
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };
  return (
    <div className="bg-white px-4 md:px-16 py-4 rounded-xl">
      <form onSubmit={handleChangePassword}>
        <div className="grid grid-cols-1">
          <InputField
            label="Current Password"
            type="password"
            name="old_password"
            value={old_password}
            onChange={(e) => {
              setCurrentPassword(e.target.value);
              setErrors((prevErrors) => ({ ...prevErrors, old_password: "" }));
            }}
            error={errors?.old_password}
            required
            Icon={<FaLock />}
          />
          <InputField
            label="New Password"
            type="password"
            name="new_password"
            value={new_password}
            onChange={(e) => {
              setNewPassword(e.target.value);
              setErrors((prevErrors) => ({ ...prevErrors, new_password: "" }));
            }}
            error={errors?.new_password}
            required
            Icon={<FaLock />}
          />
          <InputField
            label="Confirm New Password"
            type="password"
            name="again_new_password"
            value={again_new_password}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setErrors((prevErrors) => ({ ...prevErrors, again_new_password: "" }));
            }}
            required
            error={errors?.again_new_password}
            Icon={<FaLock />}
          />
        </div>
        <Button type="submit" isLoading={isLoading}>
          Change Password
        </Button>
      </form>
    </div>
  );
};

export default ChangePasswordForm;
