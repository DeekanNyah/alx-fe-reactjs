// src/components/RecipeList.jsx
import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import { useState } from 'react';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Recipes</h2>
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '1rem', padding: '0.5rem', width: '100%' }}
      />
      {filteredRecipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        <ul>
          {filteredRecipes.map((recipe) => (
            <li key={recipe.id}>
              <Link to={`/edit/${recipe.id}`}>{recipe.title}</Link>
              <button
                onClick={() => deleteRecipe(recipe.id)}
                style={{ marginLeft: '1rem' }}
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
