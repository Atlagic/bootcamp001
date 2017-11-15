import React from "react";
import { Link } from "react-router-dom";

const PostPreview = (props) => {
    const { id, title, body } = props.post;

    return (
        <Link to={`/posts/${id}`} key={id}>
            <div className="card-panel hoverable">
                <h3>{title}</h3>
                <p>{body}</p>
            </div>
        </Link>
    );
};

export default PostPreview;
