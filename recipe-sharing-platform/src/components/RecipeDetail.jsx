// src/components/RecipeDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams();

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Recipe Detail for ID: {id}</h1>
      <p className="text-gray-700">
        This is where the detailed recipe info will go.
      </p>
    </div>
  );
}

export default RecipeDetail;
