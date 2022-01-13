import React, { useState, useEffect } from 'react';
import Recipe from './recipe'
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken")

  useEffect( () => {
    getRecipe()
  }, [query])

  function getRecipe() {
    fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=fcef70b1&app_key=452da94233cb6d4177e3bc0e9e97ac96`)
      .then(res => res.json())
      .then((data) => 
      setRecipes(data.hits));
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }
  
  const updateQuery = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <form onSubmit={updateQuery} className="search-form">
        <input type="text" className="search-bar" onChange={updateSearch} placeholder="Search Food"/>
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.shareAs}
            title={recipe.recipe.label}
            calorie={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
