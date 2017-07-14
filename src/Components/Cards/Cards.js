import React, {Component} from 'react';
import {connect} from 'react-redux';
import SingleCard from './SingleCard/SingleCard';
import './Cards.css';


class Cards extends Component{
    
    render(){
        var recipes = this.props.recipes.searchResults;
        return(
            <div className="cards">
                <h1>Cards</h1>
                <div className='search-results'>           
                {recipes.map(recipe=>{
                    return <SingleCard recipe={recipe} key={recipe.id}/>;
                })}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return(
       {recipes:state.searchResults}                
    );
}

export default connect(mapStateToProps)(Cards);