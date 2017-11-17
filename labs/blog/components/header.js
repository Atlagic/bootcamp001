import React from "react";
import Timer from "./timer";
import {Link} from "react-router-dom";

const handleTimeChange = function(date){
    console.log("tick..." + date);
};

const Header = function () {
    return (
        <div>
            <h1>RND Blog</h1>
            <Timer interval="1000" onTimeElapsed={handleTimeChange} />
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/compose'>Compose</Link></li>
                </ul>
            </nav>

        </div>
    );
};

export default Header;
