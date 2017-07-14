import { createStore, applyMiddleware, combineReducers } from 'redux';
import PromiseMiddleware from 'redux-promise-middleware';
import saveRecipe from './saveRecipe';
import setCurrentRecipe from './setCurrentRecipe';
import getSearchResults from './getSearchResults';
import updateShoppingList from './updateShoppingList';

const reducer = combineReducers({
    savedRecipes:saveRecipe,
    currentRecipe:setCurrentRecipe,
    searchResults:getSearchResults,
    shoppingList:updateShoppingList
})

export default createStore(reducer,applyMiddleware(PromiseMiddleware()));
