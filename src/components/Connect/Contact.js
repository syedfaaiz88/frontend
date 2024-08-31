import React from "react";
import { MdPhone } from "react-icons/md";

export const Contact = () => {
  return (
    <div className="flex flex-col items-center p-6 ">
      <p className="text-lg text-gray-700 mb-6">
        I have cool numbers also
      </p>
      <div className="w-full">
        <ul className="space-y-4">
          <li className="flex items-center p-4 bg-white rounded-lg border border-b-2">
            <MdPhone size={24} className="text-green-500 mr-4" />
            <span className="text-gray-800">Jazz: +92 32 111 70210</span>
          </li>
          <li className="flex items-center p-4 bg-white rounded-lg border border-b-2">
            <MdPhone size={24} className="text-green-500 mr-4" />
            <span className="text-gray-800">Ufone: +92 33 444 55 646</span>
          </li>
          <li className="flex items-center p-4 bg-white rounded-lg border border-b-2">
            <MdPhone size={24} className="text-green-500 mr-4" />
            <span className="text-gray-800">Onic: +92 329 8000 567</span>
          </li>
          <li className="flex items-center p-4 bg-white rounded-lg border border-b-2">
            <MdPhone size={24} className="text-green-500 mr-4" />
            <span className="text-gray-800">Zong: +92 332 1234567</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
