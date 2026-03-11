import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetails = () => {
    const post = useLoaderData() || {};
    const {title, body} = post;
    return (
        <div>
            this is post details page
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails;