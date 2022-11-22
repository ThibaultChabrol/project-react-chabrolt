import axios from "axios";
import React from 'react';

const baseURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=tomato";


const App = () => {
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
            console.log(response.data);
        });
    }, []);

    if (!post) return null;
    return (
        <div>
            <h1>{post.meals[3].strMeal}</h1>
        </div>
    );
};
export default App;
