import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getRecipes} from './../../redux/getSavedRecipes';
import RecipeDetail from './Cards/RecipeDetail/RecipeDetail';
import Cards from './Cards/Cards';
import MyShoppingList from './MyShoppingList'
import './MyAccount.css';

const userid = '103777885688777289032';

class MyAccount extends Component{
    componentDidMount(){
        this.props.getRecipes(userid);
    }

    render(){
        return(
            <div className='my-account'>
                <h1>MyAccount</h1>
                <Cards recipes={this.props.savedRecipes}/>
                <MyShoppingList/>
                <RecipeDetail/>
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