# Parking-Pad
**Crowdsource parking app** that allows users to rent spare parking spaces to other users in order to facilitate stress-free parking in bottleneck areas where parking is a nightmare.
Users can also view nearby parking (non-rental).

* Visit the deployed app <a href="https://parking-pad.herokuapp.com/">here</a>.

*Best viewed as a mobile phone application (screen size)*

## View of the app
<iframe src="https://drive.google.com/file/d/1uBqJQ_O3RTp2kw6PT7S-EY1mBw62GLO4/preview" width="640" height="480"></iframe>

### Motivation
To create an app for people wanting to search news articles based on specific topics/words and date ranges, and to do so utilizing MongoDB, Express.js, React.js, and Node.js.

## Installation
- Visit the deployed site [here](https://parking-pad.herokuapp.com/) for immediate use.
- Otherwise, **fork** and **clone** the GitHub repo to your local machine.
- Ensure that you have **Node.js** and **MongoDB** installed on your machine.
- Retrieve a personal **Google Map API Key** and **ParkWhiz API Key** [here](https://developers.google.com/maps/documentation/javascript/get-api-key) and [here](http://www.parkwhiz.com/developers/).
- Start MongoDB locally by opening a CLI and entering ```mongod```. Leave this CLI window open in the background.
- Starting at the root of the repo, go to **client/src/utils/API.js** and on lines 4 and 5, replace **GoogleMapKEY** and **ParkWhizKEY** with your own api keys.
- Open a new CLI. Navigate to the cloned directory. Install the npm dependencies and start the server.
   
    ```yarn install```

    ```cd client```

    ```yarn install```

    ```cd ..```
    
    ```yarn start```

- Parking-Pad runs locally on port 3000. Open your favorite web browser at **localhost:3000**.
- Remember to view the app as a mobile-size for best experience.

### Technologies Used
- React.js
- Node.js
- NPM Packages: axios, bluebird, dateformat, moment, morgan
- express.js
- MongoDB and Mongoose
- Bootstrap
- Reactsrap
- bcrypt
- Passport JWT Strategy (User Authentication)
- Stripe (Payment Processor)
- HTML5, CSS3, JavaScript

### API Reference
- [ParkWhiz API](http://www.parkwhiz.com/developers)
- [Google Maps API](https://developers.google.com/maps/documentation/)

## Contributors
[Bettina Junghahn](https://github.com/bettijung)

[Jonathan Callahan](https://github.com/jonathantcallahan)

[Caglar Panus](https://github.com/caglarpanus)