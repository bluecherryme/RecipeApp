import axios from 'axios';

const GET_SAVED_RECIPES = "GET_SAVED_RECIPES";
const DELETE_RECIPE = "DELETE_RECIPE";

const initialState = {savedRecipes:{}};

export function getRecipes(clientID){
    return(
        {
            type: GET_SAVED_RECIPES,
            payload: axios.get(`/api/recipes?userid=${clientID}`)
                    .then(payload=>{
                        return payload;
                    })
        }
    );
}

export function deleteRecipe(recipeId){
        console.log('working')
    return(
        {
            type: DELETE_RECIPE,
            payload: recipeId
        }
    )
}

export default function getSavedRecipes(state=initialState,action){
    switch (action.type){
        case GET_SAVED_RECIPES + '_FULFILLED':
            return {savedRecipes : action.payload}
        case DELETE_RECIPE:
            var recipes = Object.assign({}, state.savedRecipes);
            recipes = recipes.data.filter((recipe)=>recipe.id!== action.payload)
            var newState = Object.assign({},state.savedRecipes,{data:recipes});
            return { savedRecipes : newState }
        default:
            return state;
    }
}