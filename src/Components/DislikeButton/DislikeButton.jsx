import React, { useState } from "react";

const DislikeButton = (props) => {
    const [defaltDislike, clickedLike] = useState(false);

    function handleDislike(event) {
        event.preventDefault();
        let updatedClick = !defaltDislike;
        clickedLike(updatedClick);
    }

    if (defaltDislike) {
        return (
            <div>
                <button type="button" className="btn btn-outline-danger" onClick={handleDislike}><strong>No Likey</strong></button>
            </div>
        )
    }

    else return (
        <div>
            <button type="button" className="btn btn-outline-dark" onClick={handleDislike}>Dislike</button>
        </div>
    )

}

export default DislikeButton