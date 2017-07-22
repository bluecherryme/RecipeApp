import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getRecipes} from './../../redux/getSavedRecipes';
import Cards from './Cards/Cards';

const userid = '103777885688777289032';

class MyAccount extends Component{
    componentDidMount(){
        this.props.getRecipes(userid);
    }

    render(){
        return(
            <div>
                <h1>MyAccount</h1>
                <Cards recipes={this.props.savedRecipes}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.currentUser.data || {},
    savedRecipes: state.savedRecipes.savedRecipes.data
  }
}

export default connect(mapStateToProps,{getRecipes})(MyAccount);