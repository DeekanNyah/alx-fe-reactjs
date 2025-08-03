// src/components/RecipeDetails.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipes = useRecipeStore((state) => state.recipes);
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.instructions}</p>
      {/* Optional: EditRecipeForm here */}
      <DeleteRecipeButton recipeId={id} />
      <button onClick={() => navigate('/')}>Back to List</button>
    </div>
  );
};

export default RecipeDetails;
