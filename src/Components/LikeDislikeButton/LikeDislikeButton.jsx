import React, { useState } from "react";

const LikeDislikeButton = (props) => {
    const [defaltLike, clickedLike] = useState(false);
    const [defaltDislike, clickedDislike] = useState(false);

    function handleLike(event) {
        event.preventDefault();
        if (defaltLike === true) {
            clickedLike(false);
            clickedDislike(false);
        }
        else if (defaltLike === false) {
            let updatedClick = !defaltLike;
            clickedDislike(defaltLike);
            clickedLike(updatedClick);
        }
    }

    function handleDislike(event) {
        event.preventDefault();
        if (defaltDislike === true) {
            clickedLike(false);
            clickedDislike(false);
        }
        else if (defaltDislike === false) {
            let updatedClick = !defaltDislike;
            clickedLike(defaltDislike);
            clickedDislike(updatedClick);
        }
    }

    if (defaltLike === true && defaltDislike === false) {
        return (
            <div>
                <button type="button" className="btn btn-outline-success" onClick={handleLike}><strong>I Likey!</strong></button>
                <button type="button" className="btn btn-outline-dark" onClick={handleDislike}>Dislike</button>
            </div>
        );
    }

    else if (defaltLike === false && defaltDislike === true) {
        return (
            <div>
                <button type="button" className="btn btn-outline-dark" onClick={handleLike}>Like</button>
                <button type="button" className="btn btn-outline-danger" onClick={handleDislike}><strong>No Likey!</strong></button>
            </div>
        );
    }

    return (
        <div>
            <button type="button" className="btn btn-outline-dark" onClick={handleLike}>Like</button>
            <button type="button" className="btn btn-outline-dark" onClick={handleDislike}>Dislike</button>
        </div>
    )
}

export default LikeDislikeButton