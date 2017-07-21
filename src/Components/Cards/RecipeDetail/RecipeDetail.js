import React, {Component} from 'react';
import {connect} from 'react-redux';
import saveRecipe from './func_saveRecipe';
import saveIngredient from './func_saveToShoppingList';

class RecipeDetail extends Component{

    submitIngredient(extendedIngredients){
            //eslint-disable-next-line
        extendedIngredients.map(ingredient=>{
            saveIngredient(ingredient.originalString);
        })
    }

    render(){

    const userid = '103777885688777289032';
    var extendedIngredients = this.props.recipe.currentRecipe.extendedIngredients || [];
    var {id, instructions, sourceURL, aggregateLikes, image, servings} = this.props.recipe.currentRecipe;
    var {title, readyInMinutes} = this.props.recipe.currentRecipe;
    var {clientid} = this.props.currentUser;
    console.log('currentUser',this.props.currentUser);
    console.log("clientid", clientid);
    
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
                    <button className="save" 
                    onClick={()=>saveRecipe(id,title,extendedIngredients,instructions,sourceURL,aggregateLikes,image,servings,readyInMinutes)}>
                        save recipe</button>
                    <button className="addToShoppingList"
                        onClick={()=>this.submitIngredient(extendedIngredients)}
                        >add to shopping list
                    </button>                    
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        recipe: state.currentRecipe,
        currentUser: state.currentUser.currentUser.data || {}
    }
}

export default connect(mapStateToProps)(RecipeDetail);