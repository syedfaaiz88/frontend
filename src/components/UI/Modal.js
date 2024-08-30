import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { CgClose } from "react-icons/cg";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-black bg-opacity-65 flex items-center justify-center z-50"
      onClick={handleOverlayClick}
    >
      <div
        className="rounded-lg shadow-lg mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-7 right-7 text-gray-300 hover:text-white"
        >
          <CgClose size={35} />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
