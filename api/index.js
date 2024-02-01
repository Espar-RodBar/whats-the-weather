import express from 'express'
import getPosFromCity from './getPosFromCity.mjs'
import cors from 'cors'

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
