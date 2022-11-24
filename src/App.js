import React from 'react';
import Recettes from "./component/Recettes";
import Menu from "./component/Menu";
import Blog from "./component/Blog";
import {BrowserRouter, Routes, Route} from "react-router-dom";


const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Menu/>
                <Routes>
                    <Route path="Blog" element={<Blog/>}/>
                    <Route path="Recettes" element={<Recettes/>}/>
                </Routes>
            </BrowserRouter>

        </div>


    );
};
export default App;
