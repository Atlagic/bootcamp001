import React from "react";
import Timer from "./timer";
import {Link} from "react-router-dom";

const Header = function () {
    return (
        <div>
            <h1>RND Blog</h1>
            <Timer interval="1000" />
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
            </nav>

        </div>
    );
};

export default Header;
