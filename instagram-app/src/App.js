import React from 'react';
import PostsPage from './components/PostContainer/PostsPage';
import withAuthenticate from './components/Authentication/withAuthenticate'
import './App.css';

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage);

class App extends React.Component{
  constructor(){
    super();
    this.state={

    }
  }

  render(){
    return(
      <div className="main-container">
        <ComponentFromWithAuthenticate />
      </div>
    )
  }
}

export default App;
