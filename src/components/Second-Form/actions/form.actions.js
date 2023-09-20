export const CHANGE_VALUE = "CHANGE_VALUE";
export const SUBMIT_FORM = "SUBMIT_FORM";
export const RESET_FORM = "RESET_FORM";

export const change = e => {
    return { type : CHANGE_VALUE, payload : {name : e.target.name, value : e.target.value}}
}
export const submit = e => {
    e.preventDefault();
    return {type : SUBMIT_FORM }
}
export const reset = () => {
    return {type : RESET_FORM}
}
