const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = "http://api.weatherstack.com/current?access_key=92aa16da525ca02786418f2694694802&query=" + latitude + ',' + longitude;

  request({url, json: true}, (error, {body}) => {
      if (error) {
          callback('Unable to connect to weather service!', undefined);
      }
      else if (body.error) {

          callback('Unable to find the location data for the given location')
      }
      else {
          callback(undefined, body.current)
      }
  })
}

module.exports = forecast