import React from 'react';
import Navbar from '../components/Navbar';
import { NavLink } from 'react-router-dom';

const LandingPage = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50 flex flex-col items-center justify-center px-6 py-12">
                <div className="max-w-2xl mx-auto text-center">
                    {/* Logo/Title */}
                    <div className="mb-8">
                        <h1 className="text-5xl font-bold text-gray-800 mb-2">UniResource Hub</h1>
                        <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
                    </div>

                    {/* Hero Text */}
                    <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                        Your gateway to academic success. Join thousands of students sharing and discovering
                        quality university resources in one centralized platform.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
                        <NavLink to="/signup">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-md transition-all transform hover:scale-105">
                                Get Started - It's Free
                            </button>
                        </NavLink>
                        <NavLink to="/about">
                            <button className="border-2 border-gray-300 hover:border-blue-500 text-gray-700 font-medium py-3 px-8 rounded-lg transition-all">
                                Learn More
                            </button>
                        </NavLink>
                    </div>

                    {/* Key Benefit Points */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-blue-500 text-2xl mb-3">📚</div>
                            <h3 className="font-semibold text-lg mb-2">Find Resources</h3>
                            <p className="text-gray-600">Access course materials from your department</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-blue-500 text-2xl mb-3">📤</div>
                            <h3 className="font-semibold text-lg mb-2">Contribute</h3>
                            <p className="text-gray-600">Share your notes and help others</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-blue-500 text-2xl mb-3">📊</div>
                            <h3 className="font-semibold text-lg mb-2">Track Progress</h3>
                            <p className="text-gray-600">Monitor your academic resources</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LandingPage;