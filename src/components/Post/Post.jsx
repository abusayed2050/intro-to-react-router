import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({post}) => {
      const{id, title, body} = post;    

      const navigate = useNavigate();
      const handleNavigate = () => {
            navigate(`/posts/${id}`);
      }
    return (
        <div>
            this is post all page
            <h2>{id} - {title}</h2>
            <p>{body}</p>
            <Link to={`/posts/${id}`}>
                <button>showDetails</button>
            </Link>

            <div>
                <button onClick={handleNavigate} > Details of:{id}</button>
            </div>
        </div>
    );
};

export default Post;