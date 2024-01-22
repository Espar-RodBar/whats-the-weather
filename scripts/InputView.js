class InputView {
  _parentEl = document.querySelector('.section-getposition')

  getCity() {
    const inputEl = this._parentEl.querySelector('.form-getCity_input')
    const city = inputEl.value
    this._clearInput()
    this.render(city)
    return city
  }

  _clearInput() {
    this._parentEl.querySelector('.form-getCity_input').value = ''
  }

  addHandlerGetCity(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault()
      handler()
    })

    addHandlerGetPosition(handler) {
        this._parentEl.addEventListener('submit', function (e) {
          e.preventDefault()
          handler()
        })
  }

  render(city) {
    if (!city) return
    this._parentEl.querySelector('.section-getposition-city span').textContent =
      city
  }
}

export default new InputView()
