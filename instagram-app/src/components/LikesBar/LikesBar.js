import React from 'react'
import styled from 'styled-components';
import talkBubble from '../Images/talk.png';
import heart from '../Images/heart2.png';


const LikesBarContainer = styled.div`
    width: 100%;
    padding-right: 1%;
    padding-left: 1%;
    box-sizing: border-box;
    display:flex;
    flex-flow: column wrap;
`;


const ImgDiv = styled.div`
    width: 10%;
    text-align:center;
`;

const ImgDivTalk = styled.div`
    width: 5%;
`;

const ImgDivContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
`;


const LikesP = styled.p`
    font-weight: bold;
    font-size: 1.8rem;
    padding-left: 1%;
    margin-bottom: 0;
`;

const TalkImg = styled.img`
    width: 120%;
`;

const HeartImg = styled.img`
    width: 50%;
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
            <ImgDivContainer>
                <ImgDiv>
                    <HeartImg src={heart} onClick={this.addLike}/>
                </ImgDiv>
                <ImgDivTalk>
                    <TalkImg src ={talkBubble} alt="Talk bubble"/>
                </ImgDivTalk>
            </ImgDivContainer>
            <LikesP>{this.state.likesCount} likes</LikesP>
        </LikesBarContainer>);
    };

}

export default LikesBar;