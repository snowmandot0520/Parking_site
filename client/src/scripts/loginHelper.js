import jwt_decode from 'jwt-decode'

loginHelper = () => {
    if(localStorage.getItem('jwtToken')){
        const token = jwt_decode(localStorage.getItem('jwtToken'))
        return(token)
    } 
}