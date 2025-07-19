import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Corrected import: just 'Link'

const Home = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <div className="text-gray-800 font-inter">
      {/* Tailwind CSS and Google Fonts are assumed to be configured in the project's index.html/CSS */}
      {/* For standalone preview in canvas, we'd typically add them in index.html or a global CSS file */}
      {/* Here, we'll assume they are available from the previous HTML setup's CDN links. */}
      {/* Header Section */}
      <header className="bg-white shadow-sm py-4 px-6 md:px-12 lg:px-24 flex justify-between items-center rounded-b-lg">
        <div className="flex items-center">
          {/* Logo - Now a Link to Home */}
          <Link
            to="/" // Link to the home page
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
            to="/" // Use Link for Home
            className="text-gray-600 hover:text-blue-700 font-medium transition-colors duration-200"
          >
            Home
          </Link>
          {/* Keep as <a> if these don't route to specific pages yet, otherwise convert to Link */}
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
            to="/contact" // Use Link for Contact
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
          <Link // Use Link for Home in mobile menu
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white hover:text-blue-300 transition-colors duration-200"
          >
            Home
          </Link>
          {/* Keep as <a> if these don't route to specific pages yet, otherwise convert to Link */}
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
          <Link // Use Link for Contact in mobile menu
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

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between rounded-lg m-4 md:m-8">
          <div className="max-w-2xl text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Protect What Matters Most
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Comprehensive insurance solutions tailored to your life, ensuring
              peace of mind for you and your loved ones.
            </p>
            <button className="bg-white text-blue-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Explore Our Plans
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            {/* Placeholder Image for Hero Section */}
            <img
              src="https://placehold.co/500x300/e0f2fe/1e40af?text=Insurance Adda 2.0+Hero"
              alt="Insurance Hero Image"
              className="rounded-lg shadow-xl max-w-full h-auto"
            />
          </div>
        </section>

        {/* Features/Benefits Section */}
        <section className="py-16 px-6 md:px-12 lg:px-24 bg-white m-4 md:m-8 rounded-lg shadow-md">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-700">
            Why Choose Insurance Adda 2.0?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="bg-blue-50 p-8 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <div className="text-blue-600 mb-4">
                <svg
                  className="w-12 h-12 mx-auto"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.7-7 8.94V12H5V6.3l7-3.5 7 3.5V11z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Comprehensive Coverage
              </h3>
              <p className="text-gray-600">
                Wide range of plans to protect every aspect of your life, from
                health to home.
              </p>
            </div>
            {/* Feature Card 2 */}
            <div className="bg-blue-50 p-8 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <div className="text-blue-600 mb-4">
                <svg
                  className="w-12 h-12 mx-auto"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Easy Claims Process
              </h3>
              <p className="text-gray-600">
                Hassle-free and quick claims settlement to get you back on track
                faster.
              </p>
            </div>
            {/* Feature Card 3 */}
            <div className="bg-blue-50 p-8 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <div className="text-blue-600 mb-4">
                <svg
                  className="w-12 h-12 mx-auto"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                24/7 Customer Support
              </h3>
              <p className="text-gray-600">
                Our dedicated team is always here to assist you, day or night.
              </p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50 m-4 md:m-8 rounded-lg shadow-md">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-700">
            Our Insurance Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Product Card 1: Car Insurance */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <div className="text-blue-600 mb-4">
                <svg
                  className="w-16 h-16 mx-auto"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Motor Insurance</h3>
              <p className="text-gray-600 text-sm">
                Protect your vehicle from accidents, theft, and natural
                calamities.
              </p>
              <a
                href="#"
                className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn More &rarr;
              </a>
            </div>
            {/* Product Card 2: Health Insurance */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <div className="text-blue-600 mb-4">
                <svg
                  className="w-16 h-16 mx-auto"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Health Insurance</h3>
              <p className="text-gray-600 text-sm">
                Secure your health with comprehensive coverage for medical
                expenses.
              </p>
              <a
                href="#"
                className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn More &rarr;
              </a>
            </div>
            {/* Product Card 3: Life Insurance */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <div className="text-blue-600 mb-4">
                <svg
                  className="w-16 h-16 mx-auto"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08s5.97 1.09 6 3.08c-1.29 1.94-3.5 3.22-6 3.22z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Life Insurance</h3>
              <p className="text-gray-600 text-sm">
                Provide financial security for your family's future.
              </p>
              <a
                href="#"
                className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn More &rarr;
              </a>
            </div>
            {/* Product Card 4: Home Insurance */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <div className="text-blue-600 mb-4">
                <svg
                  className="w-16 h-16 mx-auto"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Home Insurance</h3>
              <p className="text-gray-600 text-sm">
                Protect your home and belongings from unexpected events.
              </p>
              <a
                href="#"
                className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn More &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-6 md:px-12 lg:px-24 bg-white m-4 md:m-8 rounded-lg shadow-md">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-700">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial Card 1 */}
            <div className="bg-blue-50 p-8 rounded-lg shadow-md">
              <p className="text-gray-700 italic mb-4">
                "Insurance Adda 2.0 made getting insurance so easy! Their team
                was incredibly helpful, and the coverage is exactly what I
                needed. Highly recommend!"
              </p>
              <div className="flex items-center">
                <img
                  src="https://placehold.co/60x60/cbd5e1/475569?text=JD"
                  alt="Client Avatar"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold text-gray-800">Jane Doe</p>
                  <p className="text-sm text-gray-500">Happy Client</p>
                </div>
              </div>
            </div>
            {/* Testimonial Card 2 */}
            <div className="bg-blue-50 p-8 rounded-lg shadow-md">
              <p className="text-gray-700 italic mb-4">
                "The claims process was surprisingly smooth and fast. Insurance
                Adda 2.0 truly stands by their promise of quick and efficient
                service. Thank you!"
              </p>
              <div className="flex items-center">
                <img
                  src="https://placehold.co/60x60/cbd5e1/475569?text=SM"
                  alt="Client Avatar"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold text-gray-800">Sam Miller</p>
                  <p className="text-sm text-gray-500">Satisfied Customer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-blue-700 text-white py-16 px-6 md:px-12 lg:px-24 text-center m-4 md:m-8 rounded-lg shadow-md">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Protected?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Get a personalized quote today and find the perfect insurance plan
            for your needs.
          </p>
          <button className="bg-white text-blue-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
            Get Your Free Quote
          </button>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-12 lg:px-24 rounded-t-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Footer Column 1: About */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Insurance Adda 2.0
            </h3>
            <p className="text-sm leading-relaxed">
              Your trusted partner for comprehensive insurance solutions. We are
              committed to protecting your future.
            </p>
          </div>
          {/* Footer Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link // Use Link for Home in footer
                  to="/"
                  className="text-sm hover:text-blue-400 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="#" // Keep as <a>
                  className="text-sm hover:text-blue-400 transition-colors duration-200"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#" // Keep as <a>
                  className="text-sm hover:text-blue-400 transition-colors duration-200"
                >
                  Claims
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-blue-400 transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-blue-400 transition-colors duration-200"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <Link // Use Link for Contact in footer (assuming you want it there too)
                  to="/contact"
                  className="text-sm hover:text-blue-400 transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Footer Column 3: Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Contact Us
            </h3>
            <p className="text-sm">123 Insurance Lane, Policy City, 12345</p>
            <p className="text-sm">Email: info@Insurance Adda 2.0.com</p>
            <p className="text-sm">Phone: +1 (555) 123-4567</p>
            <div className="flex space-x-4 mt-4">
              {/* Social Media Icons (Placeholder) */}
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.403 0-6.155 2.752-6.155 6.155 0 .484.055.955.151 1.408-5.111-.257-9.633-2.714-12.669-6.427-.523.896-.823 1.938-.823 3.205 0 2.132 1.084 4.048 2.726 5.176-.201-.006-.39-.016-.58-.064-.007.025-.007.05-.007.075 0 2.984 2.127 5.474 4.938 6.049-.41.111-.84.17-1.28.17-.314 0-.615-.03-.916-.086.78 2.443 3.06 4.213 5.764 4.262-2.095 1.64-4.757 2.62-7.645 2.62-.493 0-.979-.029-1.459-.085 2.705 1.734 5.93 2.75 9.39 2.75 11.292 0 17.493-9.312 17.493-17.397 0-.267-.015-.534-.039-.798.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-2v-3.334c0-.806-.017-1.834-1.112-1.834-1.113 0-1.287.872-1.287 1.77v3.398h-2v-6h1.929v.837h.027c.265-.487.913-1.112 2.006-1.112 2.13 0 2.528 1.403 2.528 3.229v5.046z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-sm mt-8 border-t border-gray-700 pt-6">
          &copy; {currentYear} Insurance Adda 2.0 Insurance. All rights
          reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
