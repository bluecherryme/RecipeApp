import React, {Component} from 'react';
import {connect} from 'react-redux';
import SingleCard from './SingleCard/SingleCard';
import RecipeDetail from './RecipeDetail/RecipeDetail';
import {getRecipesByName} from './../../redux/getSearchResults';
import {getRandomRecipe} from './../../redux/getRecipeById';
import {HashLink} from 'react-router-hash-link';
import './Cards.css';


class Cards extends Component{
    constructor(){
        super();
        this.getMore = this.getMore.bind(this);
        this.state = {offset:0, searchTerm:'', sliceIndexStart:0, sliceIndexEnd:6, showRecipe: false}
        this.updateState = this.updateState.bind(this);
        this.incrementSliceIndex = this.incrementSliceIndex.bind(this);
        this.toggleShowRecipe = this.toggleShowRecipe.bind(this);
        this.getRandom = this.getRandom.bind(this);
    }    

    getRandom(){
        this.props.getRandomRecipe();
        this.toggleShowRecipe();
        window.scrollBy(0,-650);
    }

    toggleShowRecipe(){
        // eslint-disable-next-line
        this.state.showRecipe = !this.state.showRecipe;
        this.setState({showRecipe:this.state.showRecipe});
    }

    incrementSliceIndex(){
        if(this.state.sliceIndexEnd<=30){
            let indexStart = this.state.sliceIndexStart + 6;
            let indexEnd = this.state.sliceIndexEnd + 6;
            this.setState({sliceIndexStart:indexStart, sliceIndexEnd:indexEnd })
        }
    }

    updateState(){
        this.props.searchTerm !== this.state.searchTerm
        ?
        this.setState({offset:0, searchTerm:this.props.searchTerm})
        :
        this.setState({offset:this.state.offset+6});
    }
 
    getMore(searchTerm){
        this.props.getRecipesByName(searchTerm,'GET_RECIPES',this.state.offset);
        this.updateState();
    }

    componentDidMount(){
        this.updateState();
    }
    
    render(){
        var recipes = this.props.recipes.searchResults;
        return(
            <div className="cards" id="cards">
                <h1 id='cards-container'>RECIPES</h1>
                <div className='cards-container' >           
                {   recipes.results //search by name
                    ?
                    (recipes.results.map(recipe=>{
                    return <SingleCard recipe={recipe} key={recipe.id} showRecipe={this.toggleShowRecipe}
                    image={`https://spoonacular.com/recipeImages/${recipe.image}`}
                    />}))
                    :
                    (recipes.slice(this.state.sliceIndexStart,this.state.sliceIndexEnd).map(recipe=>{
                    return <SingleCard recipe={recipe} key={recipe.id} showRecipe={this.toggleShowRecipe}
                    image={recipe.image}
                    />}))
                }
                </div>
                <div className="button-ctn">
                {   recipes.results //search by name
                    ?
                    <button className="btn scew"
                        onClick={()=>this.getMore(this.props.searchTerm)}
                        >See More
                    </button>
                    :
                    <button className="btn scew"
                        onClick={()=>this.incrementSliceIndex()}
                        ><HashLink className='hashLink' to="/#cards-container">See More</HashLink>
                    </button>
                }                    
                    <button className="btn scew"><HashLink className='hashLink' to="/#search">Search Again</HashLink></button>
                    <button className="btn scew"
                      onClick={()=>this.getRandom()}
                        >Random Recipe
                    </button>
                </div>
                {this.state.showRecipe ? <RecipeDetail hideRecipe={this.toggleShowRecipe}/> : null }
            </div>
        );
    }
}

function mapStateToProps(state){
    return(
       {recipes:state.searchResults}                
    );
}

export default connect(mapStateToProps,{getRecipesByName,getRandomRecipe})(Cards);