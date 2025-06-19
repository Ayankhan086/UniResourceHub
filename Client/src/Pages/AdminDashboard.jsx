import React from 'react';
import Navbar from '../components/Navbar';
import { useEffect } from 'react';
import axiosInstance from '../lib/axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthUserStore } from '../store/authUserStore';

const AdminDashboard = () => {
    const [users, setUsers] = useState(null)
    const [resources, setResources] = useState(null)
    const [department, setDepartment] = useState(null)
    const [download, setDownload] = useState(null)
    const [loading, setLoading] = useState(true);

    const [recentUploads, setRecentUploads] = useState()




    useEffect(() => {
        

        const getAllUsersCount = async () => {
            const response = await axiosInstance.get("/users/all")

            if (response.status === 200) {
                setUsers(response.data.data.length)
            }
        }
        getAllUsersCount();

        const getAllResourcesCount = async () => {
            const response = await axiosInstance.get("/resources/all")

            if (response.status === 200) {
                setResources(response.data.data.length)
            }
        }
        getAllResourcesCount()

        const getAllDepartmentCount = async () => {
            const response = await axiosInstance.get("/departments/all")

            if (response.status === 200) {
                setDepartment(response.data.data.length)
            }
        }
        getAllDepartmentCount()

        const getAllDownloadCount = async () => {
            const response = await axiosInstance.get("/activities/getalldownloadedActivity")

            if (response.status === 200) {
                setDownload(response.data.data[0]._count.type)

            }
        }
        getAllDownloadCount()

        const getRecentUploads = async () => {
            const response = await axiosInstance.get("/resources/allwaitingresources")

            if (response.status === 200) {
                setRecentUploads(response.data.data)
            }
        }

        getRecentUploads()

        setLoading(false)

    }, [])

    const handleAccept = async (resourceId) => {

        const publishStatus = "PUBLISHED";

        const response = await axiosInstance.put(`/resources/togglePublication/${resourceId}`, { publishStatus })

        if (response.status === 200) {
            setRecentUploads(prevUploads => prevUploads.filter(upload => upload.id !== resourceId));
        }
    }

    const handleReject = async (resourceId) => {
        const publishStatus = "REJECTED";

        const response = await axiosInstance.put(`/resources/togglePublication/${resourceId}`, { publishStatus })

        if (response.status === 200) {
            setRecentUploads(prevUploads => prevUploads.filter(upload => upload.id !== resourceId));
        }
    }


    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
                <div className="max-w-6xl mx-auto">
                    <div className="flex  sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4">
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Admin Dashboard</h1>
                        <div className="flex items-center space-x-4">
                            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">Admin</span>
                        </div>
                    </div>

                    {/* Platform Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
                        {[
                            { title: "Total Users", value: users, icon: "👥" },
                            { title: "Total Resources", value: resources, icon: "📚" },
                            { title: "Departments", value: department, icon: "🏛️" },
                            { title: "Total Downloads", value: download, icon: "📥" },
                        ].map((stat, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-md p-4 sm:p-6">
                                <div className="flex justify-between">
                                    <div>
                                        <h3 className="text-gray-600 mb-1 sm:mb-2">{stat.title}</h3>
                                        <p className="text-2xl sm:text-3xl font-bold text-gray-800">{stat.value}</p>
                                    </div>
                                    <span className="text-2xl sm:text-3xl">{stat.icon}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                        {/* Recent Uploads */}
                        <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-4 sm:p-6">
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Recent Uploads</h2>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Resource</th>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {recentUploads && recentUploads.map((upload) => (
                                            <tr key={upload.id} className="hover:bg-gray-50">
                                                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{upload.username}</td>
                                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{upload.name}</td>
                                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{upload.department.name}</td>
                                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500"><span>
                                                    {(() => {
                                                        const uploadDate = new Date(upload.createdAt);
                                                        const now = Date.now();
                                                        const diff = now - uploadDate.getTime();

                                                        const seconds = Math.floor(diff / 1000);
                                                        const minutes = Math.floor(seconds / 60);
                                                        const hours = Math.floor(minutes / 60);
                                                        const days = Math.floor(hours / 24);

                                                        if (days > 0) {
                                                            return `${days} days ago`;
                                                        } else if (hours > 0) {
                                                            return `${hours} hours ago`;
                                                        } else if (minutes > 0) {
                                                            return `${minutes} minutes ago`;
                                                        } else {
                                                            return `${seconds} seconds ago`;
                                                        }
                                                    })()}
                                                </span></td>
                                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    <button className="text-blue-600 hover:text-blue-900 mr-3">
                                                        <a href={upload?.File || upload?.image} target="_blank" rel="noopener noreferrer">View</a>
                                                    </button>
                                                    <button className="text-blue-600 hover:text-blue-900 mr-3" onClick={() => { handleAccept(upload.id) }}>Accept</button>
                                                    <button className="text-red-600 hover:text-red-900" onClick={() => { handleReject(upload.id) }}>Reject</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Admin Tools */}
                        <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Admin Tools</h2>
                            <div className="space-y-3 sm:space-y-4">
                                <Link to='/departments' >
                                    <button className="w-full cursor-pointer flex items-center justify-between p-3 mb-3 sm:mb-4 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors">
                                        <span>Add New Department</span>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                        </svg>
                                    </button>
                                </Link>
                                <Link to='/resources' >
                                    <button className="w-full cursor-pointer flex items-center justify-between p-3 bg-purple-50 text-amber-500 rounded-lg hover:bg-purple-100 transition-colors">
                                        <span>Add New Resource</span>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                        </svg>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminDashboard;