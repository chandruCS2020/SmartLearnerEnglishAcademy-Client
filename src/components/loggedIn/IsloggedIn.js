import React,{ useContext } from 'react'
import axios from 'axios';

import { UserContext } from '../../App';
import { useHistory } from 'react-router-dom';
const IsloggedIn = () => {
    const history = useHistory();
    const { dispatch } = useContext(UserContext);
    axios
    .get("https://testapic.herokuapp.com/isLoggedIn",{ withCredentials: true })
    .then(response => {
        if(response.status===200){
            dispatch({type:"USER",payload:true});
            if(response.data){
                history.push("/Dashboard/Admin")
            }
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
