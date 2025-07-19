import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

function Contact() {
    // State for mobile menu
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    // State for current year (for footer, if needed, though usually in a shared footer)
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    // State for form fields
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    // State for submission message
    const [submissionMessage, setSubmissionMessage] = useState('');

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the formData to your backend or an email service
        console.log('Form submitted:', formData);

        // Display a success message instead of alert()
        setSubmissionMessage('Thank you for your message! We will get back to you soon.');

        // Optionally clear the message after some time
        setTimeout(() => {
            setSubmissionMessage('');
        }, 5000); // Message disappears after 5 seconds

        // Optionally reset form
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className="text-gray-800 font-inter bg-gray-50 min-h-screen flex flex-col">
            {/* Header Section (Copied from Home.jsx) */}
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

            {/* Mobile Menu Overlay (Copied from Home.jsx) */}
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

            {/* Main content area, takes remaining space */}
            <main className="flex-grow">
                {/* Submission Message Display */}
                {submissionMessage && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-md relative mx-auto my-4 max-w-xl text-center" role="alert">
                        <span className="block sm:inline">{submissionMessage}</span>
                        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                            <svg className="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" onClick={() => setSubmissionMessage('')}>
                                <title>Close</title>
                                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.15a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.15 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/>
                            </svg>
                        </span>
                    </div>
                )}

                {/* Contact Section */}
                <section className="py-16 px-6 md:px-12 lg:px-24">
                    <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden md:flex">
                        {/* Left Section: Contact Form */}
                        <div className="md:w-1/2 p-8 md:p-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">Get in Touch</h2>
                            <p className="text-gray-600 mb-8">
                                Have questions or need assistance? Fill out the form below, and our team will get back to you shortly.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        placeholder="john.doe@example.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        placeholder="Inquiry about health plans"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        placeholder="Type your message here..."
                                        required
                                    ></textarea>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md shadow-md transition-all duration-300 transform hover:scale-105"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Right Section: Contact Information & Map */}
                        <div className="md:w-1/2 bg-blue-700 text-white p-8 md:p-12 flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                                <div className="space-y-4">
                                    <p className="flex items-center">
                                        <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
                                        </svg>
                                        123 Insurance Lane, Policy City, 12345
                                    </p>
                                    <p className="flex items-center">
                                        <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                                        </svg>
                                        info@secureshield.com {/* Changed to a generic email, as 'insuranceadda2.0.com' was used in Home's footer */}
                                    </p>
                                    <p className="flex items-center">
                                        <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.32.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.74 21 3 13.26 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.12.35.03.75-.25 1.02L6.62 10.79z"/>
                                        </svg>
                                        +1 (555) 123-4567
                                    </p>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="mt-8">
                                <h3 className="text-2xl font-bold mb-4">Our Location</h3>
                                <div className="bg-blue-600 rounded-lg overflow-hidden h-48 flex items-center justify-center text-gray-300 text-lg">
                                    {/* Replace with an actual embedded map (e.g., Google Maps iframe) */}
                                    <p>Map Placeholder</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer Section (Copied from Home.jsx) */}
            <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-12 lg:px-24 rounded-t-lg mt-auto">
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
                                <Link // Use Link for Contact in footer
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
}

export default Contact;
