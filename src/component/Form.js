import React from 'react';

const Form = () => {
    const [article, setArticle] = React.useState("");
    const [pseudo, setPseudo] = React.useState("");

    const handleChangepseudo = (event) => {
        setPseudo(event.target.value);
    };

    const handleChangearticle = (event) => {
        setArticle(event.target.value);
    };
    const handleSubmit = (event) => {
        // prevents the submit button from refreshing the page
        event.preventDefault();
        console.log(article);
        console.log(pseudo);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        name="pseudo"
                        placeholder="Name"
                        value={pseudo}
                        onChange={handleChangepseudo}
                    />
                </div>
                <div>
                    <textarea
                        name="article"
                        placeholder="Article"
                        value={article} cols="40" rows="5"
                        onChange={handleChangearticle}
                    />

                </div>
                <button>Publiez l'article</button>
            </form>
        </div>
    );
};

export default Form;