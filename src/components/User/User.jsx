import React, { Suspense, useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router';
import UserDetails2 from '../UserDetails2/UserDetails2';

const User = ({ user }) => {
    const [showInfo, setShowInfo] = useState(false);
    const[visitHome, setVisitHome]= useState(false);
    const location = useLocation();
    console.log(location);

    const{id,name, email, phone } = user;

    const userPromise=fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res=>res.json());

    const userStyle = {
        border: '1px solid gray',
        margin: '10px',
        borderRadius: '10px',
        padding: '10px',
        textAlign: 'left'
    };

    if(visitHome){
        return <Navigate to="/laptop"></Navigate>
    }
    return (
        <div style={userStyle}>
            <h3>{name}</h3>
            <p>Email:{email}</p>
            <p><small>Phone: {phone}</small></p>   
            <Link to={`/user/${id}`}>View Details</Link>
            <button onClick={()=>setShowInfo(!showInfo)}>{showInfo ?'Hide': 'Show'}</button>
            {
                showInfo && <Suspense fallback={<span>Loading.............</span>}>
                        <UserDetails2 userPromise={userPromise}></UserDetails2>
                </Suspense>
            }

            <button onClick={()=>setVisitHome(true)}>Visit Home</button>

            {/* <h3>{user.name}</h3>
            <p>{user.email}</p> */}
        </div>
    );
};

export default User;