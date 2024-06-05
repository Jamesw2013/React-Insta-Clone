import React from 'react';
import styled from 'styled-components';
import camera from '../Images/camera.png';
import instagramLogo from '../Images/instagram.png';
import compass from '../Images/compass.png';
import heart from '../Images/heart.png';
import person from '../Images/person.png';

const StyledHeader = styled.header`
    width:100%;
    display:flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    border: 1px solid lightgrey;
    padding-left: 2%;
    box-sizing: border-box;
`;

const LogoHeader = styled.div`
    width: 20%;
    display:flex;
    flex-flow: row wrap;
    align-items: center;
`;

const CameraImageDiv = styled.div`
    width: 20%;
    margin:2%;
    border-right: 1px solid black;
`;

const LogoImageDiv = styled.div`
    width: 50%
`;


const LogoImage = styled.img`
    width:100%;
`;


const StyledInput = styled.input`
    text-align:center;
    font-size: 1.6rem;
    width: 100%;
`;

const StyledForm = styled.form`
    width: 30%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    padding-left:7%;
`;

const HeaderNav = styled.nav`
    width: 30%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
`;

const HeaderNavImgDiv = styled.div`
    width: 22%;
    text-align:center;
`;

const HeaderNavImg = styled.img`
    width: 60%;
`;


const SearchBar = props =>{
    return (
        <StyledHeader>
            <LogoHeader>
                <CameraImageDiv>
                    <LogoImage src = {camera} />
                </CameraImageDiv>
                <LogoImageDiv>
                    <LogoImage src = {instagramLogo}/>
                </LogoImageDiv>


            </LogoHeader>
            <StyledForm onSubmit={props.searchPosts}>
                <StyledInput 
                onChange={props.searchEventHandler}
                name="searchValue"
                type="text"
                placeholder="Search"
                />
            </StyledForm>

            <HeaderNav>
                <HeaderNavImgDiv>
                    <HeaderNavImg src={compass} />
                </HeaderNavImgDiv>

                <HeaderNavImgDiv>
                    <HeaderNavImg src={heart} />

                </HeaderNavImgDiv>

                <HeaderNavImgDiv>
                    <HeaderNavImg src={person} />

                </HeaderNavImgDiv>
            </HeaderNav>

        </StyledHeader>
    );
}

export default SearchBar;