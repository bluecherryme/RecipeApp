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
        this.props.getRecipes(this.state.searchTerm,'GET_RECIPES',0);
        this.setState({searchTerm:''});
        this.props.getSearchTerm(this.state.searchTerm);
    }

    render(){
        return(
            <form 
                className="search"
                onSubmit={ (e)=>this.handleSubmit(e) }
                >
                
                <input 
                type="text" 
                className="search-field"
                placeholder={this.props.placeholder}
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