import LikeDislikeButton from "../LikeDislikeButton/LikeDislikeButton";

const PostDisplay = (props) => {

    return (
        props.parentPosts.map((entry, index) => {
            return (
                <div key={index}>
                    <h4><strong>{entry.name}</strong> Said:</h4>
                    <div>
                        <p>{entry.post}</p>
                        <LikeDislikeButton />
                    </div>
                </div >
            );
        }));
}

export default PostDisplay;
