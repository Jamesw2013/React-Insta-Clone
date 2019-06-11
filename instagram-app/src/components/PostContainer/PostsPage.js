import React from 'react';
import dummyData from '../../../src/dummy-data'
import PostContainer from '../PostContainer/PostContainer';
import SearchBar from '../SearchBar/SearchBar';
import '../../App.css';

class PostsPage extends React.Component{
    constructor(){
      super();
      this.state={
        dummyData:[],
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
        <div className="main-container">
          <SearchBar dataset={this.state.dummyData} searchPosts={this.searchPosts} searchEventHandler={this.eventHandler}/>
          {this.state.dummyData.map(dummyPost => <PostContainer key={dummyPost.timestamp} postData ={dummyPost}/>)}
        </div>
      )
    }
  }


  export default PostsPage