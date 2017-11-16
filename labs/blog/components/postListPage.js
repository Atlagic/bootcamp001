import React from "react";

import PostPreview from "./postPreview";
import Search from "./search";

class PostListPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = { posts: [], allPosts: [] };

        this.searchHandler = this.searchHandler.bind(this);
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                return response.json();
            })
            .then((posts) => {
                this.setState({
                    posts: posts,
                    allPosts: posts
                });
            });
    }

    searchHandler(searchString){
        console.log(searchString);

        let currentList = this.state.allPosts;

        if (searchString === ""){
            this.setState({
                posts: currentList
            });

            return;
        }

        let filteredList = currentList.filter((item)=>{
            return item.title.includes(searchString);
        });

        this.setState({
            posts : filteredList
        });
    }

    render() {
        return (
            <div>
                <Search onSearchRequested={this.searchHandler} instant={true} />
                {this.state.posts.map((item) => {
                    return <PostPreview post={item} key={item.id} />;
                })}
            </div>
        );
    }
}

export default PostListPage;
