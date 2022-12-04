import React from 'react';
import axios from "axios";


const Article = ({article}) => {
    console.log(article)


    const handleClick = (event) => {
        axios.delete(`http://localhost:3003/articles/posts/${article.id}`)
            .then(() => console.log('delete successfull'));
        event.preventDefault();
    };

    return (
        <div>
            <h1>{article.author}</h1>
            <p>{article.content}</p>
            <button onClick={handleClick}>Supprimer</button>
            <button>Editer</button>
        </div>
    );
};

export default Article;