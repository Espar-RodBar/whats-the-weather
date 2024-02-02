'use strict'

import InputView from './InputView.js'
import * as model from './model.js'
import ResultView from './ResultView.js'

async function controlGetCityWeather() {
  try {
    // Reset state:
    model.resetState()

    // reset html markupt;
    ResultView.clearMarkup()

    // get city:
    const city = InputView.getCity()
    if (!city) return

    // get coordinates
    const resPos = await model.getPos(city)
    console.log('resPos:', resPos)

    if (resPos.status === 200 && !resPos.error) {
      model.setPosState(resPos)

      // get weather data:
      const resWeather = await model.getWeatherData()
      console.log('resWeather', resWeather)
      model.setWeatherState(resWeather)

      model.buildCardData()

      // render cards
      if (!model.state.days) return

      ResultView.renderCity(model.state.city, model.state.country)
      ResultView.render(model.state.days)
    } else throw new Error('Error getting the coordinates.')
  } catch (er) {
    console.log(`controlGetCity ${er}`)
    ResultView.renderError(er)
  }
}

async function controlGetPosWeather() {
  async function success(position) {
    const { latitude, longitude } = position.coords
    await model.getPosGPS(latitude, longitude)

    // get weather data
    await model.getWeatherData()

    model.buildCardData()

    // render cards
    if (!model.state.days) return
    ResultView.renderCity(' actual position.')
    ResultView.render(model.state.days)
  }
  try {
    // Reset state:
    model.resetState()

    // reset html markupt;
    ResultView.clearMarkup()

    // get coordinates
    navigator.geolocation.getCurrentPosition(success, (err) => {
      throw new Error("Couldn't get geolocation")
    })
  } catch (er) {
    console.log(`controlGetCity ${er}`)
    ResultView.renderError(er)
  }
}

function init() {
  // await getWeatherData(METEO_API_URL);
  InputView.addHandlerGetCity(controlGetCityWeather)
  InputView.addHandlerGetPosition(controlGetPosWeather)
}

init()
