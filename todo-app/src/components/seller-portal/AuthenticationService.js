class AuthenticationService{

    registerSuccessfulLogin(username, password)
    {
    sessionStorage.setItem('authenticatedUser',username);
    console.log('succesfully logged in')
    }

    logout()
    {
        sessionStorage.removeItem('authenticatedUser');
        console.log('logged out successfully')   
    }
    
    isUserLoggedIn()
    {
        let user = sessionStorage.getItem('authenticatedUser');
        if(user===null) return false;
        return true;
    }

}

export default new AuthenticationService()