import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Comment = props => {
    return (

        <p><strong>{props.commentObj.username}</strong>: {props.commentObj.text}</p>

    )
}

Comment.propTypes ={
    commentObj: PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })
};

export default Comment; 