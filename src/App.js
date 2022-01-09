import React, { useState } from "react";
import PostEntry from "./Components/PostEntry/PostEntry";
import PostDisplay from "./Components/PostDisplay/PostDisplay";
import './App.css'

function App() {

  const [entries, setEntries] = useState([])

  function addNewPost(entry) {
    let tempEntries = [entry, ...entries];
    setEntries(tempEntries);
  }

  return (
    <div className='container-fluid'>
      <div className="title">
        <h1><strong>Tytter</strong>Feed</h1>
      </div>
      <div className="row">
        <div className="col"></div>
        <div className="col-6">
          <div className="display-box">
            <PostEntry addNewPost={addNewPost} />
          </div>
          <br />
          <div className="post-box">
            <div className="post-title">
              <h2><u>Feed Us!</u></h2>
            </div>
            <PostDisplay parentPosts={entries} />
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default App;
