import React from 'react';

const withAuthenticate = PostsPage => Login =>
    class extends React.Component{
        constructor(props){
            super(props);
            this.state ={
                loggedIn: false
            }
        }

        componentDidMount(){
           if (localStorage.getItem('user')){
               console.log(localStorage.getItem('user'))
               this.setState({loggedIn:true})
           } else {
               this.setState({loggedIn:false})
           }
        }
        render(){
            console.log(this.state.loggedIn, "login status")
           return (this.state.loggedIn === true ? <PostsPage /> : <Login />)
        } 
    }


export default withAuthenticate; 