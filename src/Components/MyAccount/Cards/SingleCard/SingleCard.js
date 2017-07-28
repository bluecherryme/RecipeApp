import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCurrentRecipe} from './../../../../redux/getRecipeById';
import axios from 'axios';
import './single.css';


class SingleCard extends Component{

    showRecipe(id){
        this.props.getCurrentRecipe(id);
        this.props.showRecipe();
    }

     deleteRecipe(clientid,recipeid){
        axios.delete(`/api/deleteRecipe?clientid=${clientid}&recipeid=${recipeid}`)
        .then(console.log('recipe deleted succesfully'))
        .catch(err=>console.log(err));
    }

    render(){
        const userid = '103777885688777289032';
        var {id,title,readyinminutes} = this.props.recipe;
        var clientid = this.props.clientid;
        return(
            <div>
                <div className='recipe-card' key={id} 
                    style={{"backgroundImage":`url(${this.props.image})`}}>
                    
                    <div className="overlay-card rel" onClick={()=>this.showRecipe(id)}>
                        <button
                          onClick={()=>this.deleteRecipe(userid, id)}
                             className="delete del">
                             <img src={require('./../../../../img/close.svg')}/>
                             </button>
                        <p>{title}</p>
                        <p>prep-time: {readyinminutes} minutes</p>                                                                    
                    </div>                                   
                </div>
            </div>
        );
    }
}


export default connect(null,{getCurrentRecipe})(SingleCard);

