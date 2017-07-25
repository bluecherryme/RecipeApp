import React, {Component} from 'react';
import Cards from './../Cards/Cards';
import {connect} from 'react-redux';
import Form from './Form';
import {getRecipesByIngredients} from './../../redux/getSearchResults';
import {getRecipesByName} from './../../redux/getSearchResults';
import './search.css';


class Search extends Component{
    constructor(props){
        super(props);

        this.state = {
            byName : false,
            searchTerm:''
        }
        
        this.toggleByIngredients = this.toggleByIngredients.bind(this);
        this.toggleByName = this.toggleByName.bind(this);
        this.getSearchTerm = this.getSearchTerm.bind(this);
    }

    toggleByName(){
        if(!this.state.byName){
            this.setState({byName:true})
        }
    }

    toggleByIngredients(){
        if(this.state.byName){
            this.setState({byName:false})
        }
    }

    getSearchTerm(searchTerm){
        this.setState({searchTerm:searchTerm});
    }

    componentDidMount() {
    this.props.getRecipesByIngredients('potatoes,bacon,broccoli', 'GET_RECIPES');
  }
    
    render(){
        return(
            <div className="search-section" id='search'>
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
                            placeholder={"e.g. potato salad"}
                            getSearchTerm={this.getSearchTerm}/>
                        :
                        <Form getRecipes={this.props.getRecipesByIngredients} 
                            placeholder="e.g. potatoes, bacon, broccoli..."/>
                    }
                    
                </div>
                <Cards searchTerm={this.state.searchTerm||''}/>

            </div>
        );
    }
}

export default connect(null, { getRecipesByName, getRecipesByIngredients })(Search);