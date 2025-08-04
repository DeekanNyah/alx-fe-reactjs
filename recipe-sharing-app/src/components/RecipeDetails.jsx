import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipes = useRecipeStore(state => state.recipes);
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const updateRecipe = useRecipeStore(state => state.updateRecipe);

  const recipe = recipes.find(r => r.id === id);
  const [title, setTitle] = useState(recipe?.title || '');
  const [description, setDescription] = useState(recipe?.description || '');

  const handleUpdate = () => {
    updateRecipe({ id, title, description });
    navigate('/');
  };

  const handleDelete = () => {
    deleteRecipe(id);
    navigate('/');
  };

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div>
      <h2>Edit Recipe</h2>
      <input value={title} onChange={e => setTitle(e.target.value)} />
      <textarea value={description} onChange={e => setDescription(e.target.value)} />
      <button onClick={handleUpdate}>Save Changes</button>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={() => navigate('/')}>Back to Recipes</button>
    </div>
  );
};

export default RecipeDetails;
