const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYWtzaGF0MTgiLCJhIjoiY2t5cHpwZ2VuMGYydTJ1cDdsejd3dXF1NiJ9.ntrkOSmjG-POJd3vgaBHaw&limit=1'

    request({ url, json: true }, (error, { body }) => {
        if (error || body.message) {
            callback('Unable to connect to location services!', undefined)
         } //else if(body.message)
        else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode