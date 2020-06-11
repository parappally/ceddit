import React from 'react';
import logo from './logo.svg';
import './App.css';
import Post from "./components/post.component";
import { BrowserRouter as Router, Route} from "react-router-dom";
import ButtonAppBar from "./components/ButtonAppBar.component";
import PostsList from "./components/posts-list.component";

function App() {
  return (
    <Router>
      <div className="container">
        <ButtonAppBar />
      <br/>
        <Route path="/" exact component={PostsList} />
      </div>
    </Router>
  );
}

export default App;
