import React from 'react';
import styled from 'styled-components';

const LoginForm = styled.form`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
`;

const LoginFormInput = styled.input`
    margin: 2%;
    font-size: 2.0rem;
`;

const LoginButton = styled.button`
    font-size: 2.0rem;
`;

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
            <LoginForm>
                <LoginFormInput 
                    type="text" 
                    placeholder="Username"
                    onChange={this.loginEventHandler}
                    name="username"
                />
                <LoginFormInput 
                    type="text"
                    placeholder="Password"
                    onChange={this.loginEventHandler}
                    name="password"
                />
                <LoginButton onClick={this.login}>Login</LoginButton>
            </LoginForm>
        </div>)
    }

}

export default Login; 