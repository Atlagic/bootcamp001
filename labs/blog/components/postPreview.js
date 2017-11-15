import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const PostPreview = function (props) {
    return (
        <div>
            <Link to={"/post/" + props.post.id}><h1>{props.post.title}</h1></Link>
            <p>{props.post.body}</p>
            <hr/>
        </div>
    );
};

export default PostPreview;