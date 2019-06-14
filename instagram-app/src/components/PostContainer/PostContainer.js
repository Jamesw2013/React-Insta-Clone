import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import Username from '../Styles/Reusables/Username';
import LikesBar from '../LikesBar/LikesBar';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const UserThumbnailDiv = styled.div`
    width: 6%;
    margin: 2%;
`;

const UserThumbnail = styled.img`
    width:100%;
    border-radius: 40px;
`;

const PostImgDiv = styled.div`
    width:100%;
`;

const PostImgMain = styled.img`
    width:100%;
`;

const PostContainerMainDiv = styled.div`
    display:flex;
    flex-flow: column wrap;
    width: 100%;
    border: 1px solid black;
    align-items: center;
    margin-top: 2%;
    margin-bottom: 2%;
  
    padding-bottom:2%;
`;

const PostContainerHeader = styled.div`
    display:flex;
    flex-flow: row wrap;
    width: 100%;
`;

const PostContainer = props => {
    return (
        <PostContainerMainDiv>
            <PostContainerHeader>
                <UserThumbnailDiv>
                    <UserThumbnail src={props.postData.thumbnailUrl} alt={props.postData.username}/>
                </UserThumbnailDiv>

                <Username>{props.postData.username}</Username>
            </PostContainerHeader>

            <PostImgDiv>
                 <PostImgMain src={props.postData.imageUrl} alt={props.postData.imageUrl}/>
            </PostImgDiv>


            <LikesBar likesCount={props.postData.likes}/>
            <CommentSection comments={props.postData.comments}/>
        </PostContainerMainDiv>
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
