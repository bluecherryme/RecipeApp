import { createStore, applyMiddleware, combineReducers } from 'redux';
import PromiseMiddleware from 'redux-promise-middleware';
import saveRecipe from './saveRecipe';
import getRecipeById from './getRecipeById';
import getSearchResults from './getSearchResults';
import updateShoppingList from './updateShoppingList';

const reducer = combineReducers({
    savedRecipes:saveRecipe,
    currentRecipe:getRecipeById,
    searchResults:getSearchResults,
    shoppingList:updateShoppingList
})

export default createStore(reducer,applyMiddleware(PromiseMiddleware()));
