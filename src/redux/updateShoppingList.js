import axios from 'axios';

const GET_SHOPPINGLIST = 'GET_SHOPPINGLIST';

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

export default function updateShoppingList(state=[],action){
    switch (action.type){
        case GET_SHOPPINGLIST + '_FULFILLED':
            return {shoppingList : action.payload}
        default:
            return state;
    }
}