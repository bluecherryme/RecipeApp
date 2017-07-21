import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
//import axios from 'axios';
import {getCurrentUser} from './../../redux/setCurrentUser';
import './Navbar.css';

// function handleClick() {
//     axios.get('/auth/me')
//     .then( res => {
//       console.log('res', res);
//     })
//   }

class Navbar extends Component{
  render(){
    console.log(this.props.currentUser);
    return(
        <div className="nav">
            <Link className="link" to={'/'}>Home</Link>
            <Link className="link" to={'/search'}>Search</Link>
            <Link className="link" to={'/auth/me'}>MyAccount</Link>
            <button 
              className='btn btn-default' 
              onClick={ this.props.getCurrentUser }
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
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}


export default connect(mapStateToProps,{getCurrentUser})(Navbar);