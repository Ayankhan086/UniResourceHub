import React from 'react';
import Navbar from '../components/Navbar';
import { NavLink } from 'react-router-dom';
import { useAuthUserStore } from '../store/authUserStore';

const Homepage = () => {

  // Check if the user is an admin
  const { isAdmin }  = useAuthUserStore();

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">UniResource Hub</h1>
          <p className="text-xl text-gray-600">
            Your central platform for university resources, connecting you with departmental information 
            and easy resource sharing. Find, upload, and manage academic materials effortlessly.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8"></div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Browse Departments */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Browse Departments</h2>
            <p className="text-gray-600 mb-6">
              Explore academic departments and their available resources.
            </p>
            <NavLink to="/departments">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors mt-6">
              View Departments
            </button>
            </NavLink>
          </div>

          {/* Upload Resources */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Upload Resources</h2>
            <p className="text-gray-600 mb-6">
              Share your study materials, notes, and past papers with the community.
            </p>
            <NavLink to="/resources">
              <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded transition-colors ">
                Upload Now
              </button>
            </NavLink>
          </div>

          {/* My Dashboard */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">My Dashboard</h2>
            <p className="text-gray-600 mb-6">
              Access your uploaded resources, saved items, and personalized content.
            </p>
            <NavLink to={isAdmin? "/admindashboard" : "/userdashboard"}>
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded transition-colors mt-14">
                Go to Dashboard
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Homepage;