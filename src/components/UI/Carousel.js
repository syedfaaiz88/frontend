import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaArrowLeft, FaArrowRight, FaUndo, FaRedo } from 'react-icons/fa';
import { MdDownload } from 'react-icons/md';

const Carousel = ({ photos, initialIndex }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [rotation, setRotation] = useState(0);
  const [showThumbnails, setShowThumbnails] = useState(true);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const downloadImage = () => {
    const imageUrl = photos[currentIndex];
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `image_${currentIndex + 1}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const rotateImage = (direction) => {
    setRotation((prevRotation) => prevRotation + (direction === 'left' ? -90 : 90));
  };

  const toggleThumbnails = () => {
    setShowThumbnails((prev) => !prev);
  };

  return (
    <div className='relative flex flex-col items-center justify-center w-full h-full max-w-full max-h-full bg-black overflow-hidden'>
      {/* Image Display */}
      <div className="flex items-center justify-center w-full h-full relative">
        <img
          src={photos[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className={`object-contain w-full h-full rounded-lg transition-transform duration-500 ease-in-out`}
          style={{ transform: `rotate(${rotation}deg)` }}
        />
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute left-2 p-2 bg-gray-700 bg-opacity-50 text-white rounded-full hover:bg-opacity-75"
        onClick={goToPrevious}
      >
        <FaArrowLeft size={20} />
      </button>
      <button
        className="absolute right-2 p-2 bg-gray-700 bg-opacity-50 text-white rounded-full hover:bg-opacity-75"
        onClick={goToNext}
      >
        <FaArrowRight size={20} />
      </button>

      {/* Control Buttons */}
      <div className="absolute flex space-x-2 bottom-4">
        <button
          className="p-2 bg-white text-gray-800 rounded-full hover:bg-opacity-75"
          onClick={downloadImage}
        >
          <MdDownload size={25} />
        </button>
        <button
          className="p-2 bg-gray-700 bg-opacity-50 text-white rounded-full hover:bg-opacity-75"
          onClick={() => rotateImage('left')}
        >
          <FaUndo size={20} />
        </button>
        <button
          className="p-2 bg-gray-700 bg-opacity-50 text-white rounded-full hover:bg-opacity-75"
          onClick={() => rotateImage('right')}
        >
          <FaRedo size={20} />
        </button>
        <button
          className="p-2 bg-gray-700 bg-opacity-50 text-white rounded-full hover:bg-opacity-75"
          onClick={toggleThumbnails}
        >
          {showThumbnails ? 'Hide Thumbnails' : 'Show Thumbnails'}
        </button>
      </div>

      {/* Thumbnails Navigation */}
      {showThumbnails && (
        <div className="absolute bottom-16 flex space-x-2">
          {photos.map((photo, index) => (
            <button
              key={index}
              className={`w-12 h-12 border-2 ${index === currentIndex ? 'border-white' : 'border-gray-500'} rounded-md`}
              onClick={() => setCurrentIndex(index)}
            >
              <img src={photo} alt={`Thumbnail ${index + 1}`} className="object-cover w-full h-full rounded-md" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

Carousel.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string).isRequired,
  initialIndex: PropTypes.number.isRequired,
};

export default Carousel;
