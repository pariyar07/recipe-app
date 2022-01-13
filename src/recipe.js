import React from 'react';
import './App.css'

const Recipe = ({title, calorie, image, ingredients}) => {
    return (
        <div className='container'>
            <h1 className="title">{title}</h1>
            <ol className="list-ol">
                {ingredients.map(ingredient => (
                    <li className="list-li">
                        - {ingredient.text}
                    </li>))
                }
            </ol>
            <p className="calorie">Calories - {calorie}</p>
            <img src={image} alt="" className="food-image"/>
        </div>
    );
}

export default Recipe;