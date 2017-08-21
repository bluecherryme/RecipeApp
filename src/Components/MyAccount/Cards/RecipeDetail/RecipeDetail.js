import React, {Component} from 'react';
import {connect} from 'react-redux';
import saveIngredient from './../../../Cards/RecipeDetail/func_saveToShoppingList';
import './detail.css';

class RecipeDetail extends Component{
    constructor(){
        super();
        this.state = {showAdd: false};
        this.add = this.add.bind(this);
    }

    add(){
        let toggle = !this.state.showAdd;
        this.setState({showAdd:toggle})
    }

    toggleAdd(){
        this.add();
        setTimeout(this.add,2000);
    }

    submitIngredient(extendedIngredients,clientid){
            //eslint-disable-next-line
        extendedIngredients.map(ingredient=>{
            saveIngredient(ingredient.originalString,clientid);
        });
        this.toggleAdd();
    }

    render(){

    // const userid = '103777885688777289032';
    var extendedIngredients = this.props.recipe.currentRecipe.extendedIngredients || [];
    var {id, instructions, sourceUrl, aggregateLikes, image, servings} = this.props.recipe.currentRecipe;
    var {title, readyInMinutes} = this.props.recipe.currentRecipe;
    var {clientid} = this.props.currentUser;
    console.log('currentUser',this.props.currentUser);
    
        return(
            <div className="modal-ctn">
            <div className='recipe-detail'>
                <img onClick={()=>this.props.showRecipe()}
                    className='close' src={require('./../../../../img/close.svg')} alt='search'
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
                                <button className='btn-here'><a href={sourceUrl}>here</a></button>
                            </div>
                        }
                    </div>
                </div>
                <div className="btn-recipe btn-detail">
                    <button className="addToShoppingList scew btn"
                        onClick={()=>this.submitIngredient(extendedIngredients,clientid)}
                        >add to shopping list
                    </button>    
                    {   
                    this.state.showAdd
                    ?  
                    <div className="recipe-saved">
                    Ingredients have been saved to your Shoppinglist.
                    <img onClick={()=>this.toggleAdd()}
                    className='close-small' src={require('./../../../../img/close.svg')} alt='search'/>                    
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