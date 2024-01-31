export default async (req, context) => {
  // const location = req.queryStringParameters.location
  // const apiKey = Netlify.env.get('GEOCODE_API')
  // const GEOPARSING_API_URL = `https://geocode.xyz/?${location}`
  console.log('on netlify fun:', req, context)
  //try {
  // const res = await fetch(`${GEOPARSING_API_URL}&auth=${apiKey}`)
  // console.log('res on getPosFromCity.mjs', res)
  // const data = await res.json()
  // console.log('data on getPosFromCity.mjs', data)

  return new Response('rainny')
  // } catch (err) {
  //   return {
  //     statusCode: 400,
  //     body: 'ERR On fetch geocites ' + err.toString(),
  //   }
  // }
}

export const config = {
  path: '/netlify/functions/getPosFromCity/:location',
}
