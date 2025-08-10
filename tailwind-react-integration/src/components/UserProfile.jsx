// src/components/UserProfile.jsx
import React from 'react';

const UserProfile = ({ name, bio, image }) => {
  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col items-center text-center">
        <img
          src={image}
          alt={name}
          className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full object-cover mb-4"
        />
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">{name}</h1>
        <p className="text-sm sm:text-base lg:text-lg text-gray-600">{bio}</p>
      </div>
    </div>
  );
};

export default UserProfile;
