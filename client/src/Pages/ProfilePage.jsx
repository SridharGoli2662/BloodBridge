import React, { useState } from "react";
import Navbar from "../Components/Navbar";

export default function ProfilePage() {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    bloodGroup: "O+",
    age: 28,
    phone: "+1 234 567 8900",
    city: "New York",
    state: "NY",
    address: "123 Main Street, Apt 4B",
    pincode: "10001",
    totalDonations: 5,
    lastDonation: "2024-01-15",
    nextEligible: "2024-07-15",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleEdit = () => {
    setIsEditing(true);
    setEditedUser({ ...user });
  };

  const handleSave = () => {
    setUser(editedUser);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedUser({ ...user });
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <Navbar />
      <div
        style={{ backgroundColor: "#FDDAD4", minHeight: "100vh" }}
        className="flex items-center justify-center py-12 mt-3"
      >
        <div className="w-full max-w-4xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-red-800 mb-4">My Profile</h1>
            <p className="text-xl text-gray-700">
              Manage your donor profile and preferences
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* User Image Section */}
              <div className="lg:col-span-1">
                <div className="text-center">
                  <div className="relative inline-block">
                    {/* image part */}
                    <div className="w-48 h-48 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      {/* profile image */}
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-red-800 mb-2">
                    {user.name}
                  </h2>
                  <p className="text-gray-600 mb-4">Blood Donor</p>
                  <div className="bg-red-50 rounded-lg p-4 mb-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-800 mb-1">
                        {user.totalDonations}
                      </div>
                      <p className="text-sm text-gray-600">Total Donations</p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      // Add your logout logic here
                      console.log("Logout clicked");
                    }}
                    className="w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition-colors font-semibold"
                  >
                    Logout
                  </button>
                </div>
              </div>

              {/* User Details Section */}
              <div className="lg:col-span-2">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-semibold text-red-800">
                    Personal Information
                  </h3>
                  {!isEditing ? (
                    <button
                      onClick={handleEdit}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                    >
                      Edit Profile
                    </button>
                  ) : (
                    <div className="space-x-2">
                      <button
                        onClick={handleSave}
                        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                      >
                        Save
                      </button>
                      <button
                        onClick={handleCancel}
                        className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Basic Information */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="name"
                          value={editedUser.name}
                          onChange={handleInputChange}
                          className="w-full border border-gray-400 text-black text-sm rounded-lg focus:ring-red-500 focus:border-red-500 p-2.5 bg-white"
                        />
                      ) : (
                        <p className="text-gray-900 font-medium">{user.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      {isEditing ? (
                        <input
                          type="email"
                          name="email"
                          value={editedUser.email}
                          onChange={handleInputChange}
                          className="w-full border border-gray-400 text-black text-sm rounded-lg focus:ring-red-500 focus:border-red-500 p-2.5 bg-white"
                        />
                      ) : (
                        <p className="text-gray-900">{user.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Blood Group
                      </label>
                      <p className="text-red-800 font-bold text-lg">
                        {user.bloodGroup}
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Age
                      </label>
                      {isEditing ? (
                        <input
                          type="number"
                          name="age"
                          value={editedUser.age}
                          onChange={handleInputChange}
                          className="w-full border border-gray-400 text-black text-sm rounded-lg focus:ring-red-500 focus:border-red-500 p-2.5 bg-white"
                        />
                      ) : (
                        <p className="text-gray-900">{user.age} years</p>
                      )}
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      {isEditing ? (
                        <input
                          type="tel"
                          name="phone"
                          value={editedUser.phone}
                          onChange={handleInputChange}
                          className="w-full border border-gray-400 text-black text-sm rounded-lg focus:ring-red-500 focus:border-red-500 p-2.5 bg-white"
                        />
                      ) : (
                        <p className="text-gray-900">{user.phone}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City
                      </label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="city"
                          value={editedUser.city}
                          onChange={handleInputChange}
                          className="w-full border border-gray-400 text-black text-sm rounded-lg focus:ring-red-500 focus:border-red-500 p-2.5 bg-white"
                        />
                      ) : (
                        <p className="text-gray-900">{user.city}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        State
                      </label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="state"
                          value={editedUser.state}
                          onChange={handleInputChange}
                          className="w-full border border-gray-400 text-black text-sm rounded-lg focus:ring-red-500 focus:border-red-500 p-2.5 bg-white"
                        />
                      ) : (
                        <p className="text-gray-900">{user.state}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pincode
                      </label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="pincode"
                          value={editedUser.pincode}
                          onChange={handleInputChange}
                          className="w-full border border-gray-400 text-black text-sm rounded-lg focus:ring-red-500 focus:border-red-500 p-2.5 bg-white"
                        />
                      ) : (
                        <p className="text-gray-900">{user.pincode}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address
                  </label>
                  {isEditing ? (
                    <textarea
                      name="address"
                      value={editedUser.address}
                      onChange={handleInputChange}
                      rows="3"
                      className="w-full border border-gray-400 text-black text-sm rounded-lg focus:ring-red-500 focus:border-red-500 p-2.5 bg-white"
                    />
                  ) : (
                    <p className="text-gray-900">{user.address}</p>
                  )}
                </div>

                {/* Donation History */}
                <div className="mt-8">
                  <h4 className="text-xl font-semibold text-red-800 mb-4">
                    Donation History
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-red-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-red-800 mb-1">
                        {user.totalDonations}
                      </div>
                      <p className="text-sm text-gray-600">Total Donations</p>
                    </div>
                    <div className="bg-red-50 rounded-lg p-4 text-center">
                      <div className="text-lg font-semibold text-red-800 mb-1">
                        {user.lastDonation}
                      </div>
                      <p className="text-sm text-gray-600">Last Donation</p>
                    </div>
                    <div className="bg-red-50 rounded-lg p-4 text-center">
                      <div className="text-lg font-semibold text-red-800 mb-1">
                        {user.nextEligible}
                      </div>
                      <p className="text-sm text-gray-600">Next Eligible</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
