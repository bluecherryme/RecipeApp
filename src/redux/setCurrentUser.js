import axios from 'axios';

const initialState = {currentUser : {}};

const GET_CURRENT_USER = "GET_CURRENT_USER";

export function getCurrentUser(){
    return {
        type: GET_CURRENT_USER,
        payload: axios.get('/auth/me')
                .then( payload => payload)
  }    
}

export default function setCurrentUser(state=initialState,action){
    switch(action.type){
        case GET_CURRENT_USER + '_FULFILLED':
            return {currentUser : action.payload}
        default:
            return state;
    }
}