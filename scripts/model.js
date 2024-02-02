import {
  METEO_API_URL,
  METEO_API_OPT,
  GEOPARSING_API_URL,
  LANGUAGE,
  MAX_DAYS,
} from './config.js'

import { AJAX } from './helpers.js'

export const state = {
  language: LANGUAGE,
  lat: 0,
  lon: 0,
  city: '',
  country: '',
  data: {},
  days: [],
}

export function setPosState(place) {
  state.lat = place.latt * 1
  state.lon = place.longt * 1
  state.city = place.standard.city
  state.country = place.standard.countryname
}

export function setWeatherState(weatherData) {
  state.data.dates = weatherData.daily.time
  state.data.weatherCode = weatherData.daily.weathercode
  state.data.minTemp = weatherData.daily.temperature_2m_min
  state.data.maxTemp = weatherData.daily.temperature_2m_max
}

export function resetState() {
  state.language = LANGUAGE
  state.lat = 0
  state.lon = 0
  state.city = ''
  state.country = ''
  state.data = {}
  state.days.length = 0
}

class DayWeatherInfo {
  constructor(index, date, minT, maxT, wCode) {
    this.index = index
    this.date = date
    this.dayOfWeekEs = this._getNameDayWeek('ES')
    this.dayOfWeekEn = this._getNameDayWeek('EN')
    this.minTemp = minT
    this.maxTemp = maxT
    this.weather = this._getWeather(wCode)
  }

  _getNameDayWeek(lang) {
    const dayEs = [
      'Domingo',
      'Lunes',
      'Martes',
      'Miercoles',
      'Jueves',
      'Viernes',
      'Sabado',
    ]
    const dayEn = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ]
    if (lang === 'ES') return dayEs[new Date(this.date).getDay()]
    if (lang === 'EN') return dayEn[new Date(this.date).getDay()]
  }

  _getWeather(code) {
    switch (code) {
      case 0:
        return 'despejado'
        break
      case 1:
      case 2:
      case 3:
        return 'nublado'
        break
      case 45:
      case 48:
        return 'niebla'
        break
      case 51:
      case 53:
      case 55:
      case 56:
      case 57:
        return 'llovizna'
        break
      case 61:
      case 63:
      case 65:
      case 66:
      case 67:
        return 'lluvia'
        break
      case 71:
      case 73:
      case 75:
      case 77:
        return 'nieve'
        break
      case 80:
      case 81:
      case 82:
        return 'lluvia_aislada'
        break
      case 85:
      case 86:
        return 'nieve_aislada'
        break
      case 95:
      case 96:
      case 99:
        return 'tormenta'
        break
      default:
        return 'indefinido'
        break
    }
  }
}

export async function getWeatherData() {
  try {
    const fetchURL = `${METEO_API_URL}latitude=${state.lat}&longitude=${state.lon}${METEO_API_OPT}`
    const data = await AJAX(fetchURL)

    return data
  } catch (er) {
    throw er
  }
}

export async function getPos(city) {
  try {
    const res = await fetch(`/api/getPos/${city}`)
    const data = await res.json()

    return data
  } catch (er) {
    console.log('getPos Error:', er)
  }
}

export function getPosGPS(latitude, longitude) {
  try {
    state.lat = latitude * 1
    state.lon = longitude * 1
    state.city = ''
  } catch (er) {
    console.error('getPos', er)
  }
}

// dates:(7) ['2022-11-28', '2022-11-29', '2022-11-30', '2022-12-01', '2022-12-02', '2022-12-03', '2022-12-04']
// maxTemp:(7) [14.8, 14.2, 13.8, 12.5, 13.6, 12.8, 13.4]
// minTemp:(7) [10.8, 7.3, 5.5, 5.5, 5, 2.8, 3.2]
// weatherCode:(7) [61, 3, 3, 3, 3, 2, 45]

export function buildCardData() {
  const { data } = state

  for (let i = 0; i < MAX_DAYS; i++) {
    const day = new DayWeatherInfo(
      i + 1,
      data.dates[i],
      data.minTemp[i],
      data.maxTemp[i],
      data.weatherCode[i]
    )

    state.days.push(day)
  }
}
