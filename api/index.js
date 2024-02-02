const express = require('express')

const cors = require('cors')
const apiKey = process.env.GEOCODE_API
const app = express()
app.use(cors({ origin: '*' }))

async function getPosCity(location) {
  const GEOPARSING_API_URL = `https://geocode.xyz/?locate=${location}&geoit=JSON`

  try {
    const res = await fetch(`${GEOPARSING_API_URL}&auth=${apiKey}`)
    const data = await res.json()
    return { status: res.status, ...data }
  } catch (err) {
    return { status: 500, message: err }
  }
}

app.get('/api/getPos/:location', async (req, res) => {
  const result = await getPosCity(req.params.location)
  res.status(200).json({ ...result })
})

module.exports = app
