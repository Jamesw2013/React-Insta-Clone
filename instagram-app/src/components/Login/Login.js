import React from 'react';

class Login extends React.Component{
    constructor(){
        super();
        this.state={
            username:"",
            password:""
        }
    }
    login = event => {
        event.preventDefault();


    }
    loginEventHandler = event =>{
        this.setState({[event.target.name]:event.target.value});
    }
    render(){
        return(<div className="login-container">
            <form>
                <input 
                    type="text" 
                    placeholder="Username"
                    onChange={loginEventHandler}
                    value={this.state.username}
                />
                <input 
                    type="text"
                    placeholder="Password"
                    onChange={loginEventHandler}
                    value={this.state.password}
                />
                <button onClick={login}>Login</button>
            </form>
        </div>)
    }

}

export default Login; 