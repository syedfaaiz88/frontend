import React from "react";
import { MdPhone } from "react-icons/md";

export const Contact = () => {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold text-gray-800 text-center">
        Connect Book!
      </h2>
      <p className="text-lg text-gray-600 text-center">
        Syed Faaiz has cool phone numbers.
      </p>
      <div className="flex flex-col space-y-4 mt-4">
        <div className="flex items-center space-x-3 text-gray-700">
          <MdPhone size={24} />
          <span>Jazz: +92 32 111 70210</span>
        </div>
        <div className="flex items-center space-x-3 text-gray-700">
          <MdPhone size={24} />
          <span>Ufone: +92 33 444 55 646</span>
        </div>
        <div className="flex items-center space-x-3 text-gray-700">
          <MdPhone size={24} />
          <span>Zong: +92 332 1234567</span>
        </div>
        <div className="flex items-center space-x-3 text-gray-700">
          <MdPhone size={24} />
          <span>Onic: +92 329 8000 567</span>
        </div>
      </div>
    </div>
  );
};
