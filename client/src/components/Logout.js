import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom';

import axios from 'axios';

const Logout = (props)=> {
    console.log(props.history);

    console.log(useHistory());
    useEffect(()=> {
        const token = localStorage.getItem("token");

        axios.post('http://localhost:5000/api/logout', {
            headers: {
                authorization: token
            }
        })
        .then(resp => {
            localStorage.removeItem('token');
        })
    }, []);
    return(<div></div>);
}

export default Logout;