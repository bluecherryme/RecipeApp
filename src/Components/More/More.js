import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getRandomRecipe} from './../../redux/getRecipeById';
import Video from './SearchVideo';
import './More.css';


class More extends Component{
    render(){
        
        return(
            <div className="more">
                <div className="icon-outer">
                    <div className="icon-ctn">
                        <img className='video-img' src={require('./../../img/video.svg')} alt='video'/> 
                        <h2>Search Videos</h2>
                    </div>
                
                    <div onClick={()=>this.props.getRandomRecipe()}
                        className="icon-ctn">
                        <img className='random-img' src={require('./../../img/restaurant_menu.svg')} alt='cutlery'/>                     
                        <h2>Random Recipe</h2>
                    </div>
                </div>
                <Video/>
            </div>
        )
    }
}

export default connect(null,{getRandomRecipe})(More);