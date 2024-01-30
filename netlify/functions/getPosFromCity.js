exports.handler = async (response) => {
  const location = response.queryStringParameters.location
  const apiKey = Netlify.env.get('GEOCODE_API')
  const GEOPARSING_API_URL = `https://geocode.xyz/?${location}`
  console.log(GEOPARSING_API_URL)
  try {
    const res = await fetch(`${GEOPARSING_API_URL}&auth=${apiKey}`)
    const data = await JSON.parse(res)
    console.log('on getPosFromCity.mjs', location, daya)

    return {
      statusCode: 200,
      body: 'hola',
    }
  } catch (err) {
    return {
      statusCode: 400,
      body: 'ERR On fetch geocites ' + err.toString(),
    }
  }
}

// export const config = {
//   path: '/.netlify/functions/getPosFromCity/:location',
// }
