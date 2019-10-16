import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SellerRouteService from "../../api/seller-portal/SellerRouteService.js"


class SellerRouteComponent extends Component {

    constructor(props) {
        super(props);
        this.retrieveListingShop = this.retrieveListingShop.bind(this);
    this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);
    }

    render() {
        return (
            <>
                <h1>Welcome</h1>
                <div className="container">
                    Welcome {this.props.match.params.name}! You can fetch the seller trade route here.<Link to="/todos">here</Link>
                </div>
                <div className="container">
                    You can click here to customize the message.
                    <button onClick={this.retrieveListingShop} className="btn btn-success">Retrieved Listing Shops.</button>
                </div>
            </>
        )
    }

    retrieveListingShop() {
        SellerRouteService.fetchAllListingShops()
        .then(response => this.handleSuccessfulResponse(response))
        .catch()
        

    }

    handleSuccessfulResponse(response)
    {
       this.setState({welcomeMessage : response.data})
    }
}



export default WelcomeComponent;