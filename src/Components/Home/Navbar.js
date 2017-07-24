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
            <Link className="link" to={'/'}>Home</Link>
            <Link className="link" to={'/search'}>Search</Link>
            <Link className="link" to={'/about'}>About</Link>
            {
              this.props.currentUser.clientid
              ?
              <div>
              <Link className="link" to={'/MyAccount'}>MyAccount</Link>
              <a href='http://localhost:3001/auth/logout'>
                <button 
                  className='btn btn-default'>Log out
                </button>
              </a>   
              </div>
              :
              <a href='http://localhost:3001/auth'>
                <button 
                  className='btn btn-default'>Log in
                </button>
              </a>           
            }
       
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