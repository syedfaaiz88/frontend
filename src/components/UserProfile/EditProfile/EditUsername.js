import React, { useEffect, useState } from 'react'
import useUsernameAvailability from '../../../hooks/useUsernameAvailability';
import Button from '../../UI/Button';
import InputField from '../../UI/InputField';
import { useDispatch, useSelector } from 'react-redux';
import { editProfileDetails } from '../../../Redux/Actions/UserActions';
import { ImSpinner2 } from 'react-icons/im';
import { AiOutlineUser } from 'react-icons/ai';

const EditUsername = () => {
  const [username, setUsername] = useState("")
  const [storedUser, setStoredUsername] = useState("")

  const dispatch = useDispatch()
  const { availabilityMessage, disabled, showLoader } = useUsernameAvailability(username)
  const isLoading = useSelector((state) => state.edit_profile_details_reducer.isLoading);

  const handleUpdateUsername = (e) => {
    e.preventDefault();
    const body = {};
    if (username.trim()) body.user_name = username;
    dispatch(editProfileDetails(body));    
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")) || {};
    setStoredUsername(user)
    setUsername(user.username);
  }, []);

  return (
    <div className="bg-white px-2 md:px-16 py-4 rounded-xl">
      <form onSubmit={handleUpdateUsername}>
          <InputField
            type="text"
            name="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            Icon={<AiOutlineUser />}
          />
          {username !== storedUser.username && username !== "" && (
            <div className="flex items-center space-x-2 text-sm mb-3">
              {showLoader ? (
                <ImSpinner2 className="animate-spin text-gray-400 text-base" />
              ) : availabilityMessage?.status === "available" ? (
                <div className="text-green-500 font-medium">
                  {availabilityMessage.message}
                </div>
              ) : (
                <div className="text-red-500 font-medium">
                  {availabilityMessage?.message}
                </div>
              )}
            </div>
          )}        
        <Button isLoading={isLoading} type="submit" disabled={disabled}>
          Update Username
        </Button>
      </form>
    </div>
  )
}

export default EditUsername