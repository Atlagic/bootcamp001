// This file is only for demonstrational purposes how
// we can implement all logic in one file and without 
// creating components

import React from "react";
import ReactDOM from "react-dom";
import "babel-polyfill";

import App from "./components/app";
import data from "./data";

ReactDOM.render(
    <div>
        <header>
            <h1>Blog</h1>
        </header>
        <main>
            {data.posts.map(post => (
                <div>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <hr />
                </div>
            ))}
        </main>
        <footer>
            <span>Copyright (C) 2017 by BIT</span>
        </footer>
    </div>,
    document.getElementById("app")
);
