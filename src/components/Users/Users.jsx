import React from 'react';
import { useLoaderData } from 'react-router';
import User from '../User/User';

const Users = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div>
            This is users page
            <div>
                {
                    users.map(user=><User key={user.id} user={user} />)
                }
            </div>
        </div>
    );
};

export default Users;