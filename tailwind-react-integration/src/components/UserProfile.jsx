import React from "react";

export default function UserProfile() {
  return (
    <div className="container mx-auto sm:p-4 md:p-8 max-w-xs md:max-w-sm bg-white rounded-lg shadow">
      <div className="flex flex-col items-center">
        <img
          src="https://via.placeholder.com/150"
          alt="User"
          className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full object-cover"
        />
        <h1 className="mt-4 text-sm md:text-xl font-bold">
          John Doe
        </h1>
        <p className="text-gray-600 text-sm md:text-xl text-center">
          Software Developer at Example Company
        </p>
      </div>
    </div>
  );
}
