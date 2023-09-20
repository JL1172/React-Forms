import * as yup from 'yup';
import { states } from './fifteyState';

export const schema = yup.object().shape({
    fname: yup.string().required("First name field is required").matches(/^[A-Za-z]*$/, "Must only be letters").min(3,"Must have more than three characters"),
    lname: yup.string().required("Last name field is required").matches(/^[A-Za-z]*$/, "Must only be letters").min(3,"Must have more than three characters"),
    email: yup.string().required("Email field is required").email("Must be a valid email"),
    state: yup.string().oneOf(states,"Must choose a state"),
    username: yup.string().required("Username field is required").min(6,"Must be longer").matches(/[^A-Za-z]+$/,"Must end with a number"),
    password: yup.string().required("Password is required").min(6,"Must be longer").matches(/[^0-9A-Za-z]+$/,"Must have one special character"),
})