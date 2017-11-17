import React from "react";

import PostPreview from "./postPreview";
import Search from "./search";

class PostListPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = { posts: [], allPosts: [], myPosts: [] };

        this.searchHandler = this.searchHandler.bind(this);
    }

    componentDidMount() {
        let myPostsString = localStorage.getItem("myPosts");
        if (myPostsString){
            let myPosts = JSON.parse(myPostsString);
            let allPosts = myPosts.concat(this.state.posts);
            this.setState({
                myPosts: myPosts,
                allPosts: allPosts
            });
        }

        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                return response.json();
            })
            .then((posts) => {
                let allPosts = this.state.myPosts.concat(posts);
                this.setState({
                    posts: allPosts,
                    allPosts: allPosts
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
