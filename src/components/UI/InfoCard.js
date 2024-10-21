import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const InfoCard = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleBackClick = () => {
    setSelectedItem(null);
  };

  return (
    <div className="w-auto mx-auto bg-white border rounded-lg overflow-hidden">
      {selectedItem ? (
        // Render selected item content with a back button
        <div className="p-4">
          <div className="flex items-center mb-4">
            <button onClick={handleBackClick} className="text-gray-600 mr-2 hover:bg-gray-100 rounded-full p-2">
              <IoIosArrowBack size={24} />
            </button>
            <h2 className="text-lg font-semibold">{selectedItem.title}</h2>
          </div>
          {/* Render the component specific to the selected item */}
          <div>
            {selectedItem.component ? (
              <selectedItem.component />
            ) : (
              <p>{selectedItem.content}</p>
            )}
          </div>
        </div>
      ) : (
        // Render the list of items
        items.map((item, index) => (
          <div
            key={index}
            onClick={() => handleItemClick(item)}
            className="flex justify-between items-center border-b border-gray-300 py-3 px-4 cursor-pointer hover:bg-gray-100"
          >
            <div>
              <p className="text-gray-600 text-base">{item.title}</p>
              <p className="text-black">{item.content}</p>
            </div>
            {item.icon && <div className="text-gray-400">{item.icon}</div>}
            <IoIosArrowForward />
          </div>
        ))
      )}
    </div>
  );
};

export default InfoCard;
