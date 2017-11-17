import React from "react";

import { BASE_URL } from "../../../constants";
import ComposeForm from "./composeForm";

class ComposePostPage extends React.Component {
    constructor(props) {
        super(props);

        this.saveRequested = this.saveRequested.bind(this);
    }

    redirectToHome() {
        this.props.history.push("/");
    }

    savePost(newPost) {
        const LOCAL_POSTS_KEY = "localPosts";
        const localPostsString = localStorage.getItem(LOCAL_POSTS_KEY);
        let myPosts = [];

        if (localPostsString) {
            myPosts = JSON.parse(localPostsString);
        }

        myPosts.splice(0, 0, newPost);

        localStorage.setItem(LOCAL_POSTS_KEY, JSON.stringify(myPosts));
    }

    createRequest(data) {
        const requestHeaders = {
            "Accept": "application/json",
            "Content-Type": "application/json"
        };

        const postData = {
            userId: 1,
            title: data.title,
            body: data.content,
            id: 123
        };

        const requestBody = JSON.stringify(postData);

        return {
            headers: requestHeaders,
            method: "POST",
            body: requestBody
        };
    }

    saveRequested(formData) {

        const requestOptions = this.createRequest(formData);

        fetch(`${BASE_URL}/posts`, requestOptions)
            .then((response) => response.json())
            .then((post) => {
                this.savePost(post);
                this.redirectToHome();
            })
            .catch((reason) => {
                console.log("Creating posts failed: " + reason);
                alert(reason);
            });
    }

    render() {
        return (
            <div>
                <h4>Create post</h4>
                <ComposeForm onSave={this.saveRequested} />
            </div>
        );
    }
}

export default ComposePostPage;
