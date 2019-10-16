import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthenticatedRoute from "./AuthenticatedRoute"
import HeaderComponent from "./HeaderComponent"
import FooterComponent from "./FooterComponent"
import LogoutComponent from "./LogoutComponent"
import ListTodoComponent from "./ListTodoComponent"
import LoginComponent from "./LoginComponent"
import WelcomeComponent from "./WelcomeComponent"
import ErrorComponent from "./WelcomeComponent"

class TodoApp extends Component {

    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <>
                        <HeaderComponent></HeaderComponent>
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" component={LoginComponent} />
                            <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent} />
                            <AuthenticatedRoute path="/todos" component={ListTodoComponent} />
                            <AuthenticatedRoute path="/logout" component={LogoutComponent} />
                            <Route component={ErrorComponent}></Route>
                        </Switch>
                        <FooterComponent></FooterComponent>
                    </>
                </Router>
            </div>
        );
    }
}

export default TodoApp;
