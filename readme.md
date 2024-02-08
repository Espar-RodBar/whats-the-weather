# Whats the weather App

## Description

This app try to show the weather of the next 7 days of your location or the city you enter.

URL: https://whats-the-weather-gamma.vercel.app/

It is possible to get all the info from two sources: asking for a city (and especifying the country) or just using the location from the browser API, but this can require permisions from the user.

Then it is going to get the position in latitude and longitude, and with that information, will check in open-meteo.com the weather.

The initial days are more accurate, later global weather models provide a prevision up to 7 days.

## Tools used:

This app uses the "open-meteo.com" free api to get the weather info and geocode.xyz to get the coodinates of cities.

I used vercel to deploy it, and a serverless function is used to hide the authorization key from the front end.

## Icons:

The icons used are from icons8.com

<a target="_blank" href="https://icons8.com/icon/8EUmYhfLPTCF/sun">Sun</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
<a target="_blank" href="https://icons8.com/icon/ycLdTupX7dng/rainfall">Rainfall</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
<a target="_blank" href="https://icons8.com/icon/YAYVfad1K0Lp/snow">Snow</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
<a target="_blank" href="https://icons8.com/icon/1RZffALm9Wgo/cloud">Cloud</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
<a target="_blank" href="https://icons8.com/icon/TkGybXXtSFTm/information-pyramid">Information Pyramid</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
