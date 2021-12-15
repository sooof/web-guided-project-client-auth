import React, { useEffect } from "react";
import axios from 'axios';

const Logout = ()=> {

    useEffect(()=> {
        // const token = localStorage.getItem("token");
        axios.post('http://localhost:5000/api/logout', {}, {
            headers:{
                authorization: localStorage.getItem('token')
            }
        }).then(resp => {
                localStorage.removeItem('token');
                // push('/login');
            });
    }, []);
    return(<div></div>);
}

export default Logout;