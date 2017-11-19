import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { BASE_URL } from "../../constants";

class AuthorList extends Component {
    constructor(props) {
        super(props);
        this.state = this.initState();
    }

    initState() {
        return {
            authors: []
        };
    }

    componentDidMount() {
        this.fetchAuthors();
    }

    fetchAuthors() {

        const requestURL = `${BASE_URL}/users`;

        axios.get(requestURL)
            .then(response => {
                const responseAuthors = response.data;

                // const authors = responseAuthors.map(({id, name}) => ({id, name}));
                const authors = responseAuthors.map(({ id, name }) => {
                    return { id, name };
                });

                this.setState({ authors });
            })
            .catch(error => {
                console.log(error);
            });

    }

    renderAuthorLink(author) {

        const { name, id } = author;

        return (
            <Link to={`/authors/${id}`} key={id}>
                <h4>{name}</h4>
            </Link>
        );
    }

    render() {
        const authors = this.state.authors;

        if (!authors.length) {
            return <h6>Loading authors...</h6>;
        }

        return (
            <div>
                <h4>Authors ({authors.length})</h4>
                {authors.map(author => this.renderAuthorLink(author))}
            </div>
        );
    }
}

export default AuthorList;
