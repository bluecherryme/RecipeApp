import axios from 'axios';
import API_Key from './../API-Key';


const initialState = { recipes: [] };

const SET_RECIPES = 'SET_RECIPES';

export function setRecipes(searchTerm='potatoes,broccoli,bacon'){
    searchTerm = searchTerm.split(/[\W]+/).map(each=>each.toLowerCase()).join('%2C');
    return{
        type: SET_RECIPES,
        payload: axios.get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=
        ${searchTerm}&limitLicense=false&number=9&ranking=1`,
        {
            headers:{"X-Mashape-Key" : API_Key,
                    "Accept" : "application/json"}
        })
        .then((payload)=>payload)
    }
}


export default function setSearchResults(state = initialState,action){
   switch (action.type){
       case SET_RECIPES + '_FULFILLED':
         return{ recipes: action.payload.data }
       case SET_RECIPES + '_REJECTED':
            alert('Sorry! Something went wrong. Please try again later');
            break;
       default: return state;
   } 
}
