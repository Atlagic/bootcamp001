import React from 'react';

const AuthorCompany = (props) => {

    const company = props.data;

    return (
        <div>
            <h4>Company</h4>
            <p>name: {company.name}</p>
            <p>slogan: {company.catchPhrase}</p>
        </div>
    );
};

export default AuthorCompany;
