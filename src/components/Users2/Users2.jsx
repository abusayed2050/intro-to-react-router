import React, { use } from 'react';

const Users2 = ({ userPromise }) => {
     const users = use(userPromise);
     console.log(users);
     
    return (
        <div>
            this is users2 page
        </div>
    );
};

export default Users2;