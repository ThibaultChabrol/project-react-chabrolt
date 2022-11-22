import axios from "axios";
import React from 'react';
import Cards from "./component/Cards";
import Search from "./component/Search";

const baseURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=tomato";


const App = () => {
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
        });
    }, []);

    if (!post) return null;
    return (
        <div>
            <div class="header">
                <h1>recette de cuisine</h1>
                <Search meals={post}/>
                <div class="mainDiv">

                    {post.meals.map(meal =>
                        <div class="card">
                            <Cards meals={meal}/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default App;
