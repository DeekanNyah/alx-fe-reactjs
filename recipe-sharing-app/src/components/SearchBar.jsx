import React from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const searchQuery = useRecipeStore(state => state.searchQuery);
  const setSearchQuery = useRecipeStore(state => state.setSearchQuery);

  return (
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search recipes..."
    />
  );
};

export default SearchBar;
