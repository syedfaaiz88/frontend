// Settings.js
import React, { useState } from "react";
import Modal from "../../UI/Modal";
import ChangePasswordForm from "./ChangePasswordForm";
import { MdLockReset } from "react-icons/md";

const Settings = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div
          onClick={() => setModalOpen(true)}
          className="flex flex-row items-center gap-2 p-2 cursor-pointer rounded-md hover:bg-gray-100"
        >
          <MdLockReset size={30} className="text-gray-600" /> <span className="text-sm">Change Password</span>
        </div>
      </div>

      {/* Modal for Change Password */}
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <ChangePasswordForm onClose={() => setModalOpen(false)} />
      </Modal>
    </>
  );
};

export default Settings;
