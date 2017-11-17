import React from "react";
import { Link } from "react-router-dom";

import { BASE_URL } from "./../../constants";

class PostsByAuthor extends React.Component {
    constructor(props) {
        super(props);
        this.state = { posts: [] };
    }

    componentDidMount() {

        const userId = this.props.userId;

        fetch(`${BASE_URL}/posts?userId=${userId}`)
            .then((response) => response.json())
            .then((posts) => {
                this.setState({ posts });
            }).catch(error => {
                console.log("Fetching author posts failed: " + error.message);
            });
    }

    render() {
        const posts = this.state.posts;

        if (posts.length === 0) {
            return <p>Loading author posts</p>;
        }

        return (
            <div>
                {posts.slice(0, 3).map((post) => (
                    <Link to={`/posts/${post.id}`} key={post.id}>
                        <h5 >{post.title}</h5>
                    </Link>
                )
                )}
            </div>
        );
    }
}

export default PostsByAuthor;
