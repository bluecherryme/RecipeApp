import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getRandomRecipe} from './../../redux/getRecipeById';


class More extends Component{
    render(){
        
        return(
            <div className="more">
                <h1>More</h1>
                <button onClick={()=>this.props.getRandomRecipe()}
                     className="random">Get Random Recipe
                </button>
                <button className="video">Search for videos</button>
            </div>
        )
    }
}

export default connect(null,{getRandomRecipe})(More);