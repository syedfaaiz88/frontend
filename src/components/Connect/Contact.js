import React from "react";
import { MdPhone } from "react-icons/md";

export const Contact = () => {
  return (
    <div className="flex flex-col items-center p-2 mt-10">
      <h1 className='text-xl text-gray-600 text-center mb-4 '>Contact Numbers</h1>
      <p className="text-sm text-gray-700 mb-6">
        I have cool numbers also
      </p>
      <div className="w-full">
        <ul className="flex flex-col space-y-2 items-center">
          <li className="flex items-center p-4 bg-white ">
            <MdPhone size={20} className="text-green-500 mr-4" />
            <span className="text-gray-800 text-sm "><strong>Jazz:</strong> +92 32 111 70210</span>
          </li>
          <li className="flex items-center p-4 bg-white ">
            <MdPhone size={20} className="text-green-500 mr-4" />
            <span className="text-gray-800 text-sm "><strong>Ufone:</strong> +92 33 444 55 646</span>
          </li>
          <li className="flex items-center p-4 bg-white ">
            <MdPhone size={20} className="text-green-500 mr-4" />
            <span className="text-gray-800 text-sm "><strong>Onic:</strong> +92 329 8000 567</span>
          </li>
          <li className="flex items-center p-4 bg-white ">
            <MdPhone size={20} className="text-green-500 mr-4" />
            <span className="text-gray-800 text-sm "><strong>Zong:</strong> +92 332 1234567</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
