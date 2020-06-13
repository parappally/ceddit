import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getJwt } from '../helpers/jwt';
import  { Redirect } from 'react-router-dom'

function CreatePost() {

    const [username, setUsername] = useState('');
    const [subreddit, setSubreddit] = useState('');
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const browserJwt = getJwt();
            // const authOptions = {
            //     'Authorization': `Bearer ${browserJwt}`
            // };
            const options = {
                headers: {'Authorization': `Bearer ${browserJwt}`}
            };
            const response = await axios.post('http://localhost:5000/users/api/posts', { username, subreddit, title, text }, options);
            console.log(response);
            const tokenUsername = (response.data.authData.username);

            if (username === tokenUsername) {
                const newPost = {username, subreddit, title, text};
                await axios.post('http://localhost:5000/posts/add', newPost);
            }
        } catch (err) {
            throw(err);
        }

    }

    return (
        <form onSubmit={handleSubmit}>
        <label>
            Username:
            <input type="text" name="username" onChange={(e) => setUsername(e.target.value)}/>
        </label>
        <br></br>
        <label>
            Subreddit:
            <input type="text" name="subreddit" onChange={(e) => setSubreddit(e.target.value)}/>
        </label>
        <br></br>
        <label>
            Title:
            <input type="text" name="title" onChange={(e) => setTitle(e.target.value)}/>
        </label>
        <br></br>
        <label>
            Text:
            <input type="text" name="text" onChange={(e) => setText(e.target.value)}/>
        </label>
        <br></br>
        <input type="submit" value="Submit" />
        </form>
    );
}

export default CreatePost;