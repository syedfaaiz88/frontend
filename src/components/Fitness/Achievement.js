// Achievement.js
import React, { useState } from "react";
import { FaCheckCircle, FaYoutube } from "react-icons/fa";
import YouTubePreview from "../UI/YoutubePreview";
import Tippy from "@tippyjs/react";
import Modal from "../UI/Modal";
import Carousel from "../UI/Carousel";
import { HiPhoto } from "react-icons/hi2";

export const Achievement = ({ achievements }) => {
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

  return achievements.map((category, categoryIndex) => (
    <section key={categoryIndex} className="mb-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6  flex flex-col items-center">
        {category.name}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
        {category.items.map(
          (
            { name, second_name, completed, details, youtube_url, photos },
            itemIndex
          ) => (
            <div
              key={`${categoryIndex}-${itemIndex}`}
              className="bg-gray-50 p-3 border border-gray-200 rounded-sm"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex flex-col">
                  <h3 className="text-lg text-gray-800 font-semibold">
                    {name}
                  </h3>
                  <h4 className="text-md text-gray-500 font-semibold">
                    {second_name}
                  </h4>
                </div>
                {completed ? (
                  <FaCheckCircle size={18} className="text-green-500" />
                ) : (
                  <FaCheckCircle size={18} className="text-gray-500" />
                )}
              </div>
              {details && (
                <div className="mt-2 space-y-1 text-sm">
                  {Object.entries(details).map(([key, value]) => (
                    <div key={key} className="flex items-center">
                      <span className="text-gray-700 capitalize font-semibold">
                        {key}:
                      </span>
                      <span className="text-gray-600 ml-2">{value}</span>
                    </div>
                  ))}
                </div>
              )}
              <div className="flex flex-row gap-2 mt-3">
                {photos && (
                  <Tippy
                    content={
                      <div className="flex flex-col justify-center p-2">
                        <div className="grid grid-cols-2 gap-4">
                          {photos.slice(0, 4).map((photo, idx) => (
                            <div
                              key={idx}
                              className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                              onClick={() => openModal(idx)}
                            >
                              <img
                                src={photo}
                                alt={`${idx + 1}`}
                                className="object-cover w-full h-full"
                              />
                            </div>
                          ))}
                        </div>
                        <button
                          onClick={() => openModal(0)}
                          className="inline-flex items-center px-5 py-2 mt-4 text-white bg-green-500 hover:bg-green-600 rounded-lg font-medium shadow-md transition-colors duration-300"
                        >
                          View All Photos
                        </button>
                      </div>
                    }
                    arrow={true}
                    interactive={true}
                    theme="light"
                  >
                    <span>
                      <HiPhoto
                        size={30}
                        onClick={() => openModal(0)}
                        className="cursor-pointer text-blue-500 hover:text-blue-600 transition-colors duration-300"
                      />
                    </span>
                  </Tippy>
                )}

                {youtube_url && (
                  <a
                    href={youtube_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-2 text-sm text-red-600"
                  >
                    <Tippy
                      content={<YouTubePreview youtubeUrl={youtube_url} />}
                      arrow={true}
                      interactive={true}
                      theme="light"
                    >
                      <span>
                        <FaYoutube size={30} />
                      </span>
                    </Tippy>
                  </a>
                )}
              </div>
              {/* Modal with Carousel */}
              <Modal isOpen={showModal} onClose={closeModal}>
                {expandedPhotoIndex !== null && (
                  <div className="w-80 sm:w-96 md:w-[450px] lg:w-[700px] xl:w-[900px] h-60 sm:h-72 md:h-80 lg:h-[550px]">
                    <Carousel
                      photos={photos}
                      initialIndex={expandedPhotoIndex}
                    />
                  </div>
                )}
              </Modal>
            </div>
          )
        )}
      </div>
    </section>
  ));
};
