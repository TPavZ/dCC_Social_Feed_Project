import React, { useState } from "react";
import './PostEntry.css';

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
                <label>My Name Is...</label>
                <input type='text' className="form-control" value={name} onChange={(event) => setName(event.target.value)} />
                <label>What You Got To Say?</label>
                <input type='text' className="form-control" value={post} onChange={(event) => setPost(event.target.value)} />
                <button type='submit' className="btn btn-outline-dark" style={{ 'marginTop': '1em' }}><strong>Posty!</strong></button>
            </div>
        </form>
    );
}

export default PostEntry;