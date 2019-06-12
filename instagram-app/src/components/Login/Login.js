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
        const username = this.state.username;
        localStorage.setItem('user', username);

        const password = this.state.password;
        localStorage.setItem('password', password);
        window.location.reload();
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
                    onChange={this.loginEventHandler}
                    name="username"
                />
                <input 
                    type="text"
                    placeholder="Password"
                    onChange={this.loginEventHandler}
                    name="password"
                />
                <button onClick={this.login}>Login</button>
            </form>
        </div>)
    }

}

export default Login; 