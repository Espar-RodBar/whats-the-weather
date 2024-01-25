class ResultView {
  _parentEl = document.querySelector('.result-weather-container')
  constructor() {}

  _isSunHidden() {
    if (this.data.weather === 'niebla') {
      return 'quarterOpacity'
    }
    if (
      this.data.weather === 'lluvia_aislada' ||
      this.data.weather === 'nieve_aislada' ||
      this.data.weather === 'despejado'
    ) {
      return 'fullOpacity'
    }
    return 'noOpacity'
  }
  _cloudDensity() {
    if (this.data.weather === 'despejado') return 'noOpacity'
    if (this.data.weather === 'niebla') return 'halfOpacity'
    if (
      this.data.weather === 'lluvia_aislada' ||
      this.data.weather === 'nieve_aislada'
    ) {
      return 'threeQuarterOpacity'
    }
    return 'fullOpacity'
  }

  _setCloudImg() {
    if (this.data.weather === 'nublado' || this.data.weather === 'niebla') {
      return 'cloud.png'
    }
    if (
      this.data.weather === 'llovizna' ||
      this.data.weather === 'lluvia' ||
      this.data.weather === 'tormenta' ||
      this.data.weather === 'lluvia_aislada'
    ) {
      return 'rain.png'
    }
    if (
      this.data.weather === 'nieve' ||
      this.data.weather === 'nieve_aislada'
    ) {
      return 'snow.png'
    }
  }
  render(days) {
    days.forEach((day) => {
      this.data = day
      this.cloudNpg = this._setCloudImg()
      this.cloudClass = this._cloudDensity()
      this.sunClass = this._isSunHidden()
      const markup = this._generateMarkup()
      this._parentEl.insertAdjacentHTML('beforeend', markup)
    })
  }

  renderCity(city, country = '') {
    if (!city) throw new Error('empty string on the city parameter')

    const cityString = city + (country ? `(${country})` : '')
    document.querySelector('.section-getposition-city span').textContent =
      cityString
  }

  renderError(msg) {
    window.alert(`An unexpected error detected! Try later! ${msg}`)
  }

  clearMarkup() {
    this._parentEl.innerHTML = ''
  }
  renderError() {
    this.clearMarkup()
    const markup = `
        <div class="error-msg-box">
                <h2 class="secondary-header">An error has been found!</h2>
                <p>Try in a few minutes again.</p>
        </div>
        `
    this._parentEl.insertAdjacentHTML('beforeend', markup)
  }

  _generateMarkup() {
    return `
        <div class="result-weather-card card_${this.data.index}">
                    <div class="side">
                        <h3 class="tertiary-header card-header">${
                          this.data.dayOfWeekEn
                        }</h3>
                        <p class="result-weather-card_text">${
                          this.data.date
                        }</p>
                        <div class="result-weather-card_highT">
                            <img
                                src="img/red-triangle.png"
                                alt=""
                                class="temp_h-img temp-img"
                            />
                            <span class="temp_h-text">${
                              this.data.maxTemp
                            }ºC</span>
                        </div>
                        <div class="result-weather-card_lowT">
                        <img
                            src="img/blue-triangle.png"
                            alt=""
                            class="temp_l-img temp-img"
                        />
                        <span class="temp_l-text">${this.data.minTemp}ºC</span>
                    </div>
                        <div class="result-weather-card_box">
                       
                            <img
                                src="img/${this.cloudNpg}"
                                alt=""
                                class="img_cloud_d ${this.cloudClass}  ${
                                  this.data.weather === 'lluvia_aislada'
                                    ? 'noOpacity'
                                    : ''
                                }"
                            />
                            <img
                                src="img/${this.cloudNpg}"
                                alt=""
                                class="img_cloud_l ${this.cloudClass}"
                            />
                            <img
                                src="img/${this.cloudNpg}"
                                alt=""
                                class="img_cloud_r ${this.cloudClass}"
                            />
                            <img src="img/sun.png" alt="" class="img_sun ${
                              this.sunClass
                            }" />
                        </div>
                </div>
             <div class="back"></div>
        
        `
  }
}
export default new ResultView()
