import React, { useEffect } from "react";
import axiosWithAuth from './../utils/axiosWithAuth';

const Logout = (props)=> {
    const { push } = props.history;

    useEffect(()=> {
        // const token = localStorage.getItem("token");
        // axios.post('http://localhost:5000/api/logout', {}, {
        //     headers:{
        //         authorization: localStorage.getItem('token')
        //     }
        // })
        axiosWithAuth()
        .post('http://localhost:5000/api/logout')
        .then(resp => {
                localStorage.removeItem('token');
                push('/login');
            });
    }, []);
    return(<div></div>);
}

export default Logout;