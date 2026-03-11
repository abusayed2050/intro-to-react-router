import React from 'react';
import { Link } from 'react-router';

const User = ({ user }) => {
    const{id,name, email, phone } = user;

    const userStyle = {
        border: '1px solid gray',
        margin: '10px',
        borderRadius: '10px',
        padding: '10px',
        textAlign: 'left'
    };
    return (
        <div style={userStyle}>
            <h3>{name}</h3>
            <p>Email:{email}</p>
            <p><small>Phone: {phone}</small></p>   
            <Link to={`/user/${id}`}>View Details</Link>
            <button>Detaild info</button>

            {/* <h3>{user.name}</h3>
            <p>{user.email}</p> */}
        </div>
    );
};

export default User;