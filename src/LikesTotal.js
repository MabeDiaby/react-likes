import React from 'react';
import Likes from './Likes';

function LikesTotal(props) {
    return (
        <div>
            <p>{props.totalLikes}</p>
        </div>
    );
}

export default LikesTotal;