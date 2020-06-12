import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import ButtonAppBar from "./components/ButtonAppBar.component";
import PostsList from "./components/posts-list.component";
import SubredditPostsList from "./components/subreddit-posts-list.component";
import UserPostsList from "./components/user-posts-list.component";
import CreatePost from "./components/create-post.component";

function App() {
  return (
    <Router>
      <div className="container">
        <ButtonAppBar />
      <br/>
        <Route path="/" exact component={PostsList} />
        <Route path="/r/:id" component={SubredditPostsList} />
        <Route path="/u/:id" component={UserPostsList} />
        <Route path="/create" component={CreatePost} />
      </div>
    </Router>
  );
}

export default App;
