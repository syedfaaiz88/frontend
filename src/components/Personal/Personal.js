import React, { useState } from "react";
import { PersonalInfo } from "./PersonalInfo";
import { Link } from "react-router-dom";
import Modal from "../UI/Modal";
import { MdVerified } from "react-icons/md";
import TippyIcon from "../UI/TippyIcon";

const Personal = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="relative w-5/6 md:w-9/12 min-h-screen mx-auto py-4 overflow-hidden">
      {/* Background Image Section */}
      <div className="relative">
        <div
          className="relative bg-cover bg-center rounded-lg pt-[37.1%]"
          style={{ backgroundImage: "url('/images/bg.PNG')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-15 rounded-lg "></div>
        </div>
        {/* Profile Picture */}
        <div className="absolute inset-x-0 bottom-0 flex justify-center">
          <img
            src="profile.JPG"
            alt="Profile"
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 rounded-full border-4 border-white shadow-md -mb-16 cursor-pointer"
            onClick={openModal}
          />
        </div>
      </div>

      {/* Profile Information */}
      <div className="text-center mt-20 mb-6">
        <h1 className="text-xs md:text-lg lg:text-xl font-semibold mb-2 flex flex-row items-center justify-center gap-2">
          Syed Faaiz
          <TippyIcon
            icon={MdVerified}
            placement="right"
            color="text-blue-500"
            tooltip="Actually I don't have this on other platforms but on this website I am the boss I can have everything I love."
          />
        </h1>
        <p className="text-gray-600 mb-4 text-xs md:text-sm">
          Software Engineer | Fitness enthusiast
        </p>
        <Link
          to="/socials"
          className="text-xs md:text-sm inline-block px-6 py-2 text-white bg-gradient-to-r from-green-500 to-teal-500 hover:shadow-xl hover:scale-105 rounded-full shadow-lg hover:bg-blue-600 transition"
        >
          Let's Connect
        </Link>
      </div>

      <div className="p-3 md:p-4 lg:p-6">
        <PersonalInfo />
      </div>
      <div className="flex justify-end mt-6">
        <div>
          <div className="flex items-center justify-end opacity-70">
            <img
              src="signature.svg" // Update path if necessary
              alt="Signature"
              className="w-24 h-auto"
            />
          </div>
          <p className="text-gray-700 font-medium text-sm ml-2">
            Signature ____________
          </p>
        </div>
      </div>
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
