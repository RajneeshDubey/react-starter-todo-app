import React, { Component } from 'react';
import AuthenticationService from "./AuthenticationService.js"

class LoginComponent extends Component {

    constructor(props) {
        super();
        this.state = {
            userName: "",
            passWord: "",
            hasLoginFailed: null,
            showSuccessMessage: null

        }

        this.handleFieldChange = this.handleFieldChange.bind(this);
        //this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this);
    }

    handleFieldChange(event) {
        console.log(this.state);
        this.setState({ [event.target.name]: event.target.value });

    }

    // handlePasswordChange(event)
    // {
    //  console.log(event.target.value);
    //  this.setState({passWord : event.target.value});

    // }

    loginClicked() {
        if (this.state.userName === 'Rajneesh' && this.state.passWord === 'password') {
            AuthenticationService.registerSuccessfulLogin(this.state.userName, this.state.passWord);
            console.log('Successful')
            //this.setState({ showSuccessMessage: true })
            //this.setState({ hasLoginFailed: false })
            this.props.history.push(`/welcome/${this.state.userName}`);
        }
        else {
            console.log('Failed')
            this.setState({ showSuccessMessage: false })
            this.setState({ hasLoginFailed: true })
            this.props.history.push("/login");

        }

    }


    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    UserName : <input type="text" name="userName" onChange={this.handleFieldChange}></input>
                    Password : <input type="password" name="passWord" onChange={this.handleFieldChange}></input>
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                    <ShowMessage hasLoginFailed={this.state.hasLoginFailed}></ShowMessage>
                </div>
            </div>
        );
    }
}

function ShowMessage(props) {
    if (props.hasLoginFailed) {
        return <div id="passwordHelp" className="alert alert-warning"> Incorrect Credentials.</div>
    }
    return null
}

export default LoginComponent;