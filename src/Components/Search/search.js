import React, {Component} from 'react';
import Cards from './../Cards/Cards';
import {connect} from 'react-redux';
import Form from './Form';
import Nav
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
            <div className="search-results" id='search'>
                <div className="search">
                    <h1>SEARCH</h1>
                    <button className='btn btn-large' onClick={this.toggleByName}
                    style={
                        this.state.byName 
                        ? 
                        {'color':'#F96801',
                        'backgroundColor': 'white'} 
                        : 
                        {'color':'white',
                        'backgroundColor':'#F96801'}}>
                        by name</button>
                    <button className='btn btn-large' onClick={this.toggleByIngredients}
                    style={
                        !this.state.byName 
                        ? 
                        {'color':'#F96801',
                        'backgroundColor': 'white'
                        } 
                        : 
                        {'color':'white',
                        'backgroundColor':'#F96801'}}>
                    
                   by ingredients</button>
                    {
                        this.state.byName
                        ?
                        <Form getRecipes={this.props.getRecipesByName} 
                            placeholder={"e.g. potato salad"}
                            getSearchTerm={this.getSearchTerm}/>
                        :
                        <Form getRecipes={this.props.getRecipesByIngredients} 
                            getSearchTerm={this.getSearchTerm}
                            placeholder="e.g. potatoes, bacon, broccoli..."/>
                    }
                    
                </div>
                <Cards searchTerm={this.state.searchTerm||''}/>

            </div>
        );
    }
}

export default connect(null, { getRecipesByName, getRecipesByIngredients })(Search);