import React, { useState } from "react";
import { PiSealCheckFill } from "react-icons/pi";
import TippyIcon from "./TippyIcon";
import { PersonalInfo } from "./PersonalInfo";
import { Link } from "react-router-dom";
import Modal from "../UI/Modal";

const Personal = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="w-5/6 min-h-screen mx-auto p-6 bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Background Image Section */}
      <div className="relative">
        <div
          className="h-72 bg-cover bg-center rounded-t-lg"
          style={{ backgroundImage: "url('https://via.placeholder.com/1500')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
        {/* Profile Picture */}
        <div className="absolute inset-x-0 bottom-0 flex justify-center">
          <img
            src="profile.JPG"
            alt="Profile"
            className="w-44 h-44 rounded-full border-4 border-white shadow-md -mb-16 cursor-pointer"
            onClick={openModal}
          />
        </div>
      </div>

      {/* Profile Information */}
      <div className="text-center mt-20 mb-6">
        <h1 className="text-3xl font-semibold mb-2 flex flex-row items-center justify-center gap-2">
          Syed Faaiz
          <TippyIcon
            icon={PiSealCheckFill}
            placement="right"
            color="text-blue-500"
            tooltip="Actually I don't have this on other platforms but on this website I am the boss I can have everything I love."
          />
        </h1>
        <p className="text-gray-600 mb-4">
          Software Engineer | Fitness enthusiast
        </p>
        <Link
          to="/connect-with-me"
          className="inline-block px-6 py-2 text-white bg-gradient-to-r from-green-500 to-teal-500 hover:shadow-xl hover:scale-105 rounded-full shadow-lg hover:bg-blue-600 transition"
        >
          Connect With Me
        </Link>
      </div>

      {/* Personal Information */}
      <PersonalInfo />

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="w-96 h-96">
          <img
            src="profile.JPG"
            alt="Profile Enlarged"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </Modal>
    </div>
  );
};

export default Personal;
