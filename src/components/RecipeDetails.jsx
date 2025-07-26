// src/components/RecipeDetails.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore(state =>
    state.recipes.find(r => r.id === id)
  );

  const [editing, setEditing] = useState(false);

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      {editing ? (
        <EditRecipeForm recipe={recipe} onDone={() => setEditing(false)} />
      ) : (
        <button onClick={() => setEditing(true)}>Edit</button>
      )}

      <DeleteRecipeButton id={recipe.id} onDelete={() => navigate('/')} />
    </div>
  );
};

export default RecipeDetails;
