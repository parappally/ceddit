import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import axios from 'axios';
import Post from './post.component';
import Title from './title.component';

function PostsList() {

    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('http://localhost:5000/posts');
            console.log(result.data);
            setPosts(result.data);
        };

        fetchData();
    }, []);

    return (
        <div>
            <Title text="Explore"/>
            <Grid container spacing={2}>
            {posts.map(post => (<Grid item xs={4}><Post key={post._id} subreddit={post.subreddit} title={post.title} text={post.text} username={post.username}/></Grid>))}
            </Grid>
        </div>
    );
}

export default PostsList;