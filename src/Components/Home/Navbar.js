import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

export default function(){
    return(
        <div className="nav">
            <Link className="link" to={'/'}>Home</Link>
            <Link className="link" to={'/search'}>Search</Link>
            <Link className="link" to={'/login'}>MyAccount</Link>
        </div>
    );
}