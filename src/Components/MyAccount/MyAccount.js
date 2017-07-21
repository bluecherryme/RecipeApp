import React, {Component} from 'react';
import {connect} from 'react-redux';

// const userid = '103777885688777289032';

class MyAccount extends Component{

    render(){
        return(
            <h1>MyAccount</h1>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.currentUser.data || {}
  }
}

export default connect(mapStateToProps)(MyAccount);