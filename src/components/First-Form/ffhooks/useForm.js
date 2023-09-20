import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import { schema } from "../schema";
import * as yup from 'yup';


export const useForm = (key, initialValue,completeForm,reset) => {
    const [data, setData] = useLocalStorage(key,initialValue);
    const [afterData,setAfterData] = useState([]);
    const [error,setError] = useState({  fname: "",
    lname: "",
    email: "",
    state: "",
    username: "",
    password: "",})

    const formValidation = (name,value) => {
        yup.reach(schema,name).validate(value)
        .then(()=> setError({...error, [name] : ""}))
        .catch(err=> setError({...error, [name] : err.errors[0]}))
    }

    const change = (evt) => {
        formValidation(evt.target.name,evt.target.value)
        setData({
            ...data,
            [evt.target.name]: evt.target.value,
        })
    }
    const submit = (evt) => {
        evt.preventDefault();
        const newUser = {
            fname: data.fname,
            lname: data.lname,
            email: data.email,
            state: data.state,
            username: data.username,
            password : data.password,
        }
        axios.post("https://reqres.in/api/users", newUser)
            .then((res) => {
                setAfterData([...afterData, res.data]);
                completeForm();
            })
            .catch(err => console.error(err))
            .finally(()=> setData(initialValue))
    }
    const resetFully = (e) => {
        e.preventDefault();
        reset();
        setAfterData([]);
    }

    return [data, change, submit,afterData,error,resetFully]
}