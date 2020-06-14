import React, { useState, useEffect } from 'react';
import axios from 'axios';
import  { Redirect } from 'react-router-dom'
import { getJwt } from '../helpers/jwt';

function Login(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("username", username);
        console.log("password", password);

        const user = {username, password};

        const response = await axios.post('http://localhost:5000/users/login', user);
        const token = response.data.token;
        if (token == null) {
            console.log('password is incorrect');
        } else {
            console.log('password is correct');
            localStorage.setItem('token', token);
            setLoggedIn(true);
        }
    }

    if (getJwt() !== null || loggedIn) {
        return <Redirect to="/" />
    } else {
        return (
            <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" name="username" onChange={(e) => setUsername(e.target.value)}/>
            </label>
            <br></br>
            <label>
                Password:
                <input type="text" name="password" onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <br></br>
            <input type="submit" value="Login" />
            </form>
        );
    }
}

export default Login;