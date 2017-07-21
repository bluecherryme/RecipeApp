import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getRecipes} from './../../redux/getSavedRecipes';

const userid = '103777885688777289032';

class MyAccount extends Component{
    componentDidMount(){
        getRecipes(userid);
    }

    render(){
        return(
            <h1>MyAccount</h1>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.currentUser.data || {},
    savedRecipes: state.savedRecipes
  }
}

export default connect(mapStateToProps,{getRecipes})(MyAccount);