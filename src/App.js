import axios from "axios";
import React from 'react';
import Cards from "./component/Cards";

const baseURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";


const App = () => {
    const [post, setPost] = React.useState(null);
    const [search, setSearch] = React.useState(null);

    React.useEffect(() => {
        {
            axios.get(baseURL + search).then((response) => {
                setPost(response.data);
            });
        }
    }, [search]);


    if (!post) return null;
    return (
        <div>
            <div className="header">
                <h1>recette de cuisine</h1>
                <input type="text" name="searchBar" id="searchBar"
                       placeholder="taper le nom d'un aliment (en anglais)"
                       onChange={(e) => setSearch(e.target.value)}/>
                <div className="mainDiv">

                    {post.meals.map(meal =>
                        <div className="card">
                            <Cards meals={meal}/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default App;
