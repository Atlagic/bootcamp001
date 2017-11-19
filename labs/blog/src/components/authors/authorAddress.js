import React from "react";

const AuthorAddress = props => {
    const address = props.data;
    return (
        <div>
            <h4>Address</h4>
            <p>street: {address.street}</p>
            <p>city: {address.city}</p>
            <p>zip: {address.zipcode}</p>
            <hr/>
        </div>
    );
};

export default AuthorAddress;
