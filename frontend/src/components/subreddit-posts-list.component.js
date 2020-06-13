import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import axios from 'axios';
import Post from './post.component';
import Title from './title.component';

function SubredditPostsList(props) {

    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`http://localhost:5000/posts/subreddit/${props.match.params.id}`);
            console.log(result.data);
            setPosts(result.data);
        };

        fetchData();
    }, [props]);

    if (posts.length === 0) {
        return (
            <div>
                <Title text={"/r/" + props.match.params.id}/>
                <Title text={"No posts on this subreddit"}/>
            </div>
        );
    } else {
        return (
            <div>
                <Title text={"/r/" + props.match.params.id}/>
                <Grid container spacing={2}>
                {posts.map(post => (<Grid item xs={4}><Post key={post._id} subreddit={post.subreddit} title={post.title} text={post.text} username={post.username}/></Grid>))}
                </Grid>
            </div>
        );
    }
}

export default SubredditPostsList;