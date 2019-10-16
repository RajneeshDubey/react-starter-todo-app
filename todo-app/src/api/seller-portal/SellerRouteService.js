import axios from "axios"

class SellerRouteService
{
    fetchAllListingShops()
    {
        var config = {
            headers: {'Access-Control-Allow-Origin': '*'}
        };
        console.log('method called')
        return axios.get('http://localhost:8080/swagger-ui.html#/listing-shop-controller/getAllListingShopsUsingGET', config)
    }

}

export default new SellerRouteService()