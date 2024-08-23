import React from 'react';
import { IoLogoFacebook, IoLogoGithub, IoLogoLinkedin, IoLogoInstagram } from 'react-icons/io5';
import { SiGmail } from 'react-icons/si';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Map Marker icon
import { PiLinktreeLogoBold } from 'react-icons/pi';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-8 mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-96 gap-20">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Me</h3>
          <p className="text-gray-400">
            I'm Syed Faaiz, a passionate Software Engineer who do martial arts, weight lifting and calisthenics.
          </p>
        </div>

        {/* Quick Links
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="text-gray-400 hover:text-indigo-400">About</a>
            </li>
            <li>
              <a href="#services" className="text-gray-400 hover:text-indigo-400">Services</a>
            </li>
            <li>
              <a href="#portfolio" className="text-gray-400 hover:text-indigo-400">Portfolio</a>
            </li>
            <li>
              <a href="#contact" className="text-gray-400 hover:text-indigo-400">Contact</a>
            </li>
          </ul>
        </div> */}

        {/* Contact Information & Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Me</h3>
          <ul className="text-gray-400 space-y-2 mb-4">
            <li>Email: faaiz290302@gmail.com</li>
            <li>Phone: +92-321-1170210</li>
            <li>
              <a 
                href="https://goo.gl/maps/your-map-link" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-green-400 hover:text-green-500 flex items-center space-x-2 mt-1"
              >
                <FaMapMarkerAlt className="w-5 h-5 text-red-600" />
                <span>Lahore, Pakistan</span>
              </a>
            </li>
          </ul>
          <div className="flex space-x-4 mt-2">
            <a href="https://www.linkedin.com/in/syedfaaiz88/" className="text-white hover:text-green-400">
              <IoLogoLinkedin className="w-7 h-7" />
            </a>
            <a href="https://web.facebook.com/syedfaaiz88" className="text-white hover:text-green-400">
              <IoLogoFacebook className="w-7 h-7" />
            </a>
            <a href="https://github.com/syedfaaiz88" className="text-white hover:text-green-400">
              <IoLogoGithub className="w-7 h-7" />
            </a>
            <a href="https://www.instagram.com/syedfaaiz88/" className="text-white hover:text-green-400">
              <IoLogoInstagram className="w-7 h-7" />
            </a>
            <a href="https://linktr.ee/syedfaaiz88" className="text-white hover:text-green-400">
              <PiLinktreeLogoBold className='w-7 h-7' />
            </a>
            <a href="mailto:faaiz290302@gmail.com" className="text-white hover:text-green-400">
              <SiGmail className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center">
        <p className="text-gray-400">© 2024 Syed Faaiz. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
