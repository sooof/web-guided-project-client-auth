import React, { useEffect, useHistory} from "react";
import axios from 'axios';

const Logout = ()=> {
    useEffect(()=> {
        const token = localStorage.getItem("token");

        axios.post('http://localhost:5000/api/logout', {
            headers: {
                authorization: token
            }
        })
        .then(resp => {
            localStorage.removeItem('token');
            console.log(useHistory());
        })
    }, []);
    return(<div></div>);
}

export default Logout;