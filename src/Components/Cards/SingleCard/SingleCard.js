import React, {Component} from 'react';
import './SingleCard.css';


export default class SingleCard extends Component{

    render(){
        var {id,title,usedIngredientCount} = this.props.recipe;
        return(
            <div>
                <div className='col-md-4 recipe-card' key={id} 
                    style={{"backgroundImage":`url(${this.props.image})`}}>
                    
                    <div className="overlay">
                        
                    </div>                                   
                </div>
            </div>
        );
    }
}


