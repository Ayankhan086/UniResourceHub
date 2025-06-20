import React, { useState } from 'react';
import { FiDownload, FiUpload, FiSave, FiSearch, FiX, FiDelete, FiEdit, FiMenu, FiCrosshair, FiEye } from 'react-icons/fi';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import axiosInstance from '../lib/axios'; // Adjust the import path as necessary
import fileDownload from 'js-file-download'
import { useAuthUserStore } from '../store/authUserStore';
import { useResourceStore } from '../store/resourcesStore';
import toast, { Toaster } from 'react-hot-toast';

const ResourcesPage = () => {
    // Sample data
    const [departments, setDepartments] = useState([]);
    const [selectedDept, setSelectedDept] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [showMenu, setShowMenu] = useState(false)

    const { isAdmin } = useAuthUserStore();
    const { savedResource, setSavedResource } = useState([]); // This looks like a typo, should be setSavedResources
    const [searchQuery, setSearchQuery] = useState('')
    const [resources, setResources] = useState([]);
    const [isRModalOpen, setIsRModalOpen] = useState(false);
    const [newResourceName, setNewResourceName] = useState("");
    const [file, setFile] = useState(null);
    const [image, setImage] = useState(null)
    const [isUploading, setIsUploading] = useState(false);
    const [newName, setNewName] = useState(''); // This state variable is declared but not used

    // Adding a state for loading, which you already have
    const [loading, setLoading] = useState(true);

    const handleOpenRModal = () => setIsRModalOpen(true);

    const handleCloseRModal = () => {
        setIsRModalOpen(false);
        setNewResourceName("");
        setFile(null);
        setImage(null);
    };

    const handleResourceSubmit = async (e) => {
        e.preventDefault();
        setIsUploading(true);

        const formData = new FormData();
        formData.append('name', newResourceName);
        formData.append('file', file);
        formData.append('image', image)

        try {
            const response = await axiosInstance.post(`/resources/upload/${selectedDept.id}`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            })

            if (response.status === 201) {
                setResources(prev => prev ? [...prev, response.data.data] : [response.data.data]); // Ensure prev is an array
                // console.log("Created Resource : ", response.data.data);
                setIsUploading(false);
                handleCloseRModal();
                setNewResourceName("");
                setFile(null);
                setImage(null);

                const activityType = "UPLOAD";
                const response2 = await axiosInstance.post(`/activities/create_activity/${response.data.data.id}`, { activityType });

                if (response2.status === 201) {
                    // console.log("Recent Upload activity : ", response.data.data);
                    toast.success("Your Resource Has Been Uploaded and is waiting for approval.");
                } else {
                    // console.log(response2.statusText);
                    toast.error("Failed to log upload activity.");
                }
            } else {
                // console.log("Something went wrong with resource upload.");
                toast.error("Failed to upload resource.");
            }
        } catch (error) {
            console.error("Error uploading resource:", error);
            toast.error("An error occurred during upload.");
        } finally {
            setIsUploading(false);
        }
    };

    const handleDownload = async (resourceId, fileUrl, imageUrl) => {
        // Prefer fileUrl if available, otherwise use imageUrl
        const url = fileUrl || imageUrl;
        if (!url) {
            console.error("No file or image URL provided for download.");
            toast.error("No file available for download.");
            return;
        }
        // Extract filename from URL or use a default
        const filename = url.split('/').pop() || "resource";
        try {
            const res = await fetch(url);
            const blob = await res.blob();
            fileDownload(blob, filename);

            const activityType = "DOWNLOAD";
            const response = await axiosInstance.post(`/activities/create_activity/${resourceId}`, { activityType });

            if (response.status === 201) {
                // console.log("Recent Download activity : ", response.data.data);
                toast.success("Resource downloaded successfully.");
            }
        } catch (err) {
            console.error("Download failed:", err);
            toast.error("Download failed. Please try again.");
        }
    };

    const handleSave = async (resourceId) => {
        const activityType = "SAVE";
        try {
            const response = await axiosInstance.post(`/activities/create_activity/${resourceId}`, { activityType });

            if (response.status === 201) {
                // console.log("Recent Save activity : ", response.data.data);
                toast.success("Resource saved successfully!");
            } else {
                // console.log(response.statusText);
                toast.error("Failed to save resource.");
            }
        } catch (error) {
            console.error("Error saving resource:", error);
            toast.error("An error occurred while saving.");
        }
    };

    const handleDelete = async (resourceId) => {
        try {
            const response = await axiosInstance.delete(`/resources/deleteresource/${resourceId}`);

            if (response.status === 200) {
                toast.success("Resource deleted successfully.");
                setResources((prev) => prev.filter(p => p.id !== resourceId));
            } else {
                toast.error("There is some error in deleting resource.");
            }
        } catch (error) {
            console.error("Error deleting resource:", error);
            toast.error("An error occurred during deletion.");
        }
    };

    const handleRename = async (resourceId) => {
        const newResourceNamePrompt = prompt("Please Enter New Name Here :");
        if (!newResourceNamePrompt) {
            toast.error("Rename cancelled. New name cannot be empty.");
            return;
        }
        try {
            // Assuming your backend expects an object with the new name
            const response = await axiosInstance.post(`/resources/update/${resourceId}`, { name: newResourceNamePrompt });

            if (response.status === 200) {
                setResources((prev) =>
                    prev.map((resource) =>
                        resourceId === resource.id ? { ...resource, name: newResourceNamePrompt } : resource
                    )
                );
                toast.success("Resource renamed successfully.");
            } else {
                toast.error("Failed to rename resource.");
            }
        } catch (error) {
            console.error("Error renaming resource:", error);
            toast.error("An error occurred during renaming.");
        }
    };

    useEffect(() => {
        const fetchDepartments = async () => {
            try {
                const response = await axiosInstance.get('/departments/all');
                if (response.status === 200) {
                    setDepartments(response.data.data);
                    setSelectedDept(response.data.data[0]); // Set the first department as selected
                    // console.log('Departments fetched successfully:', response.data.data);
                } else {
                    console.error('Failed to fetch departments');
                    toast.error("Failed to load departments.");
                }
            } catch (error) {
                console.error('Error fetching departments:', error);
                toast.error("An error occurred while fetching departments.");
            }
        };
        fetchDepartments();
    }, []);

    useEffect(() => {
        const getResourcesForSelectedDept = async () => {
            if (!selectedDept) {
                setLoading(false);
                return;
            }
            setLoading(true);
            try {
                const response = await axiosInstance.get(`/resources/getresources/${selectedDept.id}`, {
                    params: {
                        page: currentPage,
                        searchQuery: searchQuery // Pass search query to backend for server-side filtering
                    }
                });

                if (response.status === 200) {
                    setResources(response.data.data.resources);
                    setCurrentPage(response.data.data.page);
                    setTotalPages(response.data.data.totalPages);
                    // console.log(response.data.data);
                } else {
                    // console.log("Error fetching resources.");
                    toast.error("Failed to load resources.");
                }
            } catch (error) {
                console.error("Error fetching resources:", error);
                toast.error("An error occurred while fetching resources.");
            } finally {
                setLoading(false);
            }
        };

        getResourcesForSelectedDept();
    }, [selectedDept, currentPage, searchQuery]);


    const handleSearch = () => {
        // Trigger useEffect by updating searchQuery, which will refetch resources
        // The actual search logic is now integrated into getResourcesForSelectedDept
        setCurrentPage(1); // Reset to first page on new search
    };


    if (loading) {
        return (
            <>
                <Navbar />
                <div className="flex justify-center items-center h-screen bg-gray-50">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
            </>
        );
    }

    return (
        <>
            <Toaster position='top-right' />
            <Navbar />
            <div className="flex flex-col md:flex-row h-screen bg-gray-50">
                {/* Left Sidebar - Departments */}

                {showMenu ?
                    <div className="w-full md:w-64 bg-white border-b md:border-r border-gray-200 p-4 overflow-y-auto">
                        <h2 className="text-lg font-semibold mb-4 text-gray-800 flex justify-between mr-2 items-center">Departments <span onClick={() => { setShowMenu(!showMenu) }}><FiX className='inline cursor-pointer' size={25} /></span></h2>
                        <ul className="space-y-2">
                            {departments && departments.map((dept) => (
                                <li key={dept.id}>
                                    <button
                                        onClick={() => setSelectedDept(dept)}
                                        className={`w-full cursor-pointer flex justify-between items-center p-2 rounded-lg transition-colors ${selectedDept && selectedDept.id === dept.id ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'}`}
                                    >
                                        <span>{dept.name}</span>
                                        <div className="flex items-center">
                                            <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">{dept.publishedResourceCount}</span>
                                        </div>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div> :
                    <div className='bg-gray-300 md:block md:pt-3 lg:pt-4 sm:flex sm:items-center p-2'>
                        <button onClick={() => { setShowMenu(!showMenu) }}>
                            <FiMenu className='text-[18px] cursor-pointer' />
                        </button>
                    </div>
                }

                {/* Main Content */}
                <div className="flex-1 overflow-y-auto p-4 md:p-6">
                    {selectedDept ? (
                        <>
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                                <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-0">{selectedDept.name} Resources</h1>
                                <span className="text-sm text-gray-500">{selectedDept.publishedResourceCount} resources available</span>
                            </div>

                            <div className="flex flex-col items-center md:flex-row justify-end  md:items-center mb-4 gap-3">
                                <button
                                    className="flex items-center justify-center md:justify-end gap-2 p-3 hover:bg-gray-50 hover:border-black border-1 border-transparent rounded-lg transition-colors bg-amber-300 w-[250px] md:w-auto"
                                    onClick={handleOpenRModal}
                                >
                                    <span>Upload New Resource</span>
                                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                    </svg>
                                </button>
                                {!isAdmin && (
                                    <div className="relative  md:w-auto">
                                        <input
                                            type="text"
                                            placeholder="Search resources..."
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter') {
                                                    e.preventDefault();
                                                    handleSearch();
                                                }
                                            }}
                                            className="w-[250px] pl-12 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-gray-50 text-gray-800"
                                        />
                                        <div className="absolute inset-y-0 left-0 bottom-0 flex items-center pl-4 pointer-events-none">
                                            <FiSearch className="w-5 h-5 text-gray-500" />
                                        </div>
                                    </div>
                                )}
                            </div>

                            {isRModalOpen && (
                                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
                                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                                        <h2 className="text-xl font-bold mb-4">Upload Resource</h2>
                                        <form onSubmit={handleResourceSubmit}>
                                            <div className="mb-4">
                                                <label htmlFor="resourceName" className="block mb-1 font-medium">Resource Name</label>
                                                <input
                                                    id="resourceName"
                                                    type="text"
                                                    value={newResourceName}
                                                    placeholder="DSA Notes"
                                                    onChange={e => setNewResourceName(e.target.value)}
                                                    className="w-full border px-3 py-2 rounded"
                                                    required
                                                />
                                            </div>

                                            <div className="mb-6">
                                                {(!file && !image) ? (
                                                    <div className="flex flex-col gap-4 bg-indigo-50 p-4 rounded-lg shadow">
                                                        <div>
                                                            <label className="text-sm font-semibold text-indigo-700 mb-2 flex items-center gap-2">
                                                                <FiUpload className="text-indigo-500" />
                                                                Upload File
                                                            </label>
                                                            <label className="flex items-center gap-2 cursor-pointer bg-indigo-100 px-4 py-2 rounded hover:bg-indigo-200 border border-indigo-200 transition">
                                                                <span className="text-indigo-700 font-medium">Select File</span>
                                                                <input
                                                                    type="file"
                                                                    onChange={e => setFile(e.target.files[0])}
                                                                    className="hidden"
                                                                    required
                                                                />
                                                            </label>
                                                        </div>

                                                        <div className="flex items-center justify-center my-2">
                                                            <span className="text-xs text-indigo-400 font-bold px-2">OR</span>
                                                        </div>

                                                        <div>
                                                            <label className="text-sm font-semibold text-indigo-700 mb-2 flex items-center gap-2">
                                                                <FiUpload className="text-indigo-500" />
                                                                Upload Image
                                                            </label>
                                                            <label className="flex items-center gap-2 cursor-pointer bg-indigo-100 px-4 py-2 rounded hover:bg-indigo-200 border border-indigo-200 transition">
                                                                <span className="text-indigo-700 font-medium">Select Image</span>
                                                                <input
                                                                    type="file"
                                                                    accept="image/*"
                                                                    onChange={e => setImage(e.target.files[0])}
                                                                    className="hidden"
                                                                    required
                                                                />
                                                            </label>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="flex flex-col gap-2 bg-green-50 p-4 rounded-lg shadow">
                                                        <label className="text-sm font-semibold text-green-700 mb-2 flex items-center gap-2">
                                                            <FiUpload className="text-green-500" />
                                                            Selected File or Image
                                                        </label>
                                                        <div className="flex items-center bg-white px-4 py-2 rounded border border-green-200">
                                                            <span className="w-fit text-sm text-green-800">{file ? file.name : image?.name}</span>
                                                            <button
                                                                type="button"
                                                                onClick={() => { setFile(null); setImage(null); }}
                                                                className="ml-3 cursor-pointer bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-base hover:bg-red-700 transition"
                                                                title="Remove file"
                                                            >
                                                                <FiX />
                                                            </button>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="flex justify-end gap-2">
                                                <button
                                                    type="button"
                                                    onClick={handleCloseRModal}
                                                    className="px-4 py-2 bg-gray-200 rounded"
                                                    disabled={isUploading}
                                                >
                                                    Cancel
                                                </button>
                                                <button
                                                    type="submit"
                                                    className="px-4 py-2 bg-blue-600 text-white rounded flex items-center gap-2"
                                                    disabled={isUploading}
                                                >
                                                    {isUploading ? (
                                                        <>
                                                            <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                                                            </svg>
                                                            Uploading...
                                                        </>
                                                    ) : (
                                                        "Upload"
                                                    )}
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            )}

                            {/* Resources Table */}
                            <div className="rounded-lg overflow-x-auto shadow-md"> {/* Added overflow-x-auto and shadow-md for better appearance */}
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Resource Title</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Added</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {(selectedDept && resources) && resources.filter(prev => ((prev.publishStatus !== "WAITING_FOR_APPROVAL") && (prev.publishStatus !== "REJECTED"))).map((resource) => (
                                            <tr key={resource.id}>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="font-medium text-gray-900">{resource.name}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                                        {resource.image ? "Image" : "File"}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    <span>
                                                        {new Date(resource.createdAt).toLocaleDateString()}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex flex-wrap gap-2"> {/* Changed to flex-wrap for actions */}
                                                        <button className="flex cursor-pointer items-center px-3 py-1 bg-blue-50 text-blue-600  hover:bg-blue-100 text-sm hover:text-blue-900 mr-3">
                                                            <a className='flex cursor-pointer items-center px-3 py-1  bg-blue-50 text-blue-600  hover:bg-blue-100 text-sm hover:text-blue-900 mr-3 style-none' href={resource?.File || resource?.image} target="_blank" rel="noopener noreferrer"><FiEye className="mr-1 inline" size={14}/> View</a>
                                                        </button>
                                                        <button
                                                            onClick={() => handleDownload(resource.id, resource.File, resource.image)}
                                                            className="flex cursor-pointer items-center px-3 py-1 bg-blue-50 text-blue-600 rounded hover:bg-blue-100 text-sm"
                                                        >
                                                            <FiDownload className="mr-1" size={14} /> Download
                                                        </button>
                                                        <button
                                                            onClick={() => handleSave(resource.id)}
                                                            className="flex cursor-pointer items-center px-3 py-1 bg-green-50 text-green-600 rounded hover:bg-green-100 text-sm"
                                                        >
                                                            <FiSave className="mr-1" size={14} /> Save
                                                        </button>
                                                        {isAdmin &&
                                                            <>
                                                                <button
                                                                    onClick={() => handleDelete(resource.id)}
                                                                    className="flex cursor-pointer items-center px-3 py-1 bg-red-50 text-red-600 rounded hover:bg-red-100 text-sm"
                                                                >
                                                                    <FiDelete className="mr-1" size={14} /> Delete
                                                                </button>
                                                                <button
                                                                    onClick={() => handleRename(resource.id)}
                                                                    className="flex cursor-pointer items-center px-3 py-1 bg-yellow-50 text-yellow-600 rounded hover:bg-yellow-100 text-sm"
                                                                >
                                                                    <FiEdit className="mr-1" size={14} /> Rename
                                                                </button>
                                                            </>
                                                        }
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                        {resources.filter(prev => ((prev.publishStatus !== "WAITING_FOR_APPROVAL") && (prev.publishStatus !== "REJECTED"))).length === 0 && (
                                            <tr>
                                                <td colSpan="4" className="px-6 py-4 text-center text-gray-500">No resources found for this department.</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            {/* Pagination */}
                            <div className="flex flex-col md:flex-row justify-between items-center mt-4 space-y-2 md:space-y-0">
                                <span className="text-sm text-gray-600">
                                    Page {currentPage} of {totalPages}
                                </span>
                                <div className="flex space-x-2">
                                    <button
                                        className="px-3 cursor-pointer py-1 border rounded text-sm hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                        disabled={currentPage === 1}
                                    >
                                        Previous
                                    </button>
                                    <button
                                        className="px-3 cursor-pointer py-1 border rounded text-sm hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                        disabled={currentPage === totalPages}
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="flex justify-center items-center h-screen bg-gray-50">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default ResourcesPage;