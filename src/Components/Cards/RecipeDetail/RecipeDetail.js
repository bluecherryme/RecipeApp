import React, {Component} from 'react';
import {connect} from 'react-redux';
import saveRecipe from './func_saveRecipe';
import saveIngredient from './func_saveToShoppingList';
import './RecipeDetail.css'

class RecipeDetail extends Component{

    submitIngredient(extendedIngredients,clientid){
        if(clientid){
                //eslint-disable-next-line
            extendedIngredients.map(ingredient=>{
                saveIngredient(ingredient.originalString,clientid);
            })
        } else {
            alert('Please login first');
        }
    }

    render(){

    const userid = '103777885688777289032';
    var extendedIngredients = this.props.recipe.currentRecipe.extendedIngredients || [];
    var {id, instructions, sourceUrl, aggregateLikes, image, servings} = this.props.recipe.currentRecipe;
    var {title, readyInMinutes} = this.props.recipe.currentRecipe;
    var {clientid} = this.props.currentUser;
    
        return(
            <div className='recipe-detail'>
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
                            <p>preperation time: {readyInMinutes} minutes</p>
                        </div>
                        :
                        <div>
                            <p>View full instructions </p>
                            <button><a href={sourceUrl}>here</a></button>
                        </div>
                    }
                </div>
                <div className="btn-container">
                    <button className="save" 
                    onClick={()=>saveRecipe(id,title,extendedIngredients,instructions,sourceUrl,aggregateLikes,image,servings,readyInMinutes,userid)}>
                        save recipe</button>
                    <button className="addToShoppingList"
                        onClick={()=>this.submitIngredient(extendedIngredients,userid)}
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