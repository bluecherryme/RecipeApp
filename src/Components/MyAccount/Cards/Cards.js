import React, {Component} from 'react';
import SingleCard from './SingleCard/SingleCard';
import './Cards.css';


export default class Cards extends Component{
    
    render(){
        var recipes = this.props.recipes || [];
        console.log(this.props.recipes);

        return(
            <div className="cards">
                <h1>Cards</h1>
                <div className='search-results'>           
                    {   recipes.map(recipe=>{
                        return <SingleCard recipe={recipe} key={recipe.id} 
                        image={recipe.image}
                        />})    
                    }
                </div>
            </div>
        );
    }
}

