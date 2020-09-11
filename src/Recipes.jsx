import React, {useEffect, useState} from 'react';
import Food from './Food';


const App = () => {

    const APP_ID = "641c66a8";
    const APP_KEY = "c90bb15aa14946fb030537e55c23a796";

    
   const [food, setFood] = useState([]);
   const [search, setSearch] = useState('');
   const [query, setQuery] = useState(`chicken`)


    useEffect(()=> {
        getRecipes();
    },[query]);

    const getRecipes = async ()=> {
        const response = await fetch(
            `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
            );
        const data = await response.json();
        setFood(data.hits);
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
        <div>
            <form onSubmit={getSearch} className="search-form">
                <input 
                className="search-bar"
                type="text" value={search} 
                onChange={updateSearch}  />
              <button  className="search-button" type="submit" >Search</button>
            </form>
            {food.map(food =>(
                <Food  
                key = {food.recipe.label}
                title = {food.recipe.label}
                calories ={food.recipe.calories}
                image = {food.recipe.image}
                />
            ))}
        </div>
    )

}


export default App;