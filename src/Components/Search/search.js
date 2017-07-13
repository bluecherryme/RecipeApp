import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setRecipes} from './../../redux/setSearchResults';


class Search extends Component{
    render(){
        return(
            <div className="search">
                <h1>Search</h1>
            </div>
        );
    }
}

export default connect(null,{setRecipes})(Search);