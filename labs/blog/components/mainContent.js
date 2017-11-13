import React from "react";

import Post from "./post";
import { posts } from "../data";

const MainContent = function () {
    return (
        <main>
            {posts.map(post => {
                return <Post post={post} key={post.id} />;
            })}
        </main>
    );
};

export default MainContent;
