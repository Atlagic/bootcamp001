import React, { Component } from "react";

import AuthorProfile from "./authorProfile";
import AuthorAddress from "./authorAddress";
import AuthorCompany from "./authorCompany";

class AuthorDetailsPage extends Component {

    constructor(props) {
        super(props);
        this.state = this.initState();
        this.bindEventHandlers();
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
