import React from 'react';
import Comment from './Comment';

class CommentSection extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            comments:[],
            newComment:""
        }
    }

    componentDidMount(){
        this.setState({comments:this.props.comments})
    }

    addNewComment = (event,index) => { 
        event.preventDefault();

    }

    render(){
        return (
            <div>
                Here are comments.
                {this.state.comments.map(comment => {
                   return (
                    <div className = "comment-section-block">
                        <Comment key={comment.id} commentObj ={comment}/>
                    </div>
                    )
                })}
                <form onSubmit>
                <input
                    type="text"
                    placeholder="Add a comment..."
                />
                </form>
            </div>
        )
    }
}


export default CommentSection; 