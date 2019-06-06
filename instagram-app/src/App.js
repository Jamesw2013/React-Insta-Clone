import React from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      dummyData:[]
    }
  }
  componentDidMount(){
    console.log('CDM')
    this.setState({
      dummyData:dummyData
    })
  }
  render(){
    return(
      <div className="main-container">
        <SearchBar />
        {this.state.dummyData.map(dummyPost => <PostContainer postData ={dummyPost}/>)}
      </div>
    )
  }
}

export default App;
