import * as yup from 'yup';

export const schema = yup.object().shape({
    errorFname : yup.string().required("Field is required").matches(/^[A-Za-z]*$/,"must only be letters"),
    errorLname : yup.string().required("Field is required").matches(/^[A-Za-z]*$/,"must only be letters"),
    errorEmail : yup.string().email("Must be a valid email").required("Field is required"),
    errorDate : yup.string().required("Field is required")
})



const validation = (name,value) => {
    yup.reach(schema,name).validate(value)
    .then(()=> {return{[name] : ""}})
    .catch(err=> {return {[name] : err.errors[0]}})
}
