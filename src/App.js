import React, { useState } from "react";
import PostEntry from "./Components/PostEntry/PostEntry";

function App() {

  const [entries, setEntries] = useState([{ name: " ", post: " " }])

  function addNewPost(entry) {
    let tempEntries = [...entries, entry];
    setEntries(tempEntries);
  }

  return (
    <div>
      <h1>Stuff No One Cares About</h1>
      <PostEntry addNewPost={addNewPost} />
    </div>
  );
}

export default App;
