import React, { useEffect, useState } from 'react';
import axios from 'axios';
import  { Redirect } from 'react-router-dom'

function Login(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("username", username);
        console.log("password", password);

        // const newPost = {username, subreddit, title, text};

        const user = {username, password};

        const response = await axios.post('http://localhost:5000/users/auth', user);
        const token = response.data.token;
        localStorage.setItem('token', token);
        setLoggedIn(true);
    }

    if (loggedIn) {
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
            <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default Login;