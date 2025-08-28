import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";
import { useAppContext } from "../../context/AppContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useAppContext();

  return (
    <footer
      className={`${
        theme === "dark"
          ? "bg-gray-800/80 backdrop-blur-md border-t border-gray-700/50"
          : "bg-white/80 backdrop-blur-md border-t border-gray-200/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Hackathon
              </span>
            </div>
            <p
              className={`mb-4 max-w-md ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              A modern, professional React application built with cutting-edge
              technologies and beautiful design principles.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className={`${
                  theme === "dark"
                    ? "text-gray-400 hover:text-emerald-400"
                    : "text-gray-400 hover:text-emerald-600"
                } transition-colors`}
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="#"
                className={`${
                  theme === "dark"
                    ? "text-gray-400 hover:text-emerald-400"
                    : "text-gray-400 hover:text-emerald-600"
                } transition-colors`}
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className={`${
                  theme === "dark"
                    ? "text-gray-400 hover:text-emerald-400"
                    : "text-gray-400 hover:text-emerald-600"
                } transition-colors`}
                aria-label="Twitter"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className={`text-lg font-semibold mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className={`${
                    theme === "dark"
                      ? "text-gray-300 hover:text-emerald-400"
                      : "text-gray-600 hover:text-emerald-600"
                  } transition-colors`}
                >
                  Home
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3
              className={`text-lg font-semibold mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              Contact
            </h3>
            <ul
              className={`space-y-2 ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              <li>hello@hackathon.com</li>
              <li>+1 (555) 123-4567</li>
              <li>San Francisco, CA</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className={`border-t mt-8 pt-8 ${
            theme === "dark" ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p
              className={`text-sm ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              &copy; {currentYear} Hackathon Project. All rights reserved.
            </p>
            <p
              className={`text-sm flex items-center space-x-1 mt-2 md:mt-0 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <span>Built with</span>
              <FaHeart className="w-4 h-4 text-red-500" />
              <span>using React & Vite</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
