import axios from 'axios';

const GET_SAVED_RECIPES = "GET_SAVED_RECIPES";

const initialState = {savedRecipes:{}};

export function getRecipes(clientID){
    return(
        {
            type: GET_SAVED_RECIPES,
            payload: axios.get(`/api/recipes?userid=${clientID}`)
                    .then(payload=>{
                        console.log(payload);
                        return payload;
                    })
        }
    );
}

export default function getSavedRecipes(state=initialState,action){
    switch (action.type){
        case GET_SAVED_RECIPES + '_FULFILLED':
            return {savedRecipes : action.payload}
        default:
            return state;
    }
}