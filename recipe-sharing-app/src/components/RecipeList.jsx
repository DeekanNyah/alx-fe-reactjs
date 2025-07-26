import { useRecipeStore } from "../store/recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No recipes added yet.</p>
      ) : (
        <ul>
          {recipes.map((recipe, index) => (
            <li key={index}>
              <h3>{recipe.name}</h3>
              <p>{recipe.ingredients}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;
