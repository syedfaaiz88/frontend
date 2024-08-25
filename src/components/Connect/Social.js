import React from "react";
import { BsLinkedin } from "react-icons/bs";
import {
  FaGithub,
  FaTwitter,
  FaAt,
  FaYoutube,
  FaFacebook,
  FaFacebookMessenger,
  FaWhatsappSquare,
} from "react-icons/fa";
import {
  FaSquareEnvelope,
  FaSquareInstagram,
  FaSquareThreads,
} from "react-icons/fa6";
import { PiLinktreeLogoBold } from "react-icons/pi";

export const Social = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-3xl font-bold text-gray-800 text-center">
        Connect on Social Media!
      </h2>
      <p className="text-lg text-gray-600 text-center">
        I am so cool that I have same username everywhere!
        <span className="text-gray-500 flex gap-1 items-center justify-center mt-4 mb-4">
          <FaAt className="text-lg" />
          syedfaaiz88
        </span>
      </p>
      {/* <div className="flex justify-center gap-3 text-fuchsia-900 text-3xl animate-bounce">
      <FaRegHandPointDown />
      <FaRegHandPointDown />
    </div> */}
      <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
        <a
          href="https://www.linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-800 hover:text-blue-700 transition-colors duration-300 flex items-center justify-center"
          aria-label="LinkedIn"
        >
          <BsLinkedin size={30} />
        </a>
        <a
          href="https://github.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-gray-700 transition-colors duration-300 flex items-center justify-center"
          aria-label="GitHub"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://linktr.ee/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 hover:text-green-500 transition-colors duration-300 flex items-center justify-center"
          aria-label="Linktree"
        >
          <PiLinktreeLogoBold size={30} />
        </a>
        <a
          href="mailto:your-email@example.com"
          className="text-red-600 hover:text-red-500 transition-colors duration-300 flex items-center justify-center"
          aria-label="Email"
        >
          <FaSquareEnvelope size={30} />
        </a>
        <a
          href="https://www.threads.net/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-700 hover:text-purple-600 transition-colors duration-300 flex items-center justify-center"
          aria-label="Threads"
        >
          <FaSquareThreads size={30} />
        </a>
        <a
          href="https://www.instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-600 hover:text-pink-500 transition-colors duration-300 flex items-center justify-center"
          aria-label="Instagram"
        >
          <FaSquareInstagram size={30} />
        </a>
        <a
          href="https://www.youtube.com/c/yourchannel"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 hover:text-red-500 transition-colors duration-300 flex items-center justify-center"
          aria-label="YouTube"
        >
          <FaYoutube size={30} />
        </a>
        <a
          href="https://www.facebook.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-500 transition-colors duration-300 flex items-center justify-center"
          aria-label="Facebook"
        >
          <FaFacebook size={30} />
        </a>
        <a
          href="https://www.facebook.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-500 transition-colors duration-300 flex items-center justify-center"
          aria-label="Messenger"
        >
          <FaFacebookMessenger size={30} />
        </a>
        <a
          href="https://www.facebook.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 hover:text-green-500 transition-colors duration-300 flex items-center justify-center"
          aria-label="Whatsapp"
        >
          <FaWhatsappSquare size={30} />
        </a>
      </div>
    </div>
  );
};
