import axios from 'axios'
import Config from 'react-native-config'

const fetchWeather = (cityName, unit) => {
  const url = `https://api.openweathermap.org/data/2.5/find?q=${cityName}&units=${unit || 'metric'}&APPID=${Config.OWM_API}`
  console.log(url)
  return new Promise(async (resolve, reject) => {
    try {
      let { data } = await axios.get(url)
      return resolve(data.list[data.count - 1])
    } catch(e) {
      return reject(e)
    }
  })
}

const fetchLocation = () => {
  const url = 'https://freegeoip.net/json/'

  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get(url)
      return resolve(data)
    } catch(e) {
      return reject(e)
    }
  })
}

export default {
  fetchWeather,
  fetchLocation
}
