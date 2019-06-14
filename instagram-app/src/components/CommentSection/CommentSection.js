import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CommentBlock = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 2%;
    padding-top: 0;
`;

const CommentForm = styled.form`
    width: 100%;
    display:flex;
    flex-flow: column wrap;
    align-items: center;
    
`;

const CommentFormInput = styled.input`
    width: 99%;
    font-size: 1.8rem;
    padding: 1%;
`;


class CommentSection extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            comments: props.comments,
            newComment:""
        }
    }


    eventHandler = event =>{
        this.setState({newComment:event.target.value})
    }

    addNewComment = event => {
        console.log('CALLED') 
        event.preventDefault();
        this.setState({comments: [...this.state.comments, {username: "testname", text: this.state.newComment}], newComment:""});
        event.target.reset();
    }

    render(){
        return (
            <CommentBlock>
                {this.state.comments.map(comment => {
                   return (
                    <div className = "comment-section-block">
                        <Comment commentObj ={comment}/>
                    </div>
                    )
                })}
                <CommentForm onSubmit={this.addNewComment}>
                <CommentFormInput
                    onChange={this.eventHandler}
                    type="text"
                    placeholder="Add a comment..."
                    value={this.state.newComment}
                />
                </CommentForm>
            </CommentBlock>
        );
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object)
};


export default CommentSection; 