import React, { useState } from 'react';
import Modal from '../../UI/Modal';
import Carousel from '../../UI/Carousel';

export const BodyStats = ({ index, photos, measurements, date }) => {
  const [expandedPhotoIndex, setExpandedPhotoIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (index) => {
    setExpandedPhotoIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setExpandedPhotoIndex(null);
  };

  return (
    <div key={index} className="mb-10 border-t border-gray-300 pt-6">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">{date}</h2>
      <div className="flex items-start space-x-6">
        <div className="flex-1">
          <div className="flex flex-wrap gap-4">
            {photos.map((photo, idx) => (
              <div
                key={idx}
                className="relative flex-shrink-0 w-32 h-32 rounded-lg overflow-hidden shadow-md cursor-pointer"
                onClick={() => openModal(idx)}
              >
                <img
                  src={photo}
                  alt={`Body ${idx + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <ul className="space-y-2">
            {Object.entries(measurements).map(([key, value]) => (
              <li key={key} className="text-gray-800">
                <strong className="font-semibold">{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Modal with Carousel */}
      <Modal isOpen={showModal} onClose={closeModal}>
        {expandedPhotoIndex !== null && (
          <div className='w-80 sm:w-96 md:w-[450px] lg:w-[700px] xl:w-[900px] h-60 sm:h-72 md:h-80 lg:h-[550px]'><Carousel photos={photos} initialIndex={expandedPhotoIndex} /></div>
        )}
      </Modal>
    </div>
  );
};
