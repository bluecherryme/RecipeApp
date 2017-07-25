import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getCurrentUser} from './../../redux/setCurrentUser';
import axios from 'axios';
import './Navbar.css';


class Navbar extends Component{

  componentWillMount(){
    this.props.getCurrentUser();
  }

  render(){
    return(
        <div className="nav">
          <div className="link-container">
            <Link className="link" to={'/'}>Home</Link>
            <Link className="link" to={'/search'}>Search</Link>
            <Link className="link" to={'/about'}>About</Link>
            {
              this.props.currentUser.clientid
              ?
              <div className='logged-in'>
              <Link className="link" to={'/MyAccount'}>MyAccount</Link>
              <a href='http://localhost:3001/auth/logout'>
                <button 
                  className='btn'>Log out
                </button>
              </a>   
              </div>
              :
              <a className='login-btn' href='http://localhost:3001/auth'>
                <button 
                  className='btn'>Log in
                </button>
              </a>           
            }
            </div>            
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.currentUser.data || {}
  }
}


export default connect(mapStateToProps,{getCurrentUser})(Navbar);