import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => {
    return (

            <p className = "comment"><strong>{props.commentObj.username}</strong>: {props.commentObj.text}</p>

    )
}

Comment.propTypes ={
    commentObj: PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })
};

export default Comment; 