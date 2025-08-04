import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const query = useRecipeStore(state => state.searchQuery).toLowerCase();

  const filtered = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(query)
  );

  return (
    <div>
      <h2>All Recipes</h2>
      {filtered.map(recipe => (
        <div key={recipe.id}>
          <Link to={`/recipes/${recipe.id}`}><h3>{recipe.title}</h3></Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
