import React from 'react';
import axios from "axios";


const Form = ({post}) => {
    const [content, setContent] = React.useState("");
    const [pseudo, setPseudo] = React.useState("");
    const baseURL = "http://localhost:3003/articles";

    const handleChangePseudo = (event) => {
        setPseudo(event.target.value);
    };

    const handleChangeContent = (event) => {
        setContent(event.target.value);
    };
    const handleSubmit = (event) => {

        const article = {
            "author": pseudo,
            "content": content,
            "date": Date.now(),
            "id": post.at(-1).id + 1,
        }

        axios.post(baseURL, article).then(response =>
            window.location.reload()
        )
        event.preventDefault();

    };
    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        name="pseudo"
                        placeholder="Name"
                        value={pseudo}
                        onChange={handleChangePseudo}
                    />
                </div>
                <div>
                    <textarea
                        name="article"
                        placeholder="Article"
                        value={content} cols="40" rows="5"
                        onChange={handleChangeContent}
                    />

                </div>
                <button>Publiez l'article</button>
            </form>
        </div>
    );
};

export default Form;