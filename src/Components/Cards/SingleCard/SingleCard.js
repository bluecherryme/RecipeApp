import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCurrentRecipe} from './../../../redux/getRecipeById';
import './SingleCard.css';


class SingleCard extends Component{

    render(){
        var {id,title,usedIngredientCount,missedIngredientCount,likes,readyInMinutes} = this.props.recipe;
        return(
            <div>
                <div className="underlay">
                    <div className='recipe-card' key={id} 
                        style={{"backgroundImage":`url(${this.props.image})`}}>
                        <div className="overlay-card" onClick={()=>this.props.getCurrentRecipe(id)}>
                            <h4>{title}</h4>
                            {
                                usedIngredientCount
                                ?
                                <div className="overlay-by-ingredients">
                                    <p>used Ingredient Count: {usedIngredientCount}</p>
                                    <p>missed Ingredient Count: {missedIngredientCount}</p> 
                                    <p>likes:{likes}</p>
                                </div>
                                :
                                <p>prep-time: {readyInMinutes} minutes</p>
                            }
                                                                        
                        </div>     
                    </div>                              
                </div>
            </div>
        );
    }
}

export default connect(null,{getCurrentRecipe})(SingleCard);

