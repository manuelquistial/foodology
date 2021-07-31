const colombianHolidays = require("colombian-holidays").default;
const dateFormat = require('dateformat');

const distance = 5000

const chicken = {
    "lat": 3.4242814233739614,
    "lon": -76.54170365914733
}

const schedule_days = {
    first_days : ['monday', 'tuesday', 'wednesday']
}

const ramdonDistance = () => {  
    return Math.floor(
      Math.random() * (distance - 0) + distance
    )
  }
  
    
const newLatLon = (new_distance) => {
    lat = chicken.lat
    lon = chicken.lon
    lat = lat + (180/Math.PI)*(new_distance/6378137)
    lon = lon + (180/Math.PI)*(new_distance/6378137)/Math.cos(lat)
    let new_position = {
        lat: lat,
        lon: lon
    }
    return new_position
}

const scheduleAvailable = () => {
    let localTime = new Date();
    hours = localTime.getHours()
    time = localTime.toLocaleString(undefined, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })

    const holidays = colombianHolidays(localTime.getFullYear())
    date  = dateFormat(new Date(), "yyyy-mm-dd");
    const holiday = holidays.find(element => element.celebrationDate == date)

    if((holiday != undefined) && (schedule_days.first_days.indexOf(time.split(",")[0].toLowerCase()) !== -1)){
        if(hours > 6 && hours << 22){
            return true
        }
    }else{
        if(hours > 6 && hours << 00){
            return true
        }
    }

    return false

}

/**
 * This function should get the average distance of restaurant using scrapping of RAPPI
 * @param {} req
 * @param {*} res   Here should return random position in the distance os 5 km
 */
const average = (req, res) => {
    const available = scheduleAvailable()
    let new_position = ''
    if(available){
        const random_distance = ramdonDistance()
        new_position = newLatLon(random_distance)
    }else{
        new_position = "Out of schedule"
    }
    res.send(new_position)
}


module.exports = {
    average
}