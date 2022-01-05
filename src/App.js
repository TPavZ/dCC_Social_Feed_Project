import React, { useState } from "react";
import PostEntry from "./Components/PostEntry/PostEntry";
import PostDisplay from "./Components/PostDisplay/PostDisplay";

function App() {

  const [entries, setEntries] = useState([/* { name: "TEST text", post: "TEST text" } */])

  function addNewPost(entry) {
    let tempEntries = [entry, ...entries];
    setEntries(tempEntries);
  }

  return (
    <div>
      <h1>Stuff No One Cares About</h1>
      <PostEntry addNewPost={addNewPost} />
      <PostDisplay parentPosts={entries} />
    </div>
  );
}

export default App;
