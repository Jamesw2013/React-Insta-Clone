import React from 'react'
import styled from 'styled-components';
import talkBubble from '../Images/talk.png';
import heart from '../Images/heart.png';


const LikesBarContainer = styled.div`
    width: 100%;
    padding-right: 1%;
    padding-left: 1%;
    box-sizing: border-box;
    border: 4px solid sienna
    display:flex;
    flex-flow: column wrap;
`;


const heartImg = styled.img`
    width: 100%; 
`;


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
        <LikesBarContainer> 
            <p onClick={this.addLike}>
            HEART
            </p>
            <p>{this.state.likesCount} likes</p>
        </LikesBarContainer>);
    };

}

export default LikesBar; 