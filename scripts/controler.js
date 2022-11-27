"use strict";
import { METEO_API_URL, GEOPARSING_API_URL } from "./config.js";

import { getWeatherData, getPos, state } from "./model.js";

// const dia = daysWeekEs[date.getDay()];
// console.log(dia);
// const {lat,lon} =

await getWeatherData(METEO_API_URL);
await getPos(GEOPARSING_API_URL);

console.log(state);
