import React, { use } from 'react';

const UserDetails2 = ({userPromise}) => {
const {name, username}=use(userPromise);

    return (
        <div>
                this is userdetails2

                <p><small>Username:{username}</small></p>
                <p>{name}</p>
        </div>
    );
};

export default UserDetails2;