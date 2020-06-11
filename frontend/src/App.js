import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import ButtonAppBar from "./components/ButtonAppBar.component";
import PostsList from "./components/posts-list.component";
import SubredditPostsList from "./components/subreddit-posts-list.component";
import UserPostsList from "./components/user-posts-list.component";

function App() {
  return (
    <Router>
      <div className="container">
        <ButtonAppBar />
      <br/>
        <Route path="/" exact component={PostsList} />
        <Route path="/r/:id" component={SubredditPostsList} />
        <Route path="/u/:id" component={UserPostsList} />
      </div>
    </Router>
  );
}

export default App;
