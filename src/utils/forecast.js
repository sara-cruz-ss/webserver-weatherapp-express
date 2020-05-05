const request = require("request");

const forecast = (latitude, longitude, callback) => {
   const url = 'http://api.weatherstack.com/current?access_key=d19713b62e581481dc82521d544728b8&query=' + latitude + ',' + longitude;
   
   request({ url, json: true }, (error, {body}) => {
     if (error){
       callback("Unable to conect to weather services!");
     }else if(body.error){
       callback('Unable to find location!', undefined)
     }else{
       callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out')
     }
   })
     
}


module.exports = forecast;