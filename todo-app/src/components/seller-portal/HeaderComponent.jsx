import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import AuthenticationService from "./AuthenticationService.js"

class HeaderComponent extends Component {
    render() {

        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        console.log('isUserLoggerIn : ' + isUserLoggedIn);

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="http://www.zinigo.com">www.zinigo.com</a></div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/Rajneesh">Home</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/todos">TODOs</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end" >
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default HeaderComponent