import React from 'react';
import { Link } from 'react-router';

const Post = ({post}) => {
      const{id, title, body} = post;    
    return (
        <div>
            this is post all page
            <h2>{id} - {title}</h2>
            <p>{body}</p>
            <Link to={`/posts/${id}`}><button>showDetails</button></Link>
        </div>
    );
};

export default Post;