import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Carousel = ({ photos, initialIndex }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative flex items-center justify-center w-full h-full max-w-full max-h-full bg-black overflow-hidden">
      <button
        className="absolute left-2 p-2 bg-gray-700 bg-opacity-50 text-white rounded-full hover:bg-opacity-75"
        onClick={goToPrevious}
      >
        <FaArrowLeft size={20} />
      </button>
      <div className="flex items-center justify-center w-full h-full">
        <img
          src={photos[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="object-contain w-full h-full rounded-lg"
        />
      </div>
      <button
        className="absolute right-2 p-2 bg-gray-700 bg-opacity-50 text-white rounded-full hover:bg-opacity-75"
        onClick={goToNext}
      >
        <FaArrowRight size={20} />
      </button>
    </div>
  );
};

Carousel.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string).isRequired,
  initialIndex: PropTypes.number.isRequired,
};

export default Carousel;
