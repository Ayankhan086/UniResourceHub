import Navbar from '../components/Navbar';
import { NavLink } from 'react-router-dom';
import axiosInstance from '../lib/axios';
import { useEffect } from 'react';
import { useState } from 'react';

const UserDashboard = () => {

    const [uploadCount, setUploadCount] = useState('')
    const [downloadCount, setDownloadCount] = useState('')
    const [saveCount, setSaveCount] = useState('')

    const [recentActivity, setRecentActivity] = useState()

    useEffect(() => {
        const getUploadedResourceCount = async () => {
            const response = await axiosInstance.get("/activities/getuploadedActivity")

            if (response.status === 200) {
                setUploadCount(response.data.data[0]._count.type)
            }

        }
        getUploadedResourceCount();

        const getDownloadedResourceCount = async () => {
            const response = await axiosInstance.get("/activities/getdownloadedActivity")

            if (response.status === 200) {
                // console.log(response.data.data);
                setDownloadCount(response.data.data[0]._count.type)
            }

        }
        getDownloadedResourceCount();

        const getSavedResourceCount = async () => {
            const response = await axiosInstance.get("/activities/getsavedActivity")

            if (response.status === 200) {
                // console.log(response.data.data);
                setSaveCount(response.data.data[0]?._count.type)
            }

        }
        getSavedResourceCount();

        const recentUploads = async () => {
            const response = await axiosInstance.get("/activities/recentActivity")

            if (response.status === 200) {
                // console.log("Recents : ", response.data.data);
                setRecentActivity(response.data.data)
            }
        }
        recentUploads();

    }, [])



    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">My Dashboard</h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                        {/* Stats Cards */}
                        {[
                            { title: "Resources Uploaded", value: uploadCount || 0, color: "bg-blue-100 text-blue-800" },
                            { title: "Resources Downloaded", value: downloadCount || 0, color: "bg-green-100 text-green-800" },
                            { title: "Resources Saved", value: saveCount || 0, color: "bg-purple-100 text-purple-800" },
                        ].map((stat, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-md p-4 sm:p-6">
                                <h3 className="text-gray-600 mb-1 sm:mb-2 text-base sm:text-lg">{stat.title}</h3>
                                <p className={`text-2xl sm:text-3xl font-bold ${stat.color} pl-1 sm:pl-2`}>{stat.value}</p>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                        {/* Recent Activity */}
                        <div className="md:col-span-2 bg-white rounded-xl shadow-md p-4 sm:p-6">
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Recent Activity</h2>
                            <div className="space-y-4">
                                {recentActivity && recentActivity.map((activity, index) => (
                                    <div key={index} className="flex flex-col sm:flex-row items-start pb-4 border-b border-gray-100 last:border-0">
                                        <div className={`p-2 rounded-full mr-0 sm:mr-4 mb-2 sm:mb-0 ${activity.activityType === "UPLOAD" ? "bg-blue-100 text-blue-600" :
                                            activity.activityType === "DWONLOAD" ? "bg-green-100 text-green-600" :
                                                "bg-purple-100 text-purple-600"
                                            }`}>
                                            {activity.activityType === "UPLOAD" ? "↑" : activity.activityType === "DOWNLOAD" ? "↓" : "★"}
                                        </div>
                                        <div>
                                            <p className="font-medium">{activity.activityType} <span className="text-blue-600">{activity.name}</span></p>
                                            <span className="text-sm text-gray-500">
                                                {(() => {
                                                    const uploadDate = new Date(activity.createdAt);
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
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Quick Actions</h2>
                            <div className="space-y-2 sm:space-y-3">
                                <NavLink to="/resources">
                                    <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                                        <span>Upload New Resource</span>
                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                        </svg>
                                    </button>
                                </NavLink>
                                <NavLink to="/saveresourcepage">
                                    <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                                        <span>View Saved Items</span>
                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                                        </svg>
                                    </button>
                                </NavLink>
                                <NavLink to="/departments">
                                    <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                                        <span>Browse Departments</span>
                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                                        </svg>
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserDashboard;