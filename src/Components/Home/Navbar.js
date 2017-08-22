import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getCurrentUser} from './../../redux/setCurrentUser';
import './Navbar.css';
import {LoginRoute} from './../../API-Key';
import {LogoutRoute} from './../../API-Key';


class Navbar extends Component{

  componentWillMount(){
    this.props.getCurrentUser();
  }

  render(){
    return(
        <div className="nav">
          <div className="link-container">
            <Link className="link" to={'/'}>Home</Link>
            <Link className="link" to={'/video'}>Video</Link>
            <Link className="link" to={'/about'}>About</Link>
            {
              this.props.currentUser.clientid
              ?
              <div className='logged-in'>
              <Link className="link" to={'/MyAccount'}>MyAccount</Link>
              <a href={LogoutRoute}>
                <button 
                  className='btn btn-log'>Log out
                </button>
              </a>   
              </div>
              :
              <a className='login-btn' href={LoginRoute}>
                <button 
                  className='btn btn-log'>Log in
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