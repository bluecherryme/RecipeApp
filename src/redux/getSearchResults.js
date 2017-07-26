import axios from 'axios';
import API_Key from './../API-Key';


const initialState = { searchResults: [] };

const GET_RECIPES = "GET_RECIPES";
var APIcallsLeft = 5000;

export function getRecipesByIngredients(searchTerm='potatoes,broccoli,bacon', type){
    searchTerm = searchTerm.split(/[\W]+/).map(each=>each.toLowerCase()).join('%2C');
    if (APIcallsLeft>0){
        return{
            type: type,
            payload: axios.get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=${searchTerm}&limitLicense=false&number=37&ranking=1`,
            {
                headers:{"X-Mashape-Key" : API_Key,
                        "Accept" : "application/json"}
            })
            .then((payload)=>{
                    APIcallsLeft = payload.headers["x-ratelimit-requests-remaining"];
                    console.log(APIcallsLeft);                
                    return payload;
                })
        }
    } else{
        alert("Sorry, no more API calls left today. Please try again tomorrow!");
        return{
            type: type,
            payload: {}
        }
    }
}

export function getRecipesByName(searchTerm='potato salad',type, offset){
    searchTerm = searchTerm.split(/[\W]+/).map(each=>each.toLowerCase()).join('%2C');
    if(APIcallsLeft>0){
        return{
            type: type,
            payload: axios.get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?instructionsRequired=true&limitLicense=false&number=6&offset=${offset}&query=${searchTerm}`,
            {
                headers:{"X-Mashape-Key" : API_Key,
                        "Accept" : "application/json"}
            })
            .then(
                (payload)=>{
                    APIcallsLeft = payload.headers["x-ratelimit-requests-remaining"];
                    console.log(APIcallsLeft);
                    return payload;
                })
        }
    } else{
        alert("Sorry, no more API calls left today. Please try again tomorrow!");  
        return{
            type: type,
            payload: {}
        }      
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
