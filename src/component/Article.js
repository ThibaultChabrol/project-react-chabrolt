import React from 'react';
import axios from "axios";


const Article = ({articles}) => {
    console.log(articles)


    const handleClick = (event) => {
        axios.delete(`http://localhost:3003/articles/${articles.id}`)
            .then(() => console.log("delete succes"));
        event.preventDefault();
    };

    return (
        <div>
            <h1>{articles.author}</h1>
            <p>{articles.content}</p>
            <button onClick={handleClick}>Supprimer</button>
            <button>Editer</button>
        </div>
    );
};

export default Article;