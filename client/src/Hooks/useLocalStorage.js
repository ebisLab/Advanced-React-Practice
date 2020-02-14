
import {useState} from 'react'
export const useLocalStorage = (key, initialValue) =>{
const [storedValue, setStoredValue] = useState(()=>{

//check something from local storage
const checkValue = window.localStorage.getItem(key)

// if(checkValue){
//     JSON.parse(checkValue)
// }else {
//     initialValue
// }
return checkValue ? JSON.parse(checkValue) : initialValue

});

const setValue = value =>{
    setStoredValue(value) //put this expression in the local storage
    window.localStorage.setItem(key, JSON.stringify(value));
}

    return [storedValue, setValue]
}