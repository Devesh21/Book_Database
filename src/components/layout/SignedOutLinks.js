import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
    return (
        <ul className="right" style={{"paddingLeft": "10px"}}>
            <li style={{"listStyle": "none"}}><NavLink style={{"textDecoration": "none"}} to="/">Sign Up</NavLink></li>
            <li style={{"listStyle": "none"}}><NavLink style={{"textDecoration": "none"}} to="/">Log In</NavLink></li>
        </ul>
    )
};

export default SignedOutLinks;