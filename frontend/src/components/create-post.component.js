import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CreatePost() {

    const [username, setUsername] = useState('');
    const [subreddit, setSubreddit] = useState('');
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("username", username);
        console.log("subreddit", subreddit);
        console.log("title", title);
        console.log("text", text);

        const newPost = {username, subreddit, title, text};

        await axios.post('http://localhost:5000/posts/add', newPost);
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