import axios from 'axios'

const apiKey = 'AIzaSyDz9l4M_Hjs0BXevxJN93Ptep60_0XIVkI'

export default {
    getCoordFromAddress: (address) => {
        axios
            .get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=${apiKey}`)
            .then(data => console.log(data.data.results[0].geometry.location))
            .catch(err => console.log(err))
    },
    distanceMatrix: (destination, parkingSpace) => {
        axios
            .get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=40.6655101,-73.89188969999998&destinations=enc:_kjwFjtsbMt%60EgnKcqLcaOzkGari%40naPxhVg%7CJjjb%40cqLcaOzkGari%40naPxhV:&key=${apiKey}`)
            .then(data => console.log(data))
            .catch(err => console.log(err))

    }
}