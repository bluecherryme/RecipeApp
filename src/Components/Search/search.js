import React, {Component} from 'react';
import {connect} from 'react-redux';
import Form from './Form';
import {getRecipesByIngredients} from './../../redux/getSearchResults';
import {getRecipesByName} from './../../redux/getSearchResults';


class Search extends Component{
    constructor(props){
        super(props);

        this.state = {
            byRecipe : true
        }

    }

    toggleSwitch(){
        
    }

    componentDidMount() {
    this.props.getRecipesByIngredients('potatoes,bacon,broccoli');
  }
    
    render(){
        return(
            <div className="search-section">
                <div className="landing-top-left">
                    <h1>Search</h1>
                    <button className='btnByName'>Search Recipes by Name</button>
                    <button className='btnByIngredients'>Search Recipes by Name</button>
                    <Form getRecipes={this.props.getRecipesByIngredients}/>
                </div>
            </div>
        );
    }
}

export default connect(null, { getRecipesByName, getRecipesByIngredients })(Search);