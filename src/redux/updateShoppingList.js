import axios from 'axios';

const GET_SHOPPINGLIST = 'GET_SHOPPINGLIST';
const DELETE_ITEM = 'DELETE_ITEM';
const ADD_ITEM = 'ADD_ITEM';
const CLEAR_ALL = 'CLEAR_ALL';

const initialState = {shoppingList : [] }

export function getShoppingList(userid){
    return(
        {
            type: GET_SHOPPINGLIST,
            payload: axios.get(`/api/shoppinglist?userid=${userid}`)
                     .then(payload=>{
                         return payload.data;
                     })
        }
    );
}

export function deleteItem(item){
    return(
        {
            type: DELETE_ITEM,
            payload: item
        }
    )
}

export function addItem(item){
    return(
        {
            type: ADD_ITEM,
            payload: item
        }
    )
}

export function clearAll(){
    return{
        type: CLEAR_ALL
    }
}

export default function updateShoppingList(state=initialState,action){
    var list = state.shoppingList;
    switch (action.type){
        case GET_SHOPPINGLIST + '_FULFILLED':
            return {shoppingList : action.payload}
        case DELETE_ITEM:
            var item = action.payload;
            var index = list.findIndex(el=>{ return el.item===item});
            return {shoppingList:[...list.slice(0,index),...list.slice(index+1)]}
        case ADD_ITEM:
            return {shoppingList:[...list,action.payload]}
        case CLEAR_ALL:
            return {shoppingList:[]}
        default:
            return state;
    }
}