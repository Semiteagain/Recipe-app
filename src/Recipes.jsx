import React, {useEffect, useState} from 'react';
import Food from './Food';


const App = () => {

    const APP_ID = "641c66a8";
    const APP_KEY = "c90bb15aa14946fb030537e55c23a796";

    
   const [food, setFood] = useState([]);


    useEffect(   ()=>{
        getRecipes();
    },[]);

    const getRecipes = async ()=> {
        const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
        const data = await response.json();
        setFood(data.hits);
        console.log(data.hits)
    };
    


    return(
        <div>
            <form className="search-form">
                <input className="search-bar" type="text"/>
              <button  className="search-button" type="submit" >Search</button>
            </form>
            {food.map(food =>(
                <Food  
                title = {recipe.label}
                calories ={recipe.calories}
                image = {recipe.image}
                />
            ))}
        </div>
    )

}


export default App;