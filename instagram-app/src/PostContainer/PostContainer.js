import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
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


             <CommentSection comments={props.postData.comments}/>
        </div>
    )
}



export default PostContainer; 
