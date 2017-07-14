import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getRecipes} from './../../redux/getSearchResults';


class Search extends Component{
    constructor(props){
        super(props);

        this.state = {searchTerm:''}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({searchTerm:event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.getRecipes(this.state.searchTerm);
        this.setState({searchTerm:''});
    }

    componentDidMount() {
    this.props.getRecipes('potatoes,bacon,broccoli');
  }
    

    render(){
        return(
            <div className="search-section">
                <div className="landing-top-left">
                    <h1>Search</h1>
                    <form 
                    className="search"
                    onSubmit={ this.handleSubmit }
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
                </div>
            </div>
        );
    }
}

export default connect(null, { getRecipes })(Search);