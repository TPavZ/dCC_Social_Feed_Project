import React, { useState } from "react";

const PostEntry = (props) => {
    const [name, setName] = useState("");
    const [post, setPost] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            name: name,
            post: post
        };
        props.addNewPost(newPost)
    }

    return (
        <form onSubmit={handleSubmit} className='form-grid'>
            <div className="form-group">
                <label>Name</label>
                <input type='text' className="form-control" value={name} onChange={(event) => setName(event.target.value)} />
            </div>
            <div className="form-group">
                <label>Post</label>
                <input type='text' className="form-control" value={post} onChange={(event) => setPost(event.target.value)} />
            </div>
            <button type='submit' className="btn btn-primary" style={{ 'marginTop': '1em' }}>Submit Dat Shit</button>
        </form>
    );
}

export default PostEntry;