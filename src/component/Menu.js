import React from 'react';
import {NavLink } from "react-router-dom";


const Menu = () => {
    let activeStyle = {
        textDecoration: "underline",
    };

    let activeClassName = "underline";
    return (
        <div>
            <nav className="navbar background">
                <ul className="nav-list">
                    <li>
                        <NavLink
                            to="Recettes"
                            style={({isActive}) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            Recettes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="Blog"
                            className={({isActive}) =>
                                isActive ? activeClassName : undefined
                            }
                        >
                            Blog
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Menu;