import axios from 'axios';

const initialState = {currentUser : {}};

const GET_CURRENT_USER = "GET_CURRENT_USER";

export function getCurrentUser(){
    return {
        type: GET_CURRENT_USER,
        payload: axios.get('/auth/me')
                .then( payload => {
                console.log({payload:payload})
                return payload;
    })
  }    
}

export default function setCurrentUser(state=initialState,action){
        console.log("action is " , action.type);
    switch(action.type){
        case GET_CURRENT_USER + '_FULFILLED':
            console.log("this is the reducer:" + action.payload);
            return {currentUser : action.payload}
        default:
            return state;
    }
}