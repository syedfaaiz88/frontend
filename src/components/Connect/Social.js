import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import {
  FaGithub,
  FaAt,
  FaYoutube,
  FaFacebook,
  FaFacebookMessenger,
  FaWhatsappSquare,
} from 'react-icons/fa';
import { AiFillTikTok } from 'react-icons/ai';
import {
  FaSquareEnvelope,
  FaSquareInstagram,
  FaSquareThreads,
} from 'react-icons/fa6';
import { PiLinktreeLogoFill } from 'react-icons/pi';

const SocialIcon = ({ icon: Icon, link, label, color, size }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center ${color}`}
      aria-label={label}
    >
      <Icon size={size} />
    </a>
  );
};

const socialLinks = [
  { icon: BsLinkedin, link: 'https://www.linkedin.com/in/syedfaaiz88', label: 'LinkedIn', color: 'text-blue-800', size: 36 },
  { icon: FaGithub, link: 'https://github.com/syedfaaiz88', label: 'GitHub', color: 'text-gray-800', size: 30 },
  { icon: FaSquareThreads, link: 'https://www.threads.net/syedfaaiz88', label: 'Threads', color: 'text-purple-700', size: 28 },
  { icon: FaSquareInstagram, link: 'https://www.instagram.com/syedfaaiz88', label: 'Instagram', color: 'text-pink-600', size: 32 },
  { icon: FaYoutube, link: 'https://www.youtube.com/@syedfaaiz88', label: 'YouTube', color: 'text-red-600', size: 36 },
  { icon: FaFacebook, link: 'https://www.facebook.com/syedfaaiz88', label: 'Facebook', color: 'text-blue-600', size: 34 },
  { icon: FaFacebookMessenger, link: 'https://www.facebook.com/syedfaaiz88', label: 'Messenger', color: 'text-blue-600', size: 34 },
  { icon: FaWhatsappSquare, link: 'https://wa.me/03211170210', label: 'WhatsApp', color: 'text-green-600', size: 32 },
  { icon: PiLinktreeLogoFill, link: 'https://linktr.ee/syedfaaiz88', label: 'Linktree', color: 'text-green-600', size: 30 },
  { icon: FaSquareEnvelope, link: 'mailto:faaiz290302@gmail.com', label: 'Email', color: 'text-red-600', size: 30 },
  { icon: AiFillTikTok, link: 'https://www.tiktok.com/@syedfaaiz88', label: 'TikTok', color: 'text-gray-900', size: 36 },
];

export const Social = () => {
  return (
    <div className="flex flex-col items-center justify-center p-2">
      <p className="text-sm text-gray-600 text-center">
        I am so cool that I have the same username on all platforms!
        <span className="text-gray-500 flex items-center justify-center mt-4">
          <FaAt className="text-sm mr-1" />
          <span className="font-semibold">syedfaaiz88</span>
        </span>
      </p>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-11 gap-6 mt-24">
        {socialLinks.map(({ icon, link, label, color, size }, index) => (
          <SocialIcon key={index} icon={icon} link={link} label={label} color={color} size={size} />
        ))}
      </div>
    </div>
  );
};
