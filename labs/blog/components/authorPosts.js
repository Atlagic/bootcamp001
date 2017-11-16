import React from "react";
import {Link} from "react-router-dom";

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
                            <Link to={`/post/${post.id}`} key={post.id}><h1>{post.title}</h1></Link>
                        )}
                </div>
            </div>
        );
    }
}

export default AuthorPosts;
