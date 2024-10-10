import moment from "moment";
import { useEffect, useState } from "react";
import {
  FaBirthdayCake,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaTransgender,
  FaUserTag,
} from "react-icons/fa";

const ProfileDetails = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
 const storedUser = JSON.parse(localStorage.getItem("user")) || {}
    setUser(storedUser);
  }, []);
  return (
    <div className="m-10">
      <div className="flex items-center text-gray-700 mb-4">
        <FaUserTag className="text-gray-500 mr-3" />
        <p className="font-medium">
          <strong className="text-gray-900">Username:</strong> {user.username}
        </p>
      </div>
      <div className="flex items-center text-gray-700 mb-4">
        <FaEnvelope className="text-gray-500 mr-3" />
        <p className="font-medium">
          <strong className="text-gray-900">Email:</strong> {user.email}
        </p>
      </div>
      <div className="flex items-center text-gray-700 mb-4">
        <FaPhone className="text-gray-500 mr-3" />
        <p className="font-medium">
          <strong className="text-gray-900">Phone:</strong> {user.phone_number}
        </p>
      </div>
      <div className="flex items-center text-gray-700 mb-4">
        <FaMapMarkerAlt className="text-gray-500 mr-3" />
        <p className="font-medium">
          <strong className="text-gray-900">Address:</strong> {user.address}
        </p>
      </div>
      <div className="flex items-center text-gray-700 mb-4">
        <FaBirthdayCake className="text-gray-500 mr-3" />
        <p className="font-medium">
          <strong className="text-gray-900">Date of Birth:</strong>{" "}
          {moment(user.date_of_birth).format("MMMM Do, YYYY")}
        </p>
      </div>
      <div className="flex items-center text-gray-700">
        <FaTransgender className="text-gray-500 mr-3" />
        <p className="font-medium">
          <strong className="text-gray-900">Gender:</strong>{" "}
          {user.gender === 1 ? "Male" : "Female"}
        </p>
      </div>
    </div>
  );
};

export default ProfileDetails;
