"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface ProfileData {
  avatar: string;
  name: string;
  email: string;
  phone: string;
}
const Profile = () => {
  

  // Initialize form data from local storage or default values
  const [formData, setFormData] = useState<ProfileData>({
    avatar: 'https://via.placeholder.com/150',
    name: 'Son Nguyen',
    email: 'nguyenson2@gmail.com',
    phone: '+134345',
  });
  const [displayData, setDisplayData] = useState<ProfileData | null>(null);
  const router = useRouter();
  // Load initial data from local storage
  useEffect(() => {
    const savedData = localStorage.getItem('profileData');
    if (savedData) {
      const parsedData: ProfileData = JSON.parse(savedData);
      setFormData(parsedData);
      setDisplayData(parsedData);
    } else {
      // If no saved data, initialize with default values
      setDisplayData(formData);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate saving data
    localStorage.setItem('profileData', JSON.stringify(formData));
    setDisplayData(formData);

    // Optionally, you can display a success message here
    alert('Profile updated successfully');
  };

    const handleLogout = () => {
      // Handle logout logic, e.g., clear local storage or redirect
      localStorage.removeItem('profileData');
      alert('Logged out successfully');
      router.push('/login');
      window.location.reload();
    };
    

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-6xl flex">
        {/* Current Information Section */}
        <div className="w-1/2 p-6 border-r border-gray-300">
          <h1 className="text-2xl font-bold mb-4">Current Information</h1>
          {displayData ? (
          <div className="mb-4">
            <img
              src={displayData.avatar}
              alt="Avatar"
              className="w-32 h-32 rounded-full mb-4"
            />
            <p className="text-lg font-semibold">Name: {displayData.name}</p>
          </div>
          ) : (
            <p className="text-lg text-gray-600">No information available. Save your changes to see them here.</p>
          )}
         <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Logout
            </button>
        </div>

        {/* Edit Information Section */}
        <div className="w-1/2 p-6">
          <h1 className="text-2xl font-bold mb-4">Edit Information</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="avatar">
                Avatar
              </label>
              <div className="flex items-center">
                <img
                  src={formData.avatar}
                  alt="Avatar"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <input
                  type="text"
                  name="avatar"
                  value={formData.avatar}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;