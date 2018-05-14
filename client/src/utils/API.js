import axios from "axios";

const GoogleMapKEY = "&key=AIzaSyD0CbzacbBZXUg0C2cftLGr-p4GHFP0cAc";
const ParkWhizKEY = "&api_key=4206ee6642163fb508fb9b94ba7b04481e07ddf8";


const GoogleMapURL = "https://maps.googleapis.com/maps/api/geocode/json?address=";
const ParkWhizURL = "https://api.parkwhiz.com/v4/quotes/?q=coordinates:";

export default {
    searchMap: function(address){
        console.log("https://maps.googleapis.com/maps/api/geocode/json?address=");
        return axios.get(GoogleMapURL + address + GoogleMapKEY);
    },

    searchParking: function(lat, lng){
        console.log(ParkWhizURL + lat + lng + "&start_time=2018-05-01T12:00&end_time=2019-12-01T20:00&returns=offstreet_bookable" + ParkWhizKEY);
        return axios.get(ParkWhizURL + lat + lng + "&start_time=2018-05-01T12:00&end_time=2019-12-01T20:00&returns=offstreet_bookable" + ParkWhizKEY);
    }
}