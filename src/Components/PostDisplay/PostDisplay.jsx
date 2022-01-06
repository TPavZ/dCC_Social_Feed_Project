import LikeDislike from "../LikeDislike/LikeDislike";

const PostDisplay = (props) => {
    return (
        props.parentPosts.map((entry) => {
            return (
                <div>
                    <h4>{entry.name}</h4>
                    <p>{entry.post}</p>
                    <div>
                        <LikeDislike />
                    </div>
                </div>
            )
        }));
}

export default PostDisplay;
