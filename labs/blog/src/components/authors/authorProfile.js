import React from 'react';

const AuthorProfile = (props) => {

    const author = props.data;

    return (
        <div>
            <h4>{author.name}</h4>
            <p>username: {author.username}</p>
            <p>email: {author.email}</p>
            <p>phone: {author.phone}</p>
            <hr />
        </div>
    );
};

export default AuthorProfile;
