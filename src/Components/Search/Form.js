import React, {Component} from 'react';
import './search.css';


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
        window.scrollBy(0,550);
    
    }

    render(){
        return(
            <form 
                className="input search-input"
                onSubmit={ (e)=>this.handleSubmit(e) }
                >
                <img className='arrow-right' src={require('./../../img/arrow_right.svg')} alt='arrow-down'/>
                <input 
                type="text" 
                className="input-field"
                placeholder={this.props.placeholder}
                value={ this.state.searchTerm }   
                onChange= { this.handleChange }             
                />
                <button className="search-btn">
                    <img className='search-icon' src={require('./../../img/search.svg')} alt='search'/>
                </button>
            </form>
            
                            
        );
    }
}