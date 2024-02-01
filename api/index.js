const express = require('express')
const getPosFromCity = require('./getPosFromCity.js')
const cors = require('cors')

const app = express()
app.use(cors())

app.get('/api', (req, res) => {
  response.status(200).send('Api working')
})

app.get('/api/getPos/:location', (req, res) => {
  console.log('route getPosFromCity')

  const location = req.params.location
  const result = getPosFromCity(location)
  console.log(result)
})
