import React, { useState } from "react";
import TimelineContent from "./TimelineContent";
import Carousel from "../UI/Carousel";
import Modal from "../UI/Modal";

const TimelineItem = ({ date, title, description, icon, media }) => {
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5  gap-4">
        {media &&
          media.map((m, index) => (
            <div key={index} onClick={() => openModal(index)} className="relative overflow-hidden cursor-pointer">
              <TimelineContent media={m} key={index} />
            </div>
          ))}
      </div>
      <Modal isOpen={showModal} onClose={closeModal}>
        {expandedPhotoIndex !== null && (
          <div className="w-80 sm:w-96 md:w-[450px] lg:w-[700px] xl:w-[900px] h-60 sm:h-72 md:h-80 lg:h-[550px]">
            <Carousel
              photos={media.map((m) => m.src)}
              initialIndex={expandedPhotoIndex}
            />
          </div>
        )}
      </Modal>
    </div>
  );
};

export default TimelineItem;
