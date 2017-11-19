import React from "react";
import Timer from "./timer";
import Navigation from "./navigation";

const Header = () => (
    <div>
        <h4>RND Blog</h4>
        <Timer interval="1000" />
        <nav>
            <Navigation />
        </nav>
    </div>
);

export default Header;
