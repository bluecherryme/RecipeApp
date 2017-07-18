import React, {Component} from 'react';
import './SingleCard.css';


export default class SingleCard extends Component{

    render(){
        var {id,title,usedIngredientCount,missedIngredientCount,likes,readyInMinutes} = this.props.recipe;
        return(
            <div>
                <div className='col-md-4 recipe-card' key={id} 
                    style={{"backgroundImage":`url(${this.props.image})`}}>
                    
                    <div className="overlay">
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
                            <p>prep-time: {readyInMinutes}</p>
                        }
                                                                    
                    </div>                                   
                </div>
            </div>
        );
    }
}


