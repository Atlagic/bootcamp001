import React, { Component } from "react";
import axios from "axios";

import { BASE_URL } from "../../constants";
import AuthorProfile from "./authorProfile";
import AuthorAddress from "./authorAddress";
import AuthorCompany from "./authorCompany";

class AuthorDetailsPage extends Component {

    constructor(props) {
        super(props);
        this.state = this.initState();
        this.bindEventHandlers();
        console.log(props.match.params.id);
    }

    initState() {
        return {
            profile: {},
            address: {},
            company: {}
        };
    }

    bindEventHandlers() {
        // If needed bind handlers here
    }

    componentDidMount() {
        const authorId = this.props.match.params.id;
        this.fetchAuthorDetails(authorId);
    }

    fetchAuthorDetails(authorId) {
        const requestURL = `${BASE_URL}/users/${authorId}`;

        axios.get(requestURL)
            .then(response => {
                const author = response.data;

                const profile = {
                    name: author.name,
                    username: author.username,
                    email: author.email,
                    phone: author.phone
                };

                this.setState({ 
                    profile,
                    address: author.address,
                    company: author.company 
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        const profile = this.state.profile;
        const address = this.state.address;
        const company = this.state.company;

        return (
            <div>
                <h4>Authors page</h4>
                <hr />
                <AuthorProfile data={profile} />
                <AuthorAddress data={address} />
                <AuthorCompany data={company} />
            </div>
        );
    }
}

export default AuthorDetailsPage;
