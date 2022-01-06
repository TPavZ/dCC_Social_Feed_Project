import React, { useState } from "react";
import PostEntry from "./Components/PostEntry/PostEntry";
import PostDisplay from "./Components/PostDisplay/PostDisplay";

function App() {

  const [entries, setEntries] = useState([{ name: " ", post: " " }])

  function addNewPost(entry) {
    let tempEntries = [entry, ...entries];
    setEntries(tempEntries);
  }

  return (
    <div>
      <h1>Stuff No One Cares About</h1>
      <i class="bi bi-hand-thumbs-up"></i>
      <PostEntry addNewPost={addNewPost} />
      <PostDisplay parentPosts={entries} />
    </div>
  );
}

export default App;
