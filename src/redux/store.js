import { createStore, applyMiddleware, combineReducers } from 'redux';
import PromiseMiddleware from 'redux-promise-middleware';
import getSavedRecipes from './getSavedRecipes';
import getRecipeById from './getRecipeById';
import getSearchResults from './getSearchResults';
import updateShoppingList from './updateShoppingList';
import setCurrentUser from './setCurrentUser';

const reducer = combineReducers({
    savedRecipes:getSavedRecipes,
    currentRecipe:getRecipeById,
    searchResults:getSearchResults,
    shoppingList:updateShoppingList,
    currentUser: setCurrentUser
})

export default createStore(reducer,applyMiddleware(PromiseMiddleware()));
