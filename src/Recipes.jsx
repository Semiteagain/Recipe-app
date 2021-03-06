import React, {useEffect, useState} from 'react';
import Food from './Food';
import './index.css'


const App = () => {

    const APP_ID = "641c66a8";
    const APP_KEY = "c90bb15aa14946fb030537e55c23a796";

    
   const [recipes, setRecipes] = useState([]);
   const [search, setSearch] = useState(" ");
   const [query, setQuery] = useState('chicken')


    useEffect(()=> {
        getRecipes();
    },[query]);

    const getRecipes = async () => {
        const response = await fetch(
            `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
            );
        const data = await response.json();
        setRecipes(data.hits);
        console.log(data.hits)
    };
    
    const updateSearch = e => {
        setSearch(e.target.value);
       
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }





    return(
        <div className="RCP">
            <form onSubmit={getSearch} className="search-form">
                <input 
                className="search-bar"
                type="text" 
                value={search} 
                onChange={updateSearch}  />
              <button  className="search-button" type="submit">
                  Search
             </button>
            </form>
            <div className="food">
            {recipes.map(recipes =>(
                <Food  
                key = {recipes.recipe.label}
                title = {recipes.recipe.label}
                calories ={recipes.recipe.calories}
                image = {recipes.recipe.image}
                // ingredients = {recipes.recipe.ingredients}
                />
            ))}
            </div>
           
        </div>
    )

}


export default App;