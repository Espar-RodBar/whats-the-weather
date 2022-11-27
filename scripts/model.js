import { METEO_API_URL, GEOPARSING_API_URL, LANGUAGE } from "./config.js";
import { AJAX } from "./helpers.js";

export const state = {
    language: LANGUAGE,
    lat: 0,
    lon: 0,
    city: "",
    data: {},
};

class DayWeatherInfo {
    constructor(date, minT, maxT, wCode) {
        this.date = new Date(date);
        this.dayOfWeekEs = this._getNameDayWeek("ES");
        this.dayOfWeekEn = this._getNameDayWeek("EN");
        this.minTemp = minT;
        this.maxTemp = maxT;
        this.weather = this._getWeather(wCode);
    }

    _getNameDayWeek(lang) {
        const dayEs = [
            "Domingo",
            "Lunes",
            "Martes",
            "Miercoles",
            "Jueves",
            "Viernes",
            "Sabado",
        ];
        const dayEn = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ];
        if (lang === "ES") return dayEs[this.date];
        if (lang === "EN") return dayEn[this.date];
    }

    _getWeather(code) {
        switch (code) {
            case 0:
                return "despejado";
                break;
            case 1:
            case 2:
            case 3:
                return "nublado";
                break;
            case 45:
            case 48:
                return "niebla";
                break;
            case 51:
            case 53:
            case 55:
            case 56:
            case 57:
                return "llovizna";
                break;
            case 61:
            case 63:
            case 65:
            case 66:
            case 67:
                return "lluvia";
                break;
            case 71:
            case 73:
            case 75:
            case 77:
                return "nieve";
                break;
            case 80:
            case 81:
            case 82:
                return "lluvia_aislada";
                break;
            case 85:
            case 86:
                return "nieve_aislada";
                break;
            case 95:
            case 96:
            case 99:
                return "tormenta";
                break;
            default:
                return "indefinido";
                break;
        }
    }
}

export async function getWeatherData(apiURL) {
    try {
        const data = await AJAX(apiURL);
        state.data.dates = data.daily.time;
        state.data.weatherCode = data.daily.weathercode;
        state.data.minTemp = data.daily.temperature_2m_min;
        state.data.maxTemp = data.daily.temperature_2m_max;
    } catch (er) {
        console.log("getWeatherData", er);
    }
}

export async function getPos(apiURL) {
    try {
        const data = await AJAX(apiURL);
        state.lat = data.latt * 1;
        state.lon = data.longt * 1;
        state.city = data.standard.city;
    } catch (er) {
        console.log("getPos", er);
    }
}
