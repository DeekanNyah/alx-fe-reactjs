import React, { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';

const RecommendationsList = () => {
  const generate = useRecipeStore((state) => state.generateRecommendations);
  const recs = useRecipeStore((state) => state.recommendations);

  useEffect(() => {
    generate();
  }, [generate]);

  return (
    <div>
      <h2>Recommended Recipes</h2>
      {recs.length === 0 ? (
        <p>No recommendations found.</p>
      ) : (
        recs.map((r) => (
          <div key={r.id}>
            <h3>{r.title}</h3>
            <p>{r.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;
