export default async (request, context) => {
  const apiKey = Netlify.env.get('GEOCODE_API')
  const { city } = context.params
  const GEOPARSING_API_URL = `https://geocode.xyz/?${city}`
  try {
    const response = await fetch(`${GEOPARSING_API_URL}&auth=${apiKey}`)
    const data = await response.json()

    return {
      statusCode: 200,
      body: data,
    }
  } catch (err) {
    return {
      statusCode: 400,
      body: { message: err },
    }
  }
}

export const config = {
  path: '/getPosition/:city',
}
