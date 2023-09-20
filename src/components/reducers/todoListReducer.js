import { todos } from "../arrayOfTodos/arrayOfTodo";
import { ADD_TODO,REMOVE_COMPLETED, TOGGLE_COMPLETED, ON_CHANGE_HANDLER } from "../actions/todoListAction";
//!add takes addedTodo
const initialState = {
    todos : todos,
    addedTodo : "",
}

export const todoListReducer = (state = initialState, action) => {
    switch(action.type) {
        case(ON_CHANGE_HANDLER) : 
            return({...state, addedTodo : action.payload})
        case(ADD_TODO) :
            return({...state, todos : [...state.todos, action.payload], addedTodo : ""});
        case(REMOVE_COMPLETED) : 
            return({...state, todos : state.todos.filter(n => !n.completed)});
        case(TOGGLE_COMPLETED) :
            return({...state, todos : state.todos.map(n => { 
                if (n.id === action.payload) {
                    return {...n, completed : !n.completed};
                } else {
                    return n;
                }
            })});
    default : 
    return(state);
    }
}