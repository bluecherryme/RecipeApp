import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Navbar.css';

function login(){
    axios.get('/login').then( response => {
      console.log(response.data)
    })  
}

export default function(){
    return(
        <div className="nav">
            <Link className="link" to={'/'}>Home</Link>
            <Link className="link" to={'/search'}>Search</Link>
            <Link className="link" to={'/login'}>MyAccount</Link>
            <button onClick={()=>login()}>Login</button>
        </div>
    );
}