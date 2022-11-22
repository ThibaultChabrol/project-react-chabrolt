import React from 'react';
const Cards = ({meals}) => {
    console.log(meals)
    return (
        <div>
            <h1>{meals.strMeal}</h1>
            <h2> origin: {meals.strArea}</h2>
            <img src={meals.strMealThumb} alt=""/>
            <p>{meals.strInstructions}</p>
        </div>
    );
};

export default Cards;