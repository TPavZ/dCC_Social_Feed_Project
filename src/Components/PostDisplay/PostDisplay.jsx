import LikeDislikeButton from "../LikeDislikeButton/LikeDislikeButton";



const PostDisplay = (props) => {
    return (
        props.parentPosts.map((entry) => {
            return (
                <div>
                    <h4>{entry.name}</h4>
                    <p>{entry.post}</p>
                    <LikeDislikeButton />
                </div>
            )
        }));
}

export default PostDisplay;
