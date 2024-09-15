import React, { useState, useCallback } from "react";
import Carousel from "../UI/Carousel";
import Modal from "../UI/Modal";
import { HiPhoto } from "react-icons/hi2";

const TimelineItem = React.memo(({ date, title, description, icon, photos }) => {
  const [expandedPhotoIndex, setExpandedPhotoIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = useCallback((index) => {
    setExpandedPhotoIndex(index);
    setShowModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setShowModal(false);
    setExpandedPhotoIndex(null);
  }, []);

  return (
    <div className="mb-10 ml-4">
      <div className="flex items-center mb-1">
        <span className="text-gray-500 dark:text-blue-300 text-4xl">
          {icon}
        </span>
        <span className="ml-2 text-gray-500 dark:text-gray-400 text-sm">
          {date}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="mb-2 text-base font-normal text-gray-600 dark:text-gray-300">
        {description}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {photos && photos.length > 0 && (
          <div
            onClick={() => openModal(0)}
            className="relative overflow-hidden cursor-pointer max-h-28"
          >
            <img
              src={photos[0]}
              alt="Event media"
              className="object-cover w-full h-full rounded-lg shadow-md"
              loading="lazy"
            />
          </div>
        )}
        {photos.length >= 2 && (
          <div
            onClick={() => openModal(1)}
            className="relative overflow-hidden cursor-pointer max-h-28 group rounded-lg"
          >
            <img
              src={photos[1]}
              alt="See All Photos"
              className="object-cover w-full h-full rounded-lg shadow-md transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-bold bg-black bg-opacity-50 rounded-lg transition-opacity duration-300">
              <HiPhoto size={30} />
              <span className="mt-2">See All Photos</span>
            </div>
          </div>
        )}
      </div>

      <Modal isOpen={showModal} onClose={closeModal}>
        {expandedPhotoIndex !== null && (
          <div className="w-80 sm:w-96 md:w-[450px] lg:w-[700px] xl:w-[900px] h-60 sm:h-72 md:h-80 lg:h-[550px]">
            <Carousel photos={photos} initialIndex={expandedPhotoIndex} />
          </div>
        )}
      </Modal>
    </div>
  );
});

export default TimelineItem;
