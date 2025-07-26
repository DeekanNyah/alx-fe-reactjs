import { useState } from "react";
import { useRecipeStore } from "../store/recipeStore";

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);

  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && ingredients) {
      addRecipe({ name, ingredients });
      setName("");
      setIngredients("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Recipe</h2>
      <input
        type="text"
        placeholder="Recipe Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Ingredients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddRecipeForm;
