import React from "react";

import { BASE_URL } from "./../../constants"; 
import PostPreview from "./postPreview";

class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { posts: null };
    }

    componentDidMount() {
        fetch(`${BASE_URL}/posts`)
            .then((response) => response.json())
            .then((posts) => {
                this.setState({ posts });
            }).catch(error => {
                console.log("Fetching posts failed: " + error.message);
            });
    }

    render() {
        if (!this.state.posts) {
            return (
                <div className="center-align">
                    <h4>Loading posts...</h4>
                </div>
            );
        }

        return (
            <div>
                <h5>All Blog posts</h5>
                {this.state.posts.map((post) => {
                    return <PostPreview post={post} key={post.id} />;
                })}
            </div>
        );
    }
}

export default PostList;
