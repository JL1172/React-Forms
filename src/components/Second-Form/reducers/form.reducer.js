import { CHANGE_VALUE, SUBMIT_FORM, RESET_FORM } from "../actions/form.actions";
import axios from "axios";


export const initialState = {
    fname : "",
    lname : "",
    email : "",
    date : "",
    firstPage : false,
}



export const reducer = (state,action) => {

    switch(action.type) {
        case(CHANGE_VALUE) :
        return ({...state, [action.payload.name] : action.payload.value, })
        case(SUBMIT_FORM) :
        return ({...state, fname : "", lname : "", email : "", date : "", firstPage : !state.firstPage})
        case(RESET_FORM) : 
        return (initialState);
        default : 
        return(state);
    }
}