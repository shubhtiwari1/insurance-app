import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // You might not need currentYear in Navbar unless the footer is also part of it,
  // but keeping it for now as it was in the original header context.
  // If the footer is separate, this can be removed.
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <>
      {/* Header Section */}
      <header className="bg-white shadow-sm py-4 px-6 md:px-12 lg:px-24 flex justify-between items-center rounded-b-lg">
        <div className="flex items-center">
          {/* Logo - Link to Home */}
          <Link
            to="/"
            className="text-2xl font-bold text-blue-700 flex items-center"
          >
            <svg
              className="w-8 h-8 mr-2 text-blue-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.31l7.6 3.8L12 11.91 4.4 8.11 12 4.31zM4 9v6.5l8 4 8-4V9l-8 4-8-4z" />
            </svg>
            Insurance Adda 2.0
          </Link>
        </div>
        {/* Navigation Links (Hidden on small screens, shown on medium and up) */}
        <nav className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-gray-600 hover:text-blue-700 font-medium transition-colors duration-200"
          >
            Home
          </Link>
          <a
            href="#"
            className="text-gray-600 hover:text-blue-700 font-medium transition-colors duration-200"
          >
            Products
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-blue-700 font-medium transition-colors duration-200"
          >
            Claims
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-blue-700 font-medium transition-colors duration-200"
          >
            About Us
          </a>
          <Link
            to="/contact"
            className="text-gray-600 hover:text-blue-700 font-medium transition-colors duration-200"
          >
            Contact
          </Link>
        </nav>
        {/* Get a Quote Button */}
        <div className="hidden md:block">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-all duration-300 transform hover:scale-105">
            Get a Quote
          </button>
        </div>
        {/* Mobile Menu Button (Hamburger Icon) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-600 hover:text-blue-700 focus:outline-none"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-75 z-50 md:hidden ${
          isMobileMenuOpen ? "" : "hidden"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white hover:text-gray-300 focus:outline-none"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-6 text-xl">
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white hover:text-blue-300 transition-colors duration-200"
          >
            Home
          </Link>
          <a
            href="#"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white hover:text-blue-300 transition-colors duration-200"
          >
            Products
          </a>
          <a
            href="#"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white hover:text-blue-300 transition-colors duration-200"
          >
            Claims
          </a>
          <a
            href="#"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white hover:text-blue-300 transition-colors duration-200"
          >
            About Us
          </a>
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white hover:text-blue-300 transition-colors duration-200"
          >
            Contact
          </Link>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 mt-4">
            Get a Quote
          </button>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
