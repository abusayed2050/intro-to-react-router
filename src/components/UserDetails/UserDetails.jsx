import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    return (
        <div>
            this is user details page
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Website: {user.website}</p>
            <p>Phone: {user.phone}</p>
        </div>
    );
};
 
export default UserDetails;