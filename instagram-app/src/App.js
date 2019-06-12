import React from 'react';
import PostsPage from './components/PostContainer/PostsPage';
import Login from './components/Login/Login'
import withAuthenticate from './components/Authentication/withAuthenticate'

import './App.css';


class App extends React.Component{
  constructor(){
    super();
    this.state={

    }
  }

  render(){
    return(
      <div className="main-container">
        <PostsPage />
      </div>
    )
  }
}

export default withAuthenticate(App)(Login);
