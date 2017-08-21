import React, {Component} from 'react';
import {connect} from 'react-redux';
import saveRecipe from './func_saveRecipe';
import saveIngredient from './func_saveToShoppingList';
import './RecipeDetail.css'

class RecipeDetail extends Component{
    constructor(){
        super();

        this.state = {showSave: false, showAdd: false}
        this.showAdd = this.showAdd.bind(this);
        this.toggleAdd = this.toggleAdd.bind(this);
        this.showSave = this.showSave.bind(this);
        this.toggleSave = this.toggleSave.bind(this);
    }

    showSave(){
        let toggle = !this.state.showSave;
        this.setState({showSave:toggle});
        // setTimeout(this.toggleSave(),1000);
    }

    toggleSave(){
        this.showSave();
        setTimeout(this.showSave,1000);
    }

    showAdd(){
        let toggle = !this.state.showAdd;
        this.setState({showAdd:toggle})
        console.log('hello');
    }

    toggleAdd(){
        this.showAdd();
        setTimeout(this.showAdd,1000);
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

    //const userid = '103777885688777289032';
    var extendedIngredients = this.props.recipe.currentRecipe.extendedIngredients || [];
    var {id, instructions, sourceUrl, aggregateLikes, image, servings} = this.props.recipe.currentRecipe;
    var {title, readyInMinutes} = this.props.recipe.currentRecipe;
    var {clientid} = this.props.currentUser;
    
        return(
            <div className="modal-ctn">
                <div className='recipe-detail'>
                    <img onClick={()=>this.props.hideRecipe()}
                        className='close' src={require('./../../../img/close.svg')} alt='search'
                    />
                    <h2>{title}</h2>
                    <img className="img-small-screen" src={image} alt="Current Recipe"/>                    
                    <div className='recipe-content'>
                        <div className="ingredients">
                            <div>
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
                        </div>
                        <div className="instructions">
                        <h2 className="insH3">Instructions</h2>
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
                    </div>
                    <div className="btn-recipe">
                        <button className="save scew btn" 
                        onClick={()=>this.saveAndToggle(id,title,extendedIngredients,instructions,sourceUrl,aggregateLikes,image,servings,readyInMinutes,clientid)}>
                            save recipe</button>
                        <button className="addToShoppingList scew btn"
                            onClick={()=>this.submitIngredient(extendedIngredients,clientid)}
                            >add to shopping list
                        </button>  
                        {   
                        (this.state.showSave && clientid)
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
                        (this.state.showAdd && clientid)
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