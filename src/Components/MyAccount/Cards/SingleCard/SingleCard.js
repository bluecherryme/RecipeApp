import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCurrentRecipe} from './../../../../redux/getRecipeById';


class SingleCard extends Component{

    render(){
        var {id,title,readyinminutes} = this.props.recipe;
        return(
            <div>
                <div className='recipe-card' key={id} 
                    style={{"backgroundImage":`url(${this.props.image})`}}>
                    
                    <div className="overlay-card" onClick={()=>this.props.getCurrentRecipe(id)}>
                        <p>{title}</p>
                        <p>prep-time: {readyinminutes} minutes</p>                                                                    
                    </div>                                   
                </div>
            </div>
        );
    }
}


export default connect(null,{getCurrentRecipe})(SingleCard);

