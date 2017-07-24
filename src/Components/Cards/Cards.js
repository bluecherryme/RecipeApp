import React, {Component} from 'react';
import {connect} from 'react-redux';
import SingleCard from './SingleCard/SingleCard';
import {getRecipesByName} from './../../redux/getSearchResults';
import './Cards.css';


class Cards extends Component{
    constructor(){
        super();
        this.getMore = this.getMore.bind(this);
        this.state = {offset:0, searchTerm:''}
        this.updateState = this.updateState.bind(this);

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
        console.log(this.props.searchTerm)
        console.log('offset', this.state.offset);
        var recipes = this.props.recipes.searchResults;
        return(
            <div className="cards">
                <h1>Cards</h1>
                <div className='search-results'>           
                {   recipes.results 
                    ?
                    (recipes.results.map(recipe=>{
                    return <SingleCard recipe={recipe} key={recipe.id} 
                    image={`https://spoonacular.com/recipeImages/${recipe.image}`}
                    />}))
                    :
                    (recipes.map(recipe=>{
                    return <SingleCard recipe={recipe} key={recipe.id}
                    image={recipe.image}
                    />}))
                }
                </div>
                <button className="see-more"
                    onClick={()=>this.getMore(this.props.searchTerm)}
                    >See More
                </button>
                <button className="search-again">Search Again</button>
            </div>
        );
    }
}

function mapStateToProps(state){
    return(
       {recipes:state.searchResults}                
    );
}

export default connect(mapStateToProps,{getRecipesByName})(Cards);