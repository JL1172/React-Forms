export const ADD_TODO = "ADD_TODO";
export const ON_CHANGE_HANDLER = "ON_CHANGE_HANDLER";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";
export const REMOVE_COMPLETED = "REMOVE_COMPLETED";

export const onChangeHander = (value) => {
    return{type : ON_CHANGE_HANDLER, payload : value} ///evt.target.value
}

export const addTodo = (newTodo) => {
    return{type : ADD_TODO, payload : newTodo};
}

export const toggleComplete = (id) => {
    return{type : TOGGLE_COMPLETED, payload : id};
}

export const removeComplete = () => {
    return{type : REMOVE_COMPLETED}
}