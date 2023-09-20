import { TOGGLE_EDIT, ON_CHANGE_HANDLER_FOR_STYLE, ADD_NEW_STYLE } from "../actions/todoListStyle";
import { keys,values } from "../arrayOfTodos/arrayOfColors";

const initialState = {
    //*
    default: {
        backgroundImage: "linear-gradient(-45deg, azure, lightblue, whitesmoke, white)",
    },
    editMode: false,
    styleChoice : "",
    newColor: "",
    choices : keys,
    matchingColor : values,
    color1 : "",
    color2 : "",
    color3 : "",
    color4 : "",
}

export const todoListStyleReducer = (state = initialState, action) => {
    switch (action.type) {
        case (TOGGLE_EDIT):
            return ({ ...state, editMode: !state.editMode });
        case (ON_CHANGE_HANDLER_FOR_STYLE):
            return ({ ...state, [action.payload.name]: action.payload.value });
        case (ADD_NEW_STYLE):
            let obj = ({
                ...state,
                editMode : false,
                default : {
                    [action.payload.colorThatChanged] : action.payload.colors,
                },
                color1 : "",
                color2 : "",
                color3 : "",
                color4 : "",
                newColor : "",
                styleChoice : "",
            })
            return obj;
        default:
            return (state);
    }
}