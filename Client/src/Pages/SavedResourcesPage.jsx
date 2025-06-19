import React, { useState, useEffect } from 'react';
import { FiDownload, FiSave, FiTrash2, FiArrowLeft } from 'react-icons/fi';
import fileDownload from 'js-file-download';
import Navbar from '../components/Navbar';
import axiosInstance from '../lib/axios';

const SavedResourcesPage = () => {
  const [savedItems, setSavedItems] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const fetchSavedItems = async () => {

      try {
        // Simulate API call
        const response = await axiosInstance.get("/resources/getSavedResources")

        if (response.status === 200) {
          // console.log(response.data.data);
          setSavedItems(response.data.data)
          setLoading(false);
        }

      } catch (error) {
        console.error("Failed to fetch saved items:", error);
        setLoading(false);
      }
    };

    fetchSavedItems();
  }, []);



  const handleDownload = async (resourceId, fileUrl, imageUrl) => {
    // Prefer fileUrl if available, otherwise use imageUrl
    const url = fileUrl || imageUrl;
    if (!url) {
      console.error("No file or image URL provided for download.");
      return;
    }
    // Extract filename from URL or use a default
    const filename = url.split('/').pop() || "resource";
    fetch(url)
      .then(res => res.blob())
      .then(blob => {
        fileDownload(blob, filename);
      })
      .catch(err => {
        console.error("Download failed:", err);
      });

    const activityType = "DOWNLOAD";

    const response = await axiosInstance.post(`/activities/create_activity/${resourceId}`, { activityType })


    if (response.status === 201) {
      // console.log("Recent Download activity : ", response.data.data);
    }

  };

  const handleRemove = async (itemId) => {
    const response = await axiosInstance.delete(`/activities/delete_activity/${itemId}`)

    if (response.status === 200) {
      setSavedItems(savedItems.filter(item => item.id !== itemId));
      // console.log("Resource Unsaved : ",response.data.data);
    }

  };

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
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex items-center mb-6">
          <button
            onClick={() => window.history.back()}
            className="mr-4 p-2 rounded-full hover:bg-gray-100"
          >
            <FiArrowLeft className="text-gray-600" />
          </button>
          <h1 className="text-2xl font-bold text-gray-800">Saved Resources</h1>
          <span className="ml-auto bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
            {savedItems ? savedItems.length : 0} items
          </span>
        </div>

        {savedItems && savedItems.length === 0 ? (
          <div className="text-center py-12">
            <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <FiSave className="text-gray-400 text-3xl" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">No saved items yet</h3>
            <p className="mt-1 text-gray-500">Resources you save will appear here</p>
          </div>
        ) : (
          <div className="bg-white shadow rounded-lg sm:overflow-scroll md:overflow-hidden lg:overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Resource</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Saved On</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {savedItems && savedItems.map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap ">
                      <div className="font-medium text-gray-900">{item.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        {item.image ? "Image" : "File"}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(item.savedAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => handleDownload(item.id, item.File, item.image)}
                        className="mr-3 text-blue-600 hover:text-blue-900"
                      >
                        <FiDownload className="inline mr-1" /> Download
                      </button>
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <FiTrash2 className="inline mr-1" /> Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default SavedResourcesPage;