import axios from "axios";
import React from 'react';
import Cards from "./Cards";

const baseURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";


const Recettes = () => {
    const [post, setPost] = React.useState(null);
    const [search, setSearch] = React.useState("");

    React.useEffect(() => {
        {
            axios.get(baseURL + search).then((response) => {
                setPost(response.data.meals);
            });
        }
    }, [search]);


    if (!post) {
        return (
            <div className="header">
                <h1>recette de cuisine</h1>
                <input type="text" name="searchBar" id="searchBar"
                       placeholder="taper le nom d'un aliment (en anglais)"
                       value={search}
                       onChange={(e) => setSearch(e.target.value)}/>
            </div>
        )
    }
    return (
        <div>
            <div className="header">
                <h1>recette de cuisine</h1>
                <input type="text" name="searchBar" id="searchBar"
                       placeholder="taper le nom d'un aliment (en anglais)"
                       value={search}
                       onChange={(e) => setSearch(e.target.value)}/>
            </div>
            <div className="mainDiv">
                {post.map(meal =>
                    <div className="card">
                        <Cards meals={meal}/>
                    </div>
                )}
            </div>

        </div>
    );
};
export default Recettes;
