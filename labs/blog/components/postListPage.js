import React from "react";

import PostPreview from "./postPreview";

class PostListPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = { posts: [] };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then((posts) => {
                console.log(posts);
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
                {this.state.posts.map((item) => {
                    return <PostPreview post={item} key={item.id} />;
                })}
            </div>
        );
    }
}

export default PostListPage;
