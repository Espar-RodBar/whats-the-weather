export default async (request, context) => {
  const apiKey = Netlify.env.get('GEOCODE_API')
  const { location } = context.params
  const GEOPARSING_API_URL = `https://geocode.xyz/?${location}`
  console.log(request.body, context)
  try {
    const response = await fetch(`${GEOPARSING_API_URL}&auth=${apiKey}`)
    const data = await response.json()
    console.log('on getPosFromCity.mjs', data)

    return new Response({
      statusCode: 200,
      body: data,
    })
  } catch (err) {
    return new Response({
      statusCode: 400,
      body: { message: err },
    })
  }
}

// export const config = {
//   path: '/.netlify/functions/getPosFromCity/:location',
// }
