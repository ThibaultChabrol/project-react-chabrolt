import React from 'react';
import axios from "axios";
import Form from "./Form";
import Article from "./Article";

const baseURL = "http://localhost:3003/articles";


const Blog = () => {
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        {
            axios.get(baseURL).then((response) => {
                setPost(response.data);
            });
        }
    }, []);
    console.log(post)
    return (
        <div>
            <Form post={post}/>
            <div>
                {post.map(article =>
                    <Article article={article}/>
                )}
            </div>


        </div>
    );
};

export default Blog;