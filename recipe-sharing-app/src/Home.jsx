// src/Home.jsx
import React from 'react';
import RecipeList from './RecipeList';
import SearchBar from './components/SearchBar';

const Home = () => {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <SearchBar />
      <RecipeList />
    </div>
  );
};

export default Home;
