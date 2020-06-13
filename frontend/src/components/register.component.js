import React, { useState } from 'react';
import axios from 'axios';
import  { Redirect } from 'react-router-dom'

function Register (props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [registered, setRegistered] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("username", username);
        console.log("password", password);

        const user = {username, password};

        const response = await axios.post('http://localhost:5000/users/add', user);

        if (response.data.name != 'MongoError') {
            setRegistered(true);
        }
    }

    if (registered) {
        return <Redirect to="/login" />
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
            <input type="submit" value="Sign Up" />
            </form>
        );
    }


}

export default Register;