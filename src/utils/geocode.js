const request = require("request");

const geocode = (address, callback) => {
  const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoibXVraXQzNDIiLCJhIjoiY2twejJndzZuMGEwNzJwbW5ieGlsOHllbyJ9.3HlRyy2C96ww0aJ7f_jQ2g&limit=1";

  request({url, json: true}, (error, {body}) => {
      if (error) {
          callback('Unable to connect to location service!', undefined);
      }
      else if (body.message || body.features.length === 0) {

          callback('Location Not Found, Try another search')
      }
      else {
          callback(undefined, {
              latitude: body.features[0].center[1],
              longitude: body.features[0].center[0],
              location:  body.features[0].place_name

          })
      }
  })
}

module.exports = geocode