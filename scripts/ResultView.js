class ResultView {
    _parentEl = document.querySelector(".result-weather-container");
    constructor() {}
    init(data) {
        this.data = data;
        console.log(data);
        this.cloudNpg = this._setCloudImg();
        this.render();
    }

    _setCloudImg() {
        if (this.data.weather === "nublado" || this.data.weather === "niebla") {
            return "cloud.png";
        }
        if (
            this.data.weather === "llovizna" ||
            this.data.weather === "lluvia" ||
            this.data.weather === "tormenta" ||
            this.data.weather === "lluvia_aislada"
        ) {
            return "rain.png";
        }
        if (
            this.data.weather === "nieve" ||
            this.data.weather === "nieve_aislada"
        ) {
            return "snow.png";
        }
    }
    render() {
        const markup = this._generateMarkup();
        this._parentEl.insertAdjacentHTML("beforeend", markup);
    }

    _generateMarkup() {
        return `
        <div class="result-weather-card card_${this.data.index}">
                        <h3 class="tertiary-header">${this.data.dayOfWeekEs}</h3>
                        <p class="result-weather-card_text">${this.data.date}</p>
                        <div class="result-weather-card_highT">
                            <img
                                src="img/red-triangle.png"
                                alt=""
                                class="temp_h-img temp-img"
                            />
                            <span class="temp_h-text">${this.data.maxTemp}</span>
                        </div>
                        <div class="result-weather-card_box">

                        // <img
                        //         src="img/${this.cloudNpg}"
                        //         alt=""
                        //         class="img_cloud_u"
                        //     />
                        
                            <img
                                src="img/${this.cloudNpg}"
                                alt=""
                                class="img_cloud_d"
                            />
                            <img
                                src="img/${this.cloudNpg}"
                                alt=""
                                class="img_cloud_l"
                            />
                            <img
                                src="img/${this.cloudNpg}"
                                alt=""
                                class="img_cloud_r"
                            />
                            <img src="img/sun.png" alt="" class="img_sun" />
                        </div>
                        <div class="result-weather-card_lowT">
                            <img
                                src="img/blue-triangle.png"
                                alt=""
                                class="temp_l-img temp-img"
                            />
                            <span class="temp_l-text">${this.data.minTemp}</span>
                        </div>
                    </div>
        
        `;
    }
}

export default new ResultView();
