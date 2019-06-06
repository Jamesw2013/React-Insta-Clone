import React from 'react';

const Comment = props => {
    return (

            <p className = "comment"><strong>{props.commentObj.username}</strong>: {props.commentObj.text}</p>

    )
}

export default Comment; 