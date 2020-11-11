const Auth = {}
const axios = require('axios');
const { Redirect } = require('react-router-dom');
Auth.NoAuth = () =>{
    axios.interceptors.response.use(response => response, error => {
        if(error.response.status === 401) 
        {
            // <Redirect to="/signup" />
        }
    });
}

module.exports = Auth;