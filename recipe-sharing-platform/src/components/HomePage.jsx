import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";   // <-- add this

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error("Error loading recipes:", err));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Recipe Sharing Platform
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover rounded-t-2xl"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-600">{recipe.summary}</p>

              {/* Use Link instead of button */}
              <Link
                to={`/recipe/${recipe.id}`}
                className="mt-3 inline-block text-indigo-600 hover:underline"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
