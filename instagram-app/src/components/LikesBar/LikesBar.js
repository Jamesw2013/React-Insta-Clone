import React from 'react'

class LikesBar extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            likesCount: props.likesCount
        }
    }

    addLike = event =>{
        this.setState({likesCount: this.state.likesCount+1});
    }

    render(){
        return (
        <div className="likes-bar-container"> 
            <p onClick={this.addLike}>Heart</p>
            <p>{this.state.likesCount} likes</p>
        </div>);
    };

}

export default LikesBar; 