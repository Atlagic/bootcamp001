import React from "react";

import { BASE_URL } from "./../../constants";
import PostPreview from "./postPreview";
import Search from "../common/search";

class PostList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filteredPosts: [],
            allPosts: []
        };

        this.searchHandler = this.searchHandler.bind(this);
    }

    // Life-cycle methods

    componentDidMount() {
        this.fetchPosts();
    }

    // My methods

    fetchPosts() {
        fetch(`${BASE_URL}/posts`)
            .then((response) => response.json())
            .then((posts) => {
                this.setState({
                    allPosts: posts,
                    filteredPosts: posts
                });
            }).catch(error => {
                console.log("Fetching posts failed: " + error.message);
            });
    }

    searchHandler(searchString) {
        const currentList = this.state.allPosts;

        if (searchString === "") {
            this.setState({ filteredPosts: currentList });
            return;
        }

        const filteredList = currentList.filter((item) => {
            return item.title.includes(searchString);
        });

        this.setState({ filteredPosts: filteredList });
    }

    // Render method

    render() {
        const posts = this.state.filteredPosts;

        if (!posts) {
            return (
                <div className="center-align">
                    <h4>Loading posts...</h4>
                </div>
            );
        }

        return (
            <div>
                <Search onSearchRequested={this.searchHandler} instant={true} />
                {posts.map((post) => {
                    return <PostPreview post={post} key={post.id} />;
                })}
            </div>
        );
    }
}

export default PostList;
