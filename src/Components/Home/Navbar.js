import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Navbar.css';

function handleClick() {
    axios.get('/auth/me')
    .then( res => {
      console.log('res', res);
    })
  }

export default function(){
    return(
        <div className="nav">
            <Link className="link" to={'/'}>Home</Link>
            <Link className="link" to={'/search'}>Search</Link>
            <Link className="link" to={'http://localhost:8080/auth/me'}>MyAccount</Link>
            <button 
              className='btn btn-default' 
              onClick={ ()=>handleClick() }
              >Who is logged in?
            </button>
       
            <a href='http://localhost:3001/auth'>
              <button 
                className='btn btn-default'>Log in
              </button>
            </a>
        </div>
    );
}