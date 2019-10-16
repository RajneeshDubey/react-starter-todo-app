import React, { Component } from 'react';

function ShowMessage(props) {
    if (props.hasLoginFailed) {
        return <div id="passwordHelp" className="alert alert-warning"> Incorrect Credentials.</div>
    }
    return null
}

export default ShowMessage;