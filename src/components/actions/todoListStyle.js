

export const TOGGLE_EDIT = "TOGGLE_EDIT";
export const ON_CHANGE_HANDLER_FOR_STYLE = "ON_CHANGE_HANDLER_FOR_STYLE";
export const ADD_NEW_STYLE = "ADD_NEW_STYLE";

export const toggleEdit = () => {
    return{type : TOGGLE_EDIT }
}

export const onChangeHandlerForStyle = (name,value) => {
        return{type : ON_CHANGE_HANDLER_FOR_STYLE, payload : {name : name, value : value}};
}

export const addNewStyle = (colorThatChanged,colors) => {

    return{type : ADD_NEW_STYLE, 
        payload : {colorThatChanged : colorThatChanged ,colors : colors}}
}