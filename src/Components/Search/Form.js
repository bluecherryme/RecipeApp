import React, {Component} from 'react';



export default class Form extends Component{
    constructor(props){
        super(props);

        this.state = {searchTerm:''}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({searchTerm:event.target.value});
    }

    handleSubmit(event,getRecipes){
        event.preventDefault();
        getRecipes(this.state.searchTerm);
        this.setState({searchTerm:''});
    }

    render(){
        return(
            <form 
                className="search"
                onSubmit={ (e)=>this.handleSubmit(e,this.props.getRecipes) }
                >
                
                <input 
                type="text" 
                className="search-field"
                placeholder="e.g. potatoes, bacon, broccoli..."
                value={ this.state.searchTerm }   
                onChange= { this.handleChange }             
                />
                <button className="search-btn btn btn-primary">
                    SEARCH RECIPES 
                </button>
        </form>
            
                            
        );
    }
}