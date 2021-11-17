import React, {useState} from 'react';
import LikesTotal from './LikesTotal';

function Likes(props) {
    const [totalLikes, setTotalLikes] = useState(0)

    return (
        <div>
            <LikesTotal totalLikes = {totalLikes} />
            {/* <p>{totalLikes}</p> */}
            <button onClick = {() => setTotalLikes(totalLikes + 1)} className = {totalLikes}>+</button>
            <button onClick = {() => {totalLikes >0 ? setTotalLikes(totalLikes - 1) : setTotalLikes(totalLikes)}}>-</button>
        </div>
    );
};

export default Likes;