import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCurrentRecipe} from './../../../redux/getRecipeById';
import './SingleCard.css';


class SingleCard extends Component{

    render(){
        var {id,title,usedIngredientCount,missedIngredientCount,likes,readyInMinutes} = this.props.recipe;
        return(
            <div>
                <div className='col-md-4 recipe-card' key={id} 
                    style={{"backgroundImage":`url(${this.props.image})`}}>
                    
                    <div className="overlay" onClick={()=>this.props.getCurrentRecipe(id)}>
                        <p>{title}</p>
                        {
                            usedIngredientCount
                            ?
                            <div className="overlayByIngredients">
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
        );
    }
}

export default connect(null,{getCurrentRecipe})(SingleCard);

