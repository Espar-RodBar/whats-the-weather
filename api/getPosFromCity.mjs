// import fetch from 'node-fetch'

export default async () => {
  // const apiKey = Netlify.env.get('GEOCODE_API')

  const GEOPARSING_API_URL = `https://geocode.xyz/?locate=${location}`
  try {
    //  const res = await fetch(`${GEOPARSING_API_URL}&auth=${apiKey}`)
    console.log(GEOPARSING_API_URL)
    const res = await fetch(`${GEOPARSING_API_URL}`)
    const data = await res.json()
    console.log('fetch:', res, data)

    return { status: 200, data }
  } catch (err) {
    return new Error('Error fetching data')
  }
}
