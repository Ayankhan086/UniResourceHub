import React, { useState } from 'react';
import { useLocation, Link, NavLink } from 'react-router-dom';
import { useAuthUserStore } from '../store/authUserStore';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../lib/axios';
import favicon from "../../public/favicon.svg"

const Navbar = () => {
    const location = useLocation();
    const { isAdmin, logout } = useAuthUserStore();
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const isLandingOrAuth =
        location.pathname === '/' ||
        location.pathname === '/login' ||
        location.pathname === '/signup' ||
        location.pathname === '/about';

    const handleLogout = async () => {
        try {
            await axiosInstance.get('/users/logout');
            logout();
            navigate('/login');
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <nav className="sticky top-0 z-40 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 shadow-lg py-2 px-2 sm:px-6 transition-all">
            <div className="max-w-7xl mx-auto flex justify-between items-center relative">
                {/* Logo/Brand */}
                <Link to="/" className="flex items-center space-x-2 cursor-pointer select-none">
                    <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white shadow-md border-2">
                        <span className="text-xl font-extrabold text-indigo-700 rounded-full">
                            <img src={favicon} alt="favicon" className="h-8 w-8 rounded-full" />
                        </span>
                    </span>
                    <h1 className="text-xl sm:text-2xl font-extrabold text-white tracking-wide drop-shadow-lg">UniResource Hub</h1>
                </Link>

                {isLandingOrAuth ? (
                    <div className="flex items-center space-x-2 sm:space-x-3">
                        <Link to="/login">
                            <button className="px-4 sm:px-5 py-2 rounded-full bg-white text-indigo-700 font-semibold shadow hover:bg-indigo-100 transition cursor-pointer text-sm sm:text-base">
                                Sign In
                            </button>
                        </Link>
                        <Link to="/signup">
                            <button className="px-4 sm:px-5 py-2 rounded-full bg-yellow-300 text-indigo-900 font-semibold shadow hover:bg-yellow-400 transition cursor-pointer text-sm sm:text-base">
                                Sign Up
                            </button>
                        </Link>
                    </div>
                ) : (
                    <>
                        {/* Hamburger menu for mobile */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setMenuOpen(!menuOpen)}
                                className="text-white focus:outline-none"
                                aria-label="Toggle menu"
                            >
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    {menuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                                    )}
                                </svg>
                            </button>
                        </div>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex space-x-4 lg:space-x-8">
                            <NavLink
                                to="/home"
                                className={({ isActive }) =>
                                    `text-white/80 font-medium transition-colors duration-200 relative group px-2 py-1 rounded ${isActive ? 'text-yellow-300 font-bold bg-white/10' : 'hover:text-yellow-300 hover:bg-white/10'}`
                                }
                            >
                                Home
                                <span className="block h-0.5 bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                            </NavLink>
                            <NavLink
                                to="/departments"
                                className={({ isActive }) =>
                                    `text-white/80 font-medium transition-colors duration-200 relative group px-2 py-1 rounded ${isActive ? 'text-yellow-300 font-bold bg-white/10' : 'hover:text-yellow-300 hover:bg-white/10'}`
                                }
                            >
                                Departments
                                <span className="block h-0.5 bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                            </NavLink>
                            <NavLink
                                to="/resources"
                                className={({ isActive }) =>
                                    `text-white/80 font-medium transition-colors duration-200 relative group px-2 py-1 rounded ${isActive ? 'text-yellow-300 font-bold bg-white/10' : 'hover:text-yellow-300 hover:bg-white/10'}`
                                }
                            >
                                Resources
                                <span className="block h-0.5 bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                            </NavLink>
                            <NavLink
                                to="/saveresourcepage"
                                className={({ isActive }) =>
                                    `text-white/80 font-medium transition-colors duration-200 relative group px-2 py-1 rounded ${isActive ? 'text-yellow-300 font-bold bg-white/10' : 'hover:text-yellow-300 hover:bg-white/10'}`
                                }
                            >
                                Saved Resources
                                <span className="block h-0.5 bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                            </NavLink>
                            <NavLink
                                to={isAdmin ? "/admindashboard" : "/userdashboard"}
                                className={({ isActive }) =>
                                    `text-white/80 font-medium transition-colors duration-200 relative group px-2 py-1 rounded ${isActive ? 'text-yellow-300 font-bold bg-white/10' : 'hover:text-yellow-300 hover:bg-white/10'}`
                                }
                            >
                                Dashboard
                                <span className="block h-0.5 bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                            </NavLink>
                        </div>
                        <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
                            <button onClick={handleLogout} className="px-4 py-2 rounded-full bg-yellow-300 text-indigo-900 font-semibold shadow hover:bg-yellow-400 transition text-sm lg:text-base">
                                Sign Out
                            </button>
                        </div>

                        {/* Mobile Nav Dropdown */}
                        {menuOpen && (
                            <div className="fixed inset-0 z-50 bg-black/40 md:hidden" onClick={() => setMenuOpen(false)}>
                                <div className="absolute top-0 left-0 w-full bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 shadow-lg z-50 animate-slideDown">
                                    <div className="flex flex-col items-center space-y-2 py-6">
                                        <NavLink
                                            to="/home"
                                            className={({ isActive }) =>
                                                `w-full text-center py-2 text-white/90 font-medium transition-colors duration-200 rounded ${isActive ? 'text-yellow-300 font-bold bg-white/10' : 'hover:text-yellow-300 hover:bg-white/10'}`
                                            }
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            Home
                                        </NavLink>
                                        <NavLink
                                            to="/departments"
                                            className={({ isActive }) =>
                                                `w-full text-center py-2 text-white/90 font-medium transition-colors duration-200 rounded ${isActive ? 'text-yellow-300 font-bold bg-white/10' : 'hover:text-yellow-300 hover:bg-white/10'}`
                                            }
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            Departments
                                        </NavLink>
                                        <NavLink
                                            to="/resources"
                                            className={({ isActive }) =>
                                                `w-full text-center py-2 text-white/90 font-medium transition-colors duration-200 rounded ${isActive ? 'text-yellow-300 font-bold bg-white/10' : 'hover:text-yellow-300 hover:bg-white/10'}`
                                            }
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            Resources
                                        </NavLink>
                                        <NavLink
                                            to="/saveresourcepage"
                                            className={({ isActive }) =>
                                                `w-full text-center py-2 text-white/90 font-medium transition-colors duration-200 rounded ${isActive ? 'text-yellow-300 font-bold bg-white/10' : 'hover:text-yellow-300 hover:bg-white/10'}`
                                            }
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            Saved Resources
                                        </NavLink>
                                        <NavLink
                                            to={isAdmin ? "/admindashboard" : "/userdashboard"}
                                            className={({ isActive }) =>
                                                `w-full text-center py-2 text-white/90 font-medium transition-colors duration-200 rounded ${isActive ? 'text-yellow-300 font-bold bg-white/10' : 'hover:text-yellow-300 hover:bg-white/10'}`
                                            }
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            Dashboard
                                        </NavLink>
                                        <button
                                            onClick={() => { handleLogout(); setMenuOpen(false); }}
                                            className="w-full px-4 py-2 rounded-full bg-yellow-300 text-indigo-900 font-semibold shadow hover:bg-yellow-400 transition mt-2"
                                        >
                                            Sign Out
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;