import React, {Component} from 'react';
import {connect} from 'react-redux';
import Form from './Form';
import {getRecipesByIngredients} from './../../redux/getSearchResults';
import {getRecipesByName} from './../../redux/getSearchResults';
import './search.css';


class Search extends Component{
    constructor(props){
        super(props);

        this.state = {
            byName : false
        }
        
        this.toggleByIngredients = this.toggleByIngredients.bind(this);
        this.toggleByName = this.toggleByName.bind(this);
    }

    toggleByName(){
        if(!this.state.byName){
            this.setState({
                byName:true
            })
        }
    }

    toggleByIngredients(){
        if(this.state.byName){
            this.setState({
                byName:false
            })
        }
    }

    componentDidMount() {
    this.props.getRecipesByIngredients('potatoes,bacon,broccoli');
  }
    
    render(){
        return(
            <div className="search-section">
                <div className="landing-top-left">
                    <h1>Search</h1>
                    <button className='btnByName' onClick={this.toggleByName}
                    style={this.state.byName ? {'color':'red'} : {'color':'black'}}>
                        Search Recipes by Name</button>
                    <button className='btnByIngredients' onClick={this.toggleByIngredients}
                    style={!this.state.byName ? {'color':'red'} : {'color':'black'}}>
                    
                    Search Recipes by Ingredients</button>
                    {
                        this.state.byName
                        ?
                        <Form getRecipes={this.props.getRecipesByName} 
                            placeholder={"e.g. potato salad"}/>
                        :
                        <Form getRecipes={this.props.getRecipesByIngredients} 
                            placeholder="e.g. potatoes, bacon, broccoli..."/>
                    }
                    
                </div>
            </div>
        );
    }
}

export default connect(null, { getRecipesByName, getRecipesByIngredients })(Search);