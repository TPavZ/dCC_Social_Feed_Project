const PostDisplay = (props) => {
    return (
        props.parentPosts.map((entry) => {
            return (
                <div>
                    <h1>{entry.name}</h1>
                    <p>{entry.post}</p>
                </div>
            )
        }));
}

export default PostDisplay;
