import axios from "axios";

const GoogleMapKEY = "&key=AIzaSyD0CbzacbBZXUg0C2cftLGr-p4GHFP0cAc";
const ParkWhizKEY = "&api_key=4206ee6642163fb508fb9b94ba7b04481e07ddf8";


const GoogleMapURL = "http://maps.googleapis.com/maps/api/geocode/json?address="
const ParkWhizURL = "http://api.parkwhiz.com/v4/quotes/?q=coordinates:";

export default {
    searchMap: function(address){
        console.log("http://maps.googleapis.com/maps/api/geocode/json?address=")
        return axios.get(GoogleMapURL + address + GoogleMapKEY)
    },

    searchParking: function(lat,long){
        console.log("http://api.parkwhiz.com/v4/quotes/?q=coordinates:")
        return axios.get(ParkWhizURL + lat + long + ParkWhizKEY)
    }
}