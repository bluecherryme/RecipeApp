import React, {Component} from 'react';
import {connect} from 'react-redux';
import saveRecipe from './func_saveRecipe';
import saveIngredient from './func_saveToShoppingList';
import './RecipeDetail.css'

class RecipeDetail extends Component{
    constructor(){
        super();
        this.state = {showSave: false, showAdd: false}
    }

    toggleSave(){
        // eslint-disable-next-line
        this.state.showSave = !this.state.showSave;
        this.setState({showSave:this.state.showSave})
    }

    toggleAdd(){
        // eslint-disable-next-line
        this.state.showAdd = !this.state.showAdd;
        this.setState({showAdd:this.state.showAdd})
    }

    saveAndToggle(a,b,c,d,e,f,g,h,i,j){
        saveRecipe(a,b,c,d,e,f,g,h,i,j);
        this.toggleSave();
    }

    submitIngredient(extendedIngredients,clientid){
        if(clientid){
                //eslint-disable-next-line
            extendedIngredients.map(ingredient=>{
                saveIngredient(ingredient.originalString,clientid);
            })
        } else {
            alert('Please login first');
        }
        this.toggleAdd();
    }

    render(){

    const userid = '103777885688777289032';
    var extendedIngredients = this.props.recipe.currentRecipe.extendedIngredients || [];
    var {id, instructions, sourceUrl, aggregateLikes, image, servings} = this.props.recipe.currentRecipe;
    var {title, readyInMinutes} = this.props.recipe.currentRecipe;
    var {clientid} = this.props.currentUser;
    
        return(
            <div className='recipe-detail'>
            <img onClick={()=>this.props.hideRecipe()}
                className='close' src={require('./../../../img/close.svg')} alt='search'
            />
                <h2>{title}</h2>
                <div className="underlay picture">
                    <div className="recipe-card"
                        style={{"backgroundImage":`url(${image})`}}>
                    </div>
                </div>
                <div className="ingr-ctn">
                    <h3 className='ingrH3'>Ingredients</h3>
                    <ul className="ingredients">
                        {extendedIngredients.map((ingredient,index)=>
                            <li key={index}>
                                {ingredient.originalString}
                            </li>
                        )}
                    </ul>
                </div>
                <div className="instructions">
                <h3 className="insH3">Instructions</h3>
                    {
                        instructions
                        ?
                        <div className="instructionsContent">
                            <p>{instructions}</p>
                            <p>likes: {aggregateLikes}
                               {' '}servings: {servings}
                               {' '}preperation time: {readyInMinutes} minutes</p>
                        </div>
                        :
                        <div>
                            <p>View full instructions </p>
                            <button className='btn-here'><a href={sourceUrl}>here</a></button>
                        </div>
                    }
                </div>
                <div className="btn-recipe">
                    <button className="save scew btn" 
                    onClick={()=>this.saveAndToggle(id,title,extendedIngredients,instructions,sourceUrl,aggregateLikes,image,servings,readyInMinutes,userid)}>
                        save recipe</button>
                    <button className="addToShoppingList scew btn"
                        onClick={()=>this.submitIngredient(extendedIngredients,userid)}
                        >add to shopping list
                    </button>  
                    {   
                    this.state.showSave
                    ?  
                    <div className="recipe-saved">
                    Recipe has been saved to your account
                    <img onClick={()=>this.toggleSave()}
                    className='close-small' src={require('./../../../img/close.svg')} alt='search'/>                    
                    </div> 
                    :
                    null
                    }   
                    {   
                    this.state.showAdd
                    ?  
                    <div className="recipe-saved">
                    Ingredients have been saved to your Shoppinglist.
                    <img onClick={()=>this.toggleAdd()}
                    className='close-small' src={require('./../../../img/close.svg')} alt='search'/>                    
                    </div> 
                    :
                    null
                    }         
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