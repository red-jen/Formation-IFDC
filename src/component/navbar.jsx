import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ifdclogo from "../assets/ifdclogo.png";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [showAdminDropdown, setShowAdminDropdown] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-50 top-0 shadow-lg border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo Section */}
                    <Link to="/" className="flex items-center space-x-3 flex-shrink-0">
                        <img src={ifdclogo} className="h-10 w-auto" alt="IFDC" />
                        <span className="text-2xl font-bold text-gray-900 dark:text-white">
                            IFDCE
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {/* Main Navigation */}
                            <Link
                                to="/"
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                                    isActive('/') 
                                        ? 'text-blue-700 bg-blue-50' 
                                        : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50'
                                }`}
                            >
                                Accueil
                            </Link>
                            
                            <Link
                                to="/about"
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                                    isActive('/about') 
                                        ? 'text-blue-700 bg-blue-50' 
                                        : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50'
                                }`}
                            >
                                IFDCE
                            </Link>

                            <Link
                                to="/diplomas"
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                                    isActive('/diplomas') 
                                        ? 'text-blue-700 bg-blue-50' 
                                        : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50'
                                }`}
                            >
                                Diplômes
                            </Link>

                            <Link
                                to="/international"
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                                    isActive('/international') 
                                        ? 'text-blue-700 bg-blue-50' 
                                        : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50'
                                }`}
                            >
                                International
                            </Link>

                            <Link
                                to="/news"
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                                    isActive('/news') 
                                        ? 'text-blue-700 bg-blue-50' 
                                        : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50'
                                }`}
                            >
                                Actualités
                            </Link>

                            <Link
                                to="/contact"
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                                    isActive('/contact') 
                                        ? 'text-blue-700 bg-blue-50' 
                                        : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50'
                                }`}
                            >
                                Contact
                            </Link>

                            {/* Admin Dropdown */}
                            <div className="relative">
                                <button
                                    onClick={() => setShowAdminDropdown(!showAdminDropdown)}
                                    className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50 transition-colors duration-200"
                                >
                                    Admin
                                    <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>

                                {/* Dropdown Menu */}
                                {showAdminDropdown && (
                                    <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                                        <div className="py-1">
                                            <Link
                                                to="/diploma-dashboard"
                                                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                onClick={() => setShowAdminDropdown(false)}
                                            >
                                                <svg className="mr-3 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                                </svg>
                                                Diploma Dashboard
                                            </Link>
                                            <Link
                                                to="/field-dashboard"
                                                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                onClick={() => setShowAdminDropdown(false)}
                                            >
                                                <svg className="mr-3 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                                </svg>
                                                Field Management
                                            </Link>
                                            <div className="border-t border-gray-100"></div>
                                            <Link
                                                to="/create-diploma"
                                                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                onClick={() => setShowAdminDropdown(false)}
                                            >
                                                <svg className="mr-3 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                </svg>
                                                Quick Add Diploma
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Side Actions */}
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6 space-x-3">
                            <Link
                                to="/authentification"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 shadow-sm"
                            >
                                Inscrivez-vous
                            </Link>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
                            {/* Main Links */}
                            <Link
                                to="/"
                                className={`block px-3 py-2 rounded-md text-base font-medium ${
                                    isActive('/') 
                                        ? 'text-blue-700 bg-blue-100' 
                                        : 'text-gray-700 hover:text-blue-700 hover:bg-gray-100'
                                }`}
                                onClick={() => setIsOpen(false)}
                            >
                                Accueil
                            </Link>
                            
                            <Link
                                to="/about"
                                className={`block px-3 py-2 rounded-md text-base font-medium ${
                                    isActive('/about') 
                                        ? 'text-blue-700 bg-blue-100' 
                                        : 'text-gray-700 hover:text-blue-700 hover:bg-gray-100'
                                }`}
                                onClick={() => setIsOpen(false)}
                            >
                                IFDCE
                            </Link>

                            <Link
                                to="/diplomas"
                                className={`block px-3 py-2 rounded-md text-base font-medium ${
                                    isActive('/diplomas') 
                                        ? 'text-blue-700 bg-blue-100' 
                                        : 'text-gray-700 hover:text-blue-700 hover:bg-gray-100'
                                }`}
                                onClick={() => setIsOpen(false)}
                            >
                                Diplômes
                            </Link>

                            <Link
                                to="/international"
                                className={`block px-3 py-2 rounded-md text-base font-medium ${
                                    isActive('/international') 
                                        ? 'text-blue-700 bg-blue-100' 
                                        : 'text-gray-700 hover:text-blue-700 hover:bg-gray-100'
                                }`}
                                onClick={() => setIsOpen(false)}
                            >
                                International
                            </Link>

                            <Link
                                to="/news"
                                className={`block px-3 py-2 rounded-md text-base font-medium ${
                                    isActive('/news') 
                                        ? 'text-blue-700 bg-blue-100' 
                                        : 'text-gray-700 hover:text-blue-700 hover:bg-gray-100'
                                }`}
                                onClick={() => setIsOpen(false)}
                            >
                                Actualités
                            </Link>

                            <Link
                                to="/contact"
                                className={`block px-3 py-2 rounded-md text-base font-medium ${
                                    isActive('/contact') 
                                        ? 'text-blue-700 bg-blue-100' 
                                        : 'text-gray-700 hover:text-blue-700 hover:bg-gray-100'
                                }`}
                                onClick={() => setIsOpen(false)}
                            >
                                Contact
                            </Link>

                            {/* Admin Section */}
                            <div className="border-t border-gray-200 pt-4 mt-4">
                                <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Administration
                                </div>
                                
                                <Link
                                    to="/diploma-dashboard"
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-100"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Diploma Dashboard
                                </Link>
                                
                                <Link
                                    to="/field-dashboard"
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-100"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Field Management
                                </Link>
                                
                                <Link
                                    to="/create-diploma"
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-100"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Create Diploma
                                </Link>
                            </div>

                            {/* Mobile CTA */}
                            <div className="border-t border-gray-200 pt-4 mt-4">
                                <Link
                                    to="/authentification"
                                    className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-base font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Inscrivez-vous
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Backdrop for dropdown */}
            {showAdminDropdown && (
                <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setShowAdminDropdown(false)}
                ></div>
            )}
        </nav>
    );
}