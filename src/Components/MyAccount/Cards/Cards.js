import React, {Component} from 'react';
import SingleCard from './SingleCard/SingleCard';
import './Cards.css';


export default class Cards extends Component{
    
    render(){
        var recipes = this.props.recipes || [];

        return(
            <div className="cards">
                <h1 className="myAccountH1">YOUR RECIPES</h1>
                <h2 onClick={()=>this.props.toggleShow()}
                    className='listH2'>My Shopping List</h2>
                <div className='search-results cards-container'>           
                    {   recipes.map(recipe=>{
                        return <SingleCard recipe={recipe} key={recipe.id} 
                        image={recipe.image} showRecipe={()=>this.props.showRecipe()}
                        />})    
                    }
                </div>
            </div>
        );
    }
}

