class InputView {
  _parentEl = document.querySelector('.section-getPosition')

  getCity() {
    const inputEl = this._parentEl.querySelector('.form-getCity_input')
    const city = inputEl.value
    this._clearInput()
    return city
  }

  _clearInput() {
    this._parentEl.querySelector('.form-getCity_input').value = ''
  }

  addHandlerGetCity(handler) {
    this._parentEl
      .querySelector('.form-getCity')
      .addEventListener('submit', function (e) {
        e.preventDefault()
        handler()
      })
  }
  addHandlerGetPosition(handler) {
    this._parentEl
      .querySelector('.form-getPosition')
      .addEventListener('submit', function (e) {
        e.preventDefault()
        handler()
      })
  }
}

export default new InputView()
