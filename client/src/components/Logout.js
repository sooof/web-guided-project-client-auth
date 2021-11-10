import React,{useEffect}  from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Logout = (props)=> {
    console.log("Logout  props = ", props);
    console.log("Logout  props.history = ", props.history );
    console.log("Logout  history = ", useHistory());
    const {push} = useHistory()
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
            push('./login')
        })
        .catch(err => {
            console.log(err);
        })
    }, [])
    return(<div></div>);
}

export default Logout;