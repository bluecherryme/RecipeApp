import React, {Component} from 'react';
import {connect} from 'react-redux';


class RecipeDetail extends Component{
    render(){
    var extendedIngredients = this.props.recipe.currentRecipe.extendedIngredients || [];
    var {id, instructions, sourceURL, aggregateLikes, image, servings} = this.props.recipe.currentRecipe;
    var {title, readyInMinutes} = this.props.recipe.currentRecipe;
    console.log(this.props.recipe.currentRecipe);
        return(
            <div>
                <h1>Recipe Detail</h1>
                <div className="ingredients">
                    <h2>{title}</h2>
                    <img src={image} alt="Current Recipe"/>
                    <h2>Ingredients</h2>
                    <ul>
                        {extendedIngredients.map((ingredient,index)=>
                            <li key={index}>
                                {ingredient.originalString}
                            </li>
                        )}
                    </ul>
                </div>
                <div className="instructions">
                    <h2>Instructions</h2>
                    {
                        instructions
                        ?
                        <div className="instructionsContent">
                            <p>{instructions}</p>
                            <p>likes: {aggregateLikes}</p>
                            <p>servings: {servings}</p>
                            <p>preperation time: {readyInMinutes}</p>
                        </div>
                        :
                        <p>
                            View full instructions 
                            <a href={sourceURL}> here</a>
                        </p>
                    }
                </div>
                <div className="btn-container">
                    <button className="save">save recipe</button>
                    <button className="addToShoppingList">add to shopping list</button>                    
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        recipe: state.currentRecipe
    }
}

export default connect(mapStateToProps)(RecipeDetail);