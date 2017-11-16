import React from "react";

import AuthorPosts from "./authorPosts";

class PostDetailsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = { posts: undefined };
        this.loadData.bind(this);
    }

    loadData(id) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => {
                return response.json();
            })
            .then((post) => {
                this.setState({
                    post: post
                });

                return post;
            })
            .then((post) => {
                fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
                    .then((response) => {
                        return response.json();
                    })
                    .then((user) => {
                        this.setState({
                            user: user
                        });
                    });
            });
    }

    componentWillReceiveProps(nextProps) {
        this.loadData(nextProps.match.params.id);
    }

    componentDidMount() {
        this.loadData(this.props.match.params.id);
    }

    render() {

        if (!this.state.post) {
            return <p>No posts</p>;
        }

        return (
            <div>
                <div>
                    <h1>{this.state.post.title}</h1>
                    <h2>{this.state.user ? `by ${this.state.user.name}` : "getting author name..."}</h2>
                    <p>{this.state.post.body}</p>
                    <hr />
                    <AuthorPosts userId={this.state.post.userId} />
                </div>
            </div>
        );
    }
}

export default PostDetailsPage;
