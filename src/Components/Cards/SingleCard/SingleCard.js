import React, {Component} from 'react';
import './SingleCard.css';


export default class SingleCard extends Component{

    render(){
        var {id,title,image,usedIngredientCount} = this.props.recipe;
        return(
            <div>
                <div className='col-md-4 recipe-card' key={id} 
                    style={{"backgroundImage":`url(${image})`}}>
                    
                    <div className="overlay">
                        
                        {console.log(title+image+usedIngredientCount+id)}
                    </div>                                   
                </div>
            </div>
        );
    }
}


