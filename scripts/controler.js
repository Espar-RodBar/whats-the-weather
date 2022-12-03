"use strict";

import InputView from "./InputView.js";
import * as model from "./model.js";
import ResultView from "./ResultView.js";

async function controlGetPosWeather() {
    try {
        // Reset state:
        model.resetState();

        // reset html markupt;
        ResultView.clearMarkup();

        // get city:
        const city = InputView.getCity();
        if (!city) return;

        // get coordinates
        await model.getPos(city);

        // get weather data:
        await model.getWeatherData();

        model.buildCardData();

        // render cards
        if (!model.state.days) return;
        ResultView.render(model.state.days);
    } catch (er) {
        console.log(`controlGetCity ${er}`);
        ResultView.renderError(er);
    }
}

function init() {
    // await getWeatherData(METEO_API_URL);
    InputView.addHandlerGetCity(controlGetPosWeather);
}

init();
