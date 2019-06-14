import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const CommentP = styled.p`
    width: 100%;
    font-size: 1.6rem;
`;



const Comment = props => {
    return (

            <CommentP><strong>{props.commentObj.username}</strong>: {props.commentObj.text}</CommentP>

    )
}

Comment.propTypes ={
    commentObj: PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })
};

export default Comment; 