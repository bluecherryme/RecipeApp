import axios from 'axios';

const GET_SHOPPINGLIST = 'GET_SHOPPINGLIST';
const DELETE_ITEM = 'DELETE_ITEM';

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

export default function updateShoppingList(state=[],action){
    switch (action.type){
        case GET_SHOPPINGLIST + '_FULFILLED':
            return {shoppingList : action.payload}
        case DELETE_ITEM:
            var item = action.payload;
            var list = state.shoppingList;
            var index = list.findIndex(el=>{ return el.item===item});
            return {shoppingList:[...list.slice(0,index),...list.slice(index+1)]}
        default:
            return state;
    }
}