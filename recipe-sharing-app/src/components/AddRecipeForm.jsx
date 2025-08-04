import React, { useState } from 'react';
import { useRecipeStore } from './recipeStore';
import { v4 as uuidv4 } from 'uuid';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const addRecipe = useRecipeStore((state) => state.addRecipe);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && ingredients) {
      addRecipe({ id: uuidv4(), title, ingredients });
      setTitle('');
      setIngredients('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Recipe title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Ingredients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      ></textarea>
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
