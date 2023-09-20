import { useLocal } from "./useLocal";

export const useVisible = (key,initialValue) => {
    const [visible,setVisible] = useLocal(key,initialValue)
    
    const setVisibility = () => {
        setVisible(!visible); 
    }

    return [visible,setVisibility];
}