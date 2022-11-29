"use strict";

import InputView from "./InputView.js";
import * as model from "./model.js";
import ResultView from "./ResultView.js";

async function controlGetPosWeather() {
    try {
        // get city:
        const city = InputView.getCity();
        if (!city) return;

        // get coordinates
        await model.getPos(city);

        // get weather data:
        await model.getWeatherData();

        model.buildCardData();

        // render cards
        model.state.days.forEach((day) => ResultView.init(day));
    } catch (er) {
        console.log(`controlGetCity ${er}`);
    }
}

function init() {
    // await getWeatherData(METEO_API_URL);
    InputView.addHandlerGetCity(controlGetPosWeather);
}

init();
