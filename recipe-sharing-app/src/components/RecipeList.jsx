import React from "react";
import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  return (
    <div>
      <h2>All Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes added yet.</p>
      ) : (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id} style={{ marginBottom: "1rem" }}>
              <strong>{recipe.title}</strong>
              <p>{recipe.description}</p>
              <button onClick={() => alert("View not implemented yet")}>
                View
              </button>
              <button onClick={() => alert("Edit not implemented yet")}>
                Edit
              </button>
              <button
                onClick={() => deleteRecipe(recipe.id)}
                style={{ color: "red" }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;
