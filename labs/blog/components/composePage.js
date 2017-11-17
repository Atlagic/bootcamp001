import React from "react";

import ComposeForm from "./composeForm";

class ComposePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.saveRequested = this.saveRequested.bind(this);
    }

    redirectToHome(){
        this.props.history.push("/");
    }

    savePost(newPost){
        let myPostsString = localStorage.getItem("myPosts");
        let myPosts = [];
        if (myPostsString){
            myPosts = JSON.parse(myPostsString);
        }

        myPosts.splice(0, 0, newPost);

        localStorage.setItem("myPosts", JSON.stringify(myPosts));
    }

    saveRequested(formData) {
        fetch("https://jsonplaceholder.typicode.com/posts", {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                userId: 1,
                title: formData.title,
                body: formData.content,
                id: 123
            })
        })
            .then((response) => response.json())
            .then((post) => {
                this.savePost(post);
                this.redirectToHome();
            })
            .catch((reason) => {
                alert(reason);
            });
    }

    render() {
        return (
            <div>
                Compose!
                <ComposeForm onSave={this.saveRequested} />
            </div>);
    }
}

export default ComposePage;