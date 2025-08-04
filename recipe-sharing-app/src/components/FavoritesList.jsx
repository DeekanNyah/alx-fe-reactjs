import React from 'react';
import { useRecipeStore } from './recipeStore';

const FavoritesList = () => {
  const { recipes, favorites } = useRecipeStore();
  const favRecipes = recipes.filter((r) => favorites.includes(r.id));

  return (
    <div>
      <h2>My Favorites</h2>
      {favRecipes.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        favRecipes.map((r) => (
          <div key={r.id}>
            <h3>{r.title}</h3>
            <p>{r.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;
