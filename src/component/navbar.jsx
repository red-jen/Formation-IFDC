import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import ifdclogo from "../assets/ifdclogo.png";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [showAdminDropdown, setShowAdminDropdown] = useState(false);
    const [showUserDropdown, setShowUserDropdown] = useState(false);
    const [showdiplomDropdown, setShowdiplomDropdown] = useState(false);
    const location = useLocation();
    const { user, isAuthenticated, isAdmin, logout } = useAuth();

    // DEBUG: Add these logs to see what's happening
    console.log('🔍 Navbar - user:', user);
    console.log('🔍 Navbar - isAuthenticated():', isAuthenticated());
    console.log('🔍 Navbar - isAdmin():', isAdmin());

    const isActive = (path) => location.pathname === path;

    const handleLogout = async () => {
        await logout();
        setShowUserDropdown(false);
        setShowdiplomDropdown(false);
        alert('You have been logged out successfully.');
    };

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
                               <div className="relative">

                        <button
                                        onMouseOver={() => setShowdiplomDropdown(!showdiplomDropdown)}
                                        onClick={() => setShowdiplomDropdown(!showdiplomDropdown)}
                                        className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50 transition-colors duration-200"
                                    >
                                     Diplomes
                                        <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                     {showdiplomDropdown && (
                                         <div       onMouseLeave={() => setShowdiplomDropdown(false)} 
                                         className="fixed  mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                                          
                                             <div className="py-1">
                                                 <Link
                                                     to="/Technicien"
                                                     className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                     onClick={() => setShowdiplomDropdown(false)}
                                                 >
                                                    
                                                     Technicien
                                                 </Link>
                                             </div>
                                             <div className="py-1">
                                                 <Link
                                                     to="/TechnicienSuperieur"
                                                     className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                     onClick={() => setShowdiplomDropdown(false)}
                                                 >
                                                    
                                                     Technicien Supérieur
                                                 </Link>
                                             </div>  
                                             <div className="py-1">
                                                 <Link
                                                     to="/diplomas"
                                                     className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                     onClick={() => setShowdiplomDropdown(false)}
                                                 >
                                                    
                                                     Licence Professionnelle
                                                 </Link>
                                             </div>    

                                         </div>

                                     )}
                                     </div>

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
        

                            {/* Admin Dropdown - Only show if user is admin */}
                            {isAuthenticated() && isAdmin() && (
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

                                    {/* Admin Dropdown Menu */}
                                    {showAdminDropdown && (
                                        <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                                            <div className="py-1">
                                                                    <Link
    to="/admin-dashboard"
    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
    onClick={() => setShowAdminDropdown(false)}
>
    <svg className="mr-3 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
    Admin Dashboard
</Link>
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
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Side Actions */}
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6 space-x-3">
                            {isAuthenticated() ? (
                                /* User is logged in */
                                <div className="relative">
                                    <button
                                        onClick={() => setShowUserDropdown(!showUserDropdown)}
                                        className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50 transition-colors duration-200"
                                    >
                                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                                            <span className="text-white text-sm font-medium">
                                                {user?.name?.charAt(0)?.toUpperCase()}
                                            </span>
                                        </div>
                                        <span>{user?.name}</span>
                                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>

                                    {/* User Dropdown Menu */}
                                    {showUserDropdown && (
                                        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                                            <div className="py-1">
                                                <div className="px-4 py-2 text-xs text-gray-500 border-b">
                                                    {user?.email}
                                                </div>
                                                <Link
                                                    to="/profile"
                                                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                    onClick={() => setShowUserDropdown(false)}
                                                >
                                                    <svg className="mr-3 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                    </svg>
                                                    Profile
                                                </Link>
                                                <button
                                                    onClick={handleLogout}
                                                    className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                >
                                                    <svg className="mr-3 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                                    </svg>
                                                    Logout
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                /* User is not logged in */
                                <div className="flex space-x-3">
                                    <Link
                                        to="/login"
                                        className="text-gray-700 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                                    >
                                        Se connecter
                                    </Link>
                                    <Link
                                        to="/authentification"
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 shadow-sm"
                                    >
                                        Inscrivez-vous
                                    </Link>
                                </div>
                            )}
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
                            {/* Mobile Navigation Links */}
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
                            <Link
    to="/admin-dashboard"
    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
    onClick={() => setShowAdminDropdown(false)}
>
    <svg className="mr-3 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
    Admin Dashboard
</Link>

                            {/* Mobile Admin Section */}
                            {isAuthenticated() && isAdmin() && (
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
                                </div>
                            )}

                            {/* Mobile Auth Section */}
                            <div className="border-t border-gray-200 pt-4 mt-4">
                                {isAuthenticated() ? (
                                    <div className="space-y-2">
                                        <div className="px-3 py-2 text-sm text-gray-600">
                                            Welcome, {user?.name}
                                        </div>
                                        <Link
                                            to="/profile"
                                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-100"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Profile
                                        </Link>
                                        <button
                                            onClick={() => {
                                                handleLogout();
                                                setIsOpen(false);
                                            }}
                                            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-100"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                ) : (
                                    <div className="space-y-2">
                                        <Link
                                            to="/login"
                                            className="block w-full text-center bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-base font-medium"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Se connecter
                                        </Link>
                                        <Link
                                            to="/authentification"
                                            className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-base font-medium"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Inscrivez-vous
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Backdrop for dropdowns */}
            {(showAdminDropdown || showUserDropdown) && (
                <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => {
                        setShowAdminDropdown(false);
                        setShowUserDropdown(false);
                    }}
                ></div>
            )}
        </nav>
    );
}