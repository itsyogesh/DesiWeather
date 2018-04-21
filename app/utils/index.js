
const weatherDataMapper = (weatherId) => {
  let iconId = 100

  if(weatherId >= 700 && weatherId < 800) {
    iconId = 700
  }

  if(weatherId >= 600 && weatherId < 700) {
    iconId = 600
  }

  if(weatherId >= 500 && weatherId < 600) {
    iconId = 500
  }
  return iconId
}

export default {
  weatherDataMapper
}
