import axios from 'axios';
import API_Key from './../API-Key';


const initialState = { searchResults: [] };

const GET_RECIPES = 'GET_RECIPES';

export function getRecipesByIngredients(searchTerm='potatoes,broccoli,bacon'){
    searchTerm = searchTerm.split(/[\W]+/).map(each=>each.toLowerCase()).join('%2C');
    return{
        type: GET_RECIPES,
        payload: axios.get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=${searchTerm}&limitLicense=false&number=3&ranking=1`,
        {
            headers:{"X-Mashape-Key" : API_Key,
                    "Accept" : "application/json"}
        })
        .then((payload)=>payload)
    }
}

export function getRecipesByName(searchTerm='potato salad'){
    searchTerm = searchTerm.split(/[\W]+/).map(each=>each.toLowerCase()).join('%2C');
    return{
        type: GET_RECIPES,
        payload: axios.get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?instructionsRequired=true&limitLicense=false&number=3&offset=0&query=${searchTerm}`,
        {
            headers:{"X-Mashape-Key" : API_Key,
                    "Accept" : "application/json"}
        })
        .then((payload)=>payload)
    }
}


export default function getSearchResults(state = initialState,action){
   switch (action.type){
       case GET_RECIPES + '_FULFILLED':
         return{ searchResults: action.payload.data }
       case GET_RECIPES + '_REJECTED':
            alert('Sorry! Something went wrong. Please try again later');
            break;
       default: return state;
   } 
}
