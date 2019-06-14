import React from 'react';
import dummyData from '../../../src/dummy-data'
import PostContainer from '../PostContainer/PostContainer';
import SearchBar from '../SearchBar/SearchBar';
import styled from 'styled-components';

const PostSection = styled.div`
    width: 40%;
    display:flex;
    flex-flow: column wrap;
    align-items:center;
    box-sizing: border-box;
`;

const AppContainer = styled.div`
  width:100%;
  display:flex;
  flex-flow:column wrap;
  align-items:center;
  box-sizing: border-box;
`;

class PostsPage extends React.Component{
    constructor(){
      super();
      this.state={
        dummyData:[],
        searchResults:[],
        searchValue:""
      }
    }
    componentDidMount(){
      console.log('CDM')
      this.setState({
        dummyData:dummyData
      })
    }

    eventHandler = event =>{
      console.log("App-level event handler called");
      console.log(this.state.searchValue);
      this.setState({[event.target.name]:event.target.value})

    }

    searchPosts = event => {
      event.preventDefault();
      console.log("Called SearchPosts")
      this.setState({dummyData:this.state.dummyData.filter(post => post.username === this.state.searchValue)});
    }



    render(){
      return(
        <AppContainer>
          <SearchBar dataset={this.state.dummyData} searchPosts={this.searchPosts} searchEventHandler={this.eventHandler}/>

          <PostSection>
            {this.state.dummyData.map(dummyPost => <PostContainer key={dummyPost.timestamp} postData ={dummyPost}/>)}
          </PostSection>

        </AppContainer>

      )
    }
  }


  export default PostsPage