import React from "react";

class AuthorPosts extends React.Component {
    constructor(props) {
        super(props);

        this.state = { posts: [] };
    }

    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.props.userId}`)
            .then((response) => {
                return response.json();
            })
            .then((posts) => {
                this.setState({
                    posts: posts
                });
            });
    }

    render() {

        if (this.state.posts.length === 0) {
            return <p>No posts</p>;
        }

        return (
            <div>
                <div>
                    {this.state.posts.slice(0, 3)
                        .map((post) =>
                            <h1 key={post.id}>{post.title}</h1>
                        )}
                </div>
            </div>
        );
    }
}

export default AuthorPosts;
