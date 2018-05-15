const axios = require("axios"); 
const dateFormat = require("dateformat");

const GoogleMapKEY = "&key=AIzaSyD0CbzacbBZXUg0C2cftLGr-p4GHFP0cAc";
const ParkWhizKEY = "&api_key=4206ee6642163fb508fb9b94ba7b04481e07ddf8";


const GoogleMapURL = "https://maps.googleapis.com/maps/api/geocode/json?address=";
const ParkWhizURL = "https://api.parkwhiz.com/v4/quotes/?q=coordinates:";

const now = new Date();
const startTime = dateFormat(now, "isoDate");

export default {
    searchMap: function(address){
        console.log(GoogleMapURL + address + GoogleMapKEY);
        return axios.get(GoogleMapURL + address + GoogleMapKEY);
    },

    searchParking: function(lat, lng){
        console.log(ParkWhizURL + lat +","+ lng + "&start_time=" + startTime +"T12:00&end_time=" + startTime + "T20:00" + ParkWhizKEY);
        return axios.get(ParkWhizURL + lat +","+ lng + "&start_time=" + startTime +"T12:00&end_time=" + startTime + "T20:00" + ParkWhizKEY);
    }
}
