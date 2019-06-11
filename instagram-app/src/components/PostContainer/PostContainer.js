import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import LikesBar from '../LikesBar/LikesBar';
import PropTypes from 'prop-types';
import './PostContainer.css'

const PostContainer = props => {
    return (
    <div className="postcontainer">
        <div className="postcontainer-header">
            <div className="thumbnailImg">
                <img src={props.postData.thumbnailUrl} alt={props.postData.username}/>
            </div>

            <div>Username: {props.postData.username}</div>
        </div>

        <div className="main-img">
                <img src={props.postData.imageUrl} alt={props.postData.imageUrl}/>

        </div>


        <LikesBar likesCount={props.postData.likes}/>
        <CommentSection comments={props.postData.comments}/>
    </div>
)}

PostContainer.propTypes ={
    postData: PropTypes.shape({
        username: PropTypes.string.isRequired,
        thumbnailUrl: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        timestamp: PropTypes.string.isRequired,
        comments: PropTypes.arrayOf(
            PropTypes.shape({
                username: PropTypes.string,
                text: PropTypes.string
            })
        )
    })
}


export default PostContainer; 
