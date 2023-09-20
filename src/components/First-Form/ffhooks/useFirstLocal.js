import {useState} from 'react';

export const useFirstLocal = (key,initialValue) => {
    const [visible,setVisible] = useState(()=> {
            if (window.localStorage.getItem(key)) {
                return JSON.parse(window.localStorage.getItem(key));
            } 
            window.localStorage.setItem(key,JSON.stringify(initialValue));
            return initialValue;
    })
    const changeHandler = (value) => {
        setVisible(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    }
    return [visible,changeHandler];
}