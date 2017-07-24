import axios from 'axios';
import API_Key from './../API-Key';

const initialState = { currentRecipe: [] };

const GET_CURRENT_RECIPE = 'GET_CURRENT_RECIPE';
const GET_RANDOM_RECIPE = 'GET_RANDOM_RECIPE';
var APIcallsLeft = 5000;

export function getCurrentRecipe(ID){
    if (APIcallsLeft>0){
        return{
            type: GET_CURRENT_RECIPE,
            payload: axios.get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${ID}/information?includeNutrition=false`,
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
            type: GET_CURRENT_RECIPE,
            payload: {}
        }
    }
}

export function getRandomRecipe(){
    if (APIcallsLeft>0){
        return{
            type: GET_RANDOM_RECIPE,
            payload: axios.get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=1`,
            {
            headers:{"X-Mashape-Key" : API_Key,
                    "Accept" : "application/json"}
            })
            .then((payload)=>{
                    APIcallsLeft--;
                    console.log(APIcallsLeft);      
                    return payload;
                })
        }
    } else{
        alert("Sorry, no more API calls left today. Please try again tomorrow!");
        return{
            type: GET_RANDOM_RECIPE,
            payload: {}
        }
    }
}

export default function getRecipeById(state=initialState,action){
    switch (action.type){
        case GET_CURRENT_RECIPE + '_FULFILLED':
            return{ currentRecipe: action.payload.data }
        case GET_CURRENT_RECIPE + '_REJECTED':
            alert('Sorry! Something went wrong. Please try again later');
            break;
        case GET_RANDOM_RECIPE + '_FULFILLED':
            console.log('action',action.payload.data.recipes[0])
            return{ currentRecipe: action.payload.data.recipes[0] }
        case GET_RANDOM_RECIPE + '_REJECTED':
            alert('Sorry! Something went wrong. Please try again later');
            break;
        default:
            return state;
    }
}