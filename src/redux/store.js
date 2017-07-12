import { createStore, applyMiddleware, combineReducers } from 'redux';
import PromiseMiddleware from 'redux-promise-middleware';
import saveRecipe from './saveRecipe';
import setCurrentRecipe from './setCurrentRecipe';
import setSearchResults from './setSearchResults';
import updateShoppingList from './updateShoppingList';

const reducer = combineReducers({
    saveRecipe,
    setCurrentRecipe,
    setSearchResults,
    updateShoppingList
})

export default createStore(reducer,applyMiddleware(PromiseMiddleware()));
