import React from "react";
import { BsLinkedin } from "react-icons/bs";
import {
  FaGithub,
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
    <div className="flex flex-col items-center justify-center p-2">
      <p className="text-xl text-gray-600 text-center mb-6">
        I am so cool that I have same username on all platforms!
        <span className="text-gray-500 flex items-center justify-center mt-4">
          <FaAt className="text-lg mr-2" />
          <span className="font-semibold">syedfaaiz88</span>
        </span>
      </p>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 max-w-4xl">
        <a
          href="https://www.linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-800 hover:scale-105 transition-colors duration-300 flex items-center justify-center p-4 rounded-lg border border-b-2"
          aria-label="LinkedIn"
        >
          <BsLinkedin size={36} />
        </a>
        <a
          href="https://github.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:scale-105 transition-colors duration-300 flex items-center justify-center p-4 rounded-lg border border-b-2"
          aria-label="GitHub"
        >
          <FaGithub size={36} />
        </a>
        <a
          href="https://www.threads.net/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-700 hover:scale-105 transition-colors duration-300 flex items-center justify-center p-4 rounded-lg border border-b-2"
          aria-label="Threads"
        >
          <FaSquareThreads size={36} />
        </a>
        <a
          href="https://www.instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-600 hover:scale-105 transition-colors duration-300 flex items-center justify-center p-4 rounded-lg border border-b-2"
          aria-label="Instagram"
        >
          <FaSquareInstagram size={36} />
        </a>
        <a
          href="https://www.youtube.com/c/yourchannel"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 hover:scale-105 transition-colors duration-300 flex items-center justify-center p-4 rounded-lg border border-b-2"
          aria-label="YouTube"
        >
          <FaYoutube size={36} />
        </a>
        <a
          href="https://www.facebook.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:scale-105 transition-colors duration-300 flex items-center justify-center p-4 rounded-lg border border-b-2"
          aria-label="Facebook"
        >
          <FaFacebook size={36} />
        </a>
        <a
          href="https://www.facebook.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:scale-105 transition-colors duration-300 flex items-center justify-center p-4 rounded-lg border border-b-2"
          aria-label="Messenger"
        >
          <FaFacebookMessenger size={36} />
        </a>
        <a
          href="https://www.facebook.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 hover:scale-105 transition-colors duration-300 flex items-center justify-center p-4 rounded-lg border border-b-2"
          aria-label="WhatsApp"
        >
          <FaWhatsappSquare size={36} />
        </a>
        <a
          href="https://linktr.ee/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 hover:scale-105 transition-colors duration-300 flex items-center justify-center p-4 rounded-lg border border-b-2"
          aria-label="Linktree"
        >
          <PiLinktreeLogoBold size={36} />
        </a>
        <a
          href="mailto:your-email@example.com"
          className="text-red-600 hover:scale-105 transition-colors duration-300 flex items-center justify-center p-4 rounded-lg border border-b-2"
          aria-label="Email"
        >
          <FaSquareEnvelope size={36} />
        </a>
      </div>
    </div>
  );
};
