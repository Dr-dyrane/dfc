import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-6">
      <div className="max-w-4xl mx-auto p-4 md:p-8 flex flex-col items-center justify-center">
        <div className="text-center">
          <p className="text-xl font-semibold mb-2">About</p>
          <p className="text-gray-500">
            Dyrane's Farm Cast is a project inspired by our passion for agriculture and a desire to empower farmers with weather information and agricultural recommendations.
            </p>
            <p className="text-gray-500 mb-4">This is a Portfolio Project for ALX Holberton School.
          </p>
        </div>
        <div className="flex space-x-4 mb-4">
          <a
            href="https://www.linkedin.com/in/dyrane-alexander-1852309b"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/Dr-dyrane"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://twitter.com/Dr_dyrane"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={20} />
          </a>
        </div>
        <div className="text-center mb-4">
          <a
            href="https://github.com/Dr-dyrane/dfc"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository
          </a>
        </div>
        <div className="text-center text-gray-500">
          &copy; {new Date().getFullYear()} Dyrane's Farm Cast
        </div>
      </div>
    </footer>
  );
};

export default Footer;
