import { combineReducers } from "redux"
import { todoListStyleReducer } from "./todoListStyleReducer"
import { todoListReducer } from "./todoListReducer"


export const rootReduer = combineReducers({
    todoList : todoListReducer,
    todoListStyle : todoListStyleReducer,
})