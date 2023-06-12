import moment from "moment-timezone"
import { codeEnArr, codeKrArr } from "./conditionCode"

export const fnGetWeatherData = function(latLngObj){
  return new Promise((resolve) => {
    const {lat, lng} = latLngObj
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_OPEN_WHATHER_API_KEY}`
    fetch(url)
      .then(data=>{
        resolve(data.json())
      })
      .catch(()=>
        alert('날씨 정보를 다운로드 중 오류가 발생했습니다.')
      )
  })
}
/* 날씨 정보를 가공해서 리턴하는 함수 */ 
export const fnSetWeatherInfo = function(weatherDataObj, timezone){
  const temp = typeof(weatherDataObj.temp)==='object'?(weatherDataObj.temp.day - 273.15).toFixed(1):(weatherDataObj.temp - 273.15).toFixed(1)
  const tempMin = (typeof(weatherDataObj.temp)==='object')&&(weatherDataObj.temp.min - 273.15).toFixed(1)
  const tempMax = (typeof(weatherDataObj.temp)==='object')&&(weatherDataObj.temp.max - 273.15).toFixed(1)
  const tempMorn = (typeof(weatherDataObj.temp)==='object')&&(weatherDataObj.temp.morn - 273.15).toFixed(1)
  const tempNight = (typeof(weatherDataObj.temp)==='object')&&(weatherDataObj.temp.night - 273.15).toFixed(1)
  const weatherImg = weatherDataObj.weather[0].main
  const weatherIcon = weatherDataObj.weather[0].icon
  const desc = codeKrArr[codeEnArr.indexOf( weatherDataObj.weather[0].description)]
  const windDeg = weatherDataObj.wind_deg
  const windSpeed = weatherDataObj.wind_speed
  const humidity = weatherDataObj.humidity
  const uvi = weatherDataObj.uvi
  const pressure = weatherDataObj.pressure
  const clouds = weatherDataObj.clouds
  let uviDesc
  if(uvi <= 3) uviDesc = '낮음'
  else if(uvi>3&&uvi<=6) uviDesc = '보통'
  else if(uvi>6&&uvi<=8) uviDesc = '높음'
  else if(uvi>8&&uvi<=11) uviDesc = '매우 높음'
  else uviDesc = '위험'
  const rain = (weatherDataObj.rain)?((typeof(weatherDataObj.rain)==='number')?weatherDataObj.rain:weatherDataObj.rain['1h']):0
  const snow = (weatherDataObj.snow)?(typeof(weatherDataObj.snow)==='number'?weatherDataObj.snow:weatherDataObj.snow['1h']):0
  const sunrise = weatherDataObj.sunrise?moment(weatherDataObj.sunrise*1000).tz(timezone).format('A hh:mm:ss'):'--:--:--' 
  const sunset = weatherDataObj.sunset?moment(weatherDataObj.sunset*1000).tz(timezone).format('A hh:mm:ss'):'--:--:--'
  const dayArr = ['일','월','화','수','목','금','토']
  const day = dayArr[moment(weatherDataObj.dt*1000).tz(timezone).day()]
  const date = moment(weatherDataObj.dt*1000).tz(timezone).format(`YYYY년 M월 DD일 ${day}`) 
  const mmdd = moment(weatherDataObj.dt*1000).tz(timezone).format('M월 D일') 
  const time = moment(weatherDataObj.dt*1000).tz(timezone).format('hh:mm:ss') 
  const hh = moment(weatherDataObj.dt*1000).tz(timezone).format('D일 HH시') 
  const apm = moment(weatherDataObj.dt*1000).tz(timezone).format('A') 
  return { temp, tempMin, tempMax, tempMorn, tempNight, weatherImg, desc, weatherIcon, windDeg, windSpeed, humidity, uvi, uviDesc, pressure, clouds, rain, snow, sunrise,sunset, date, time, hh, apm, mmdd, day}
}

export const fnGetDashoffset = function(weatherData){
  let ratio
  let distance
  let display = 'block'
  if(weatherData.current.sunrise&&weatherData.current.sunset){
    ratio = 1 - (weatherData.current.dt - weatherData.current.sunrise)/ (weatherData.current.sunset - weatherData.current.sunrise)
    distance = (weatherData.current.dt - weatherData.current.sunrise)/ (weatherData.current.sunset - weatherData.current.sunrise) * 100
    if(ratio<0) ratio = 0
    if(ratio>1) ratio = 1
  }
  else{
    display='none'
  }
  return {ratio, distance, display}
}