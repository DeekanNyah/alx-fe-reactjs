import { useParams, Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipes = useRecipeStore((state) => state.recipes);
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <Link to={`/edit/${recipe.id}`}>Edit</Link>
      <DeleteRecipeButton recipeId={recipe.id} />
      <br />
      <Link to="/">Back to List</Link>
    </div>
  );
};

export default RecipeDetails;
