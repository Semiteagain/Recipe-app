import React from 'react';


const Food = ({title, calories, image, ingredients}) => {
    return(
        <div>
            <h1>{title}</h1>
            <ol>
            <li>{ingredients.text}</li>
            </ol>

            <p>{calories} </p>
            <img src={image} alt=""/>
        </div>
    )
}

export default Food;