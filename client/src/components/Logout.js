import React,{useEffect}  from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Logout = ()=> {
    console.log("Logout  history = ", useHistory());
    useEffect(() =>{
    const token = localStorage.getItem("token")
        axios.post('http://localhost:3000/api/logout', {
        headers: {
            authorization: token
            }
        })
        .then(resp => {
            //console.log("Logout  resp = ", resp);
            localStorage.removeItem('token')
        })
        .catch(err => {
            console.log(err);
        })
    }, [])
    return(<div></div>);
}

export default Logout;