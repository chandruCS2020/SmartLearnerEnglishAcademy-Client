import React,{ useContext } from 'react'
import axios from 'axios';

import { UserContext } from '../../App';
const IsloggedIn = () => {
    const { dispatch } = useContext(UserContext);
    axios
    .get("https://temptemp132323232.herokuapp.com/isLoggedIn",{ withCredentials: true })
    .then(response => {
        if(response.status===200){
            dispatch({type:"USER",payload:true});
        }else{
            dispatch({type:"USER",payload:false});
        }
    })
    .catch(error => {
      console.log("check login error",error);
    });
    return(
        <></>
    )
}

export default IsloggedIn
