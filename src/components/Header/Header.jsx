import React from 'react';
import { Link, NavLink } from 'react-router'; 
import './Header.css';

const Header = () => {
    return (
        <div>
            This is header page
            <nav>

                <NavLink to="/">Home</NavLink>
                <NavLink to="/laptop" >Laptop</NavLink>
                <NavLink to="/mobile" >Mobile</NavLink>
                <NavLink to="/users" >Users</NavLink>
                <NavLink to="/users2" >Users2</NavLink>
                <NavLink to="/posts" >Posts</NavLink>

                {/* <Link to="/">Home</Link>
                <Link to="/laptop">Laptop</Link>
                <Link to="/mobile">Mobile</Link> */}

                {/* <a href="/">Home</a>
                <a href="/laptop">Laptop</a>
                <a href="/mobile">Mobile</a> */}
            </nav>
        </div>
    );
};

export default Header;