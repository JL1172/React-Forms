import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFirstLocal } from "./useFirstLocal";

export const useFirst = (key,initialValue) => {
    const navigate = useNavigate();
    const navBack = useNavigate();
    const navLast = useNavigate();
    const navToSecond = useNavigate();

    const [data,setData] = useFirstLocal(key,initialValue);

    const changePage = (e) => {
        e.preventDefault();
        navigate("contact")
        setData({...data,
        firstPage : !data.firstPage,
        secondPage : !data.secondPage
    });
    }
    const changePageBack = (e) => {
        e.preventDefault();
        navBack("/form-1");
        setData({...data,
        firstPage : !data.firstPage,
        secondPage : !data.secondPage
    });
    }
    const changePageToLast = (e) => {
        e.preventDefault();
        navLast("profile")
        setData({...data,
            secondPage : !data.secondPage,
            thirdPage : !data.thirdPage,
        })
    }
    const changePageToSecond = e => {
        e.preventDefault();
        navToSecond("contact");
        setData({...data,
            secondPage : !data.secondPage,
            thirdPage : !data.thirdPage,
        })
    }
    const completeForm = () => {
        navigate("/form-1")
        setData({...data,
        fourthPage : !data.fourthPage,
        firstPage : false,
        secondPage : false,
        thirdPage : false,});
    }
    const reset = () => {
        setData(initialValue);
        navigate("/form-1");
        
    }
    return [data,changePage,changePageBack,changePageToLast,changePageToSecond,completeForm,reset];
}