import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ShowComments from "./components/comments/ShowComments";
import AddComment from "./components/comments/AddComment";
import Post from "./components/comments/Post";

function App() {
  return (
    <div className="App">
      <header className="App-header">Practice React with TS</header>
      <Post />
    </div>
  );
}

export default App;
