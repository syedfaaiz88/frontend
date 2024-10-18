import React, { useEffect, useState } from 'react'
import Button from '../../UI/Button';
import InputField from '../../UI/InputField';
import { useDispatch, useSelector } from 'react-redux';
import { editProfileDetails } from '../../../Redux/Actions/UserActions';
import { AiOutlineUser } from 'react-icons/ai';

const EditName = () => {
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [storedUser, setStoredUsername] = useState("")

  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.edit_profile_details_reducer.isLoading);

  const handleUpdateUsername = (e) => {
    e.preventDefault();
    const body = {};
    if (firstname.trim()) body.first_name = firstname;
    if (lastname.trim()) body.last_name = lastname;
    dispatch(editProfileDetails(body));    
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")) || {};
    setStoredUsername(user)
    setFirstname(user.first_name);
    setLastname(user.last_name);
  }, []);

  const disabled = storedUser && storedUser.first_name === firstname && storedUser.last_name === lastname

  return (
    <div className="bg-white px-2 md:px-16 py-4 rounded-xl">
      <form onSubmit={handleUpdateUsername}>
          <InputField
            type="text"
            label="First Name"
            name="First Name"
            value={firstname}
            onChange={(e) => {
              setFirstname(e.target.value);
            }}
            Icon={<AiOutlineUser />}
          /> 
          <InputField
            type="text"
            label="Last Name"
            name="Last Name"
            value={lastname}
            onChange={(e) => {
              setLastname(e.target.value);
            }}
            Icon={<AiOutlineUser />}
          />                
        <Button isLoading={isLoading} type="submit" disabled={disabled}>
          Update Name
        </Button>
      </form>
    </div>
  )
}

export default EditName