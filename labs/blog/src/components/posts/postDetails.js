import React, { Component } from "react";

import { BASE_URL } from "./../../constants";
import AuthorPosts from "./postsByAuthor";

class PostDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: null,
            post: null,
            user: null
        };
    }

    loadData(postId) {
        fetch(`${BASE_URL}/posts/${postId}`)
            .then(response => response.json())
            .then(post => {
                this.setState({ post });
                // Now we have post and from post we have userId
                // So we can fetch user posts with userId
                const { userId } = post;
                return fetch(`${BASE_URL}/users/${userId}`);
            })
            .then(response => response.json())
            .then(user => {
                this.setState({ user });
            })
            .catch(error => {
                console.log("Fetching posts failed: " + error.message);
            });
    }

    componentWillReceiveProps(nextProps) {
        const postId = nextProps.match.params.id;
        this.loadData(postId);
    }

    componentDidMount() {
        const postId = this.props.match.params.id;
        this.loadData(postId);
    }

    render() {

        const post = this.state.post;

        if (!post) {
            return (
                <div className="center-align">
                    <h4>Loading post details</h4>
                </div>
            );
        }

        const user = this.state.user;
        // Destructuring post object
        const { title, body, userId } = post;
        return (
            <div>
                <div className="container center-align">
                    <h2>{title}</h2>
                    <h5>{user ? user.name : "Getting author name..."}</h5>
                    <p>{body}</p>
                </div>
                <hr />
                <div>
                    <h5>Posts by same author</h5>
                    <AuthorPosts userId={userId} />
                </div>
            </div>
        );
    }
}

export default PostDetails;
