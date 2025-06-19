import React, { useCallback, useState } from 'react';
import Navbar from '../components/Navbar';
import { NavLink } from 'react-router-dom';
import { useAuthUserStore } from '../store/authUserStore';
import axiosInstance from '../lib/axios';
import { useEffect } from 'react';
import { FiX } from 'react-icons/fi';
import { FiEdit2 } from 'react-icons/fi';

const DepartmentsPage = () => {

  const { isAdmin } = useAuthUserStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('')


  const [departments, setDepartments] = useState([]);
  const [formData, setFormData] = useState({});

  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(true)

  const onClose = () => {
    setIsModalOpen(false);
    setFormData({ name: '' });
    setErrors({});
    setIsSubmitting(false);
  };

  const handleCreateDepartment = (newDepartmentData) => {
    // Handle the new department data (add to your state or make API call)
    try {
      const response = axiosInstance.post('/departments/create', newDepartmentData);
      if (response.status === 200) {
        console.log('Department created successfully:', response.data);
        setDepartments(prev => [...prev, response.data.data]); // Update departments state
        return;
      }
    } catch (error) {
      console.error('Error creating department:', error);
    }

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      console.log('Submitting:', { ...formData, file });

      setTimeout(() => {
        handleCreateDepartment(formData); // Use the correct handler
        onClose(); // Close the modal
        setIsSubmitting(false);
        setFormData({ name: '' }); // Reset form data
      }, 1500);
    } catch (error) {
      console.error('Error creating department:', error);
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'name' && value.trim() === '') {
      setErrors(prev => ({ ...prev, name: 'Department name is required' }));
    } else {
      setErrors(prev => ({ ...prev, name: '' })); // Clear error if input
      // is valid
    }
  };

  const handleDeleteDepartment = async (deptId) => {

    try {
      const response = await axiosInstance.delete(`/departments/${deptId}`);
      if (response.status === 200) {
        setDepartments(prev => prev.filter(dept => dept.id !== deptId));
      }
    } catch (error) {
      console.error('Error deleting department:', error);
    }

  };

  const handlerenameDepartment = async (deptId) => {
    const newName = prompt("Enter new department name:");
    if (newName) {
      try {
        const response = await axiosInstance.put(`/departments/${deptId}`, { name: newName });
        if (response.status === 200) {
          setDepartments(prev => prev.map(dept => dept.id === deptId ? { ...dept, name: newName } : dept));
          console.log('Department renamed successfully:', response.data);
        }
      } catch (error) {
        console.error('Error renaming department:', error);
      }
    }
  };

  const handleSearch = async (req, res) => {
    try {

      console.log(searchQuery);


      const response = await axiosInstance.post("/departments/search", { searchQuery })

      if (response.status === 200) {
        setDepartments(response.data.data)
        console.log(response.data.data);
      }


    } catch (error) {
      console.error('Failed to fetch departments');
    }
  }

  useEffect(() => {
    const fetchDepartments = async () => {
      const response = await axiosInstance.get('/departments/all');
      if (response.status === 200) {

        setDepartments(response.data.data);
        setLoading(false)
        // Log the fetched departments

        console.log('Departments fetched successfully:', response.data.data);

      } else {
        console.error('Failed to fetch departments');
      }
    };
    if (!searchQuery) {
      fetchDepartments();
    }
  }, [searchQuery]);



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
      <div className="min-h-screen bg-gray-50 p-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">University Departments</h1>
            {isAdmin ? (
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-600 font-semibold text-white px-4 py-2 rounded-lg w-full sm:w-auto"
              >
                Create Department
              </button>
            ) : (
              <form
                onSubmit={e => {
                  e.preventDefault();
                  handleSearch();
                }}
                className="relative w-full sm:w-auto"
              >
                <input
                  type="text"
                  placeholder="Search departments..."
                  value={searchQuery || ""}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-64"
                />
                <svg
                  onClick={handleSearch}
                  className="w-5 h-5 text-gray-400 absolute left-3 top-2.5 cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </form>
            )}
          </div>

          {isModalOpen &&
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                {/* Modal Header */}
                <div className="flex items-center justify-between p-4 border-b">
                  <h2 className="text-xl font-bold text-gray-800">Create New Department</h2>
                  <button
                    onClick={onClose}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <FiX size={24} />
                  </button>
                </div>

                {/* Modal Body */}
                <div className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Department Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Department Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="e.g. Computer Science"
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                    </div>



                    {/* Form Actions */}
                    <div className="flex justify-end space-x-3 pt-4">
                      <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`px-4 py-2 rounded-md text-sm font-medium text-white ${isSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'}`}
                      >
                        {isSubmitting ? 'Creating...' : 'Create Department'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments && (departments.map((dept, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2 h-13">{dept.name}</h2>
                    <div className="btn flex">
                      {isAdmin &&
                        <button
                          className="flex items-center bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full hover:bg-yellow-200 transition"
                          onClick={() => { handlerenameDepartment(dept.id) }}
                          disabled={!isAdmin}
                          title="Rename Department"
                        >
                          <FiEdit2 className="mr-1" size={14} />
                        </button>
                      }
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Active</span>
                    </div>
                  </div>
                  <div className="flex justify-between mt-4 text-sm text-gray-600">
                    <span>{dept._count.courses} courses</span>
                    <span>{dept._count.resources} resources</span>
                  </div>
                  <NavLink to="/resources" className="block mt-4 text-blue-600 hover:underline">
                    <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
                      View Resources
                    </button>
                  </NavLink>
                  {isAdmin &&
                    <button onClick={() => handleDeleteDepartment(dept.id)} className="mt-2 w-full bg-red-700 hover:bg-red-800 text-white py-2 px-4 rounded-lg transition-colors">
                      Delete Department
                    </button>
                  }
                </div>
              </div>)
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DepartmentsPage;