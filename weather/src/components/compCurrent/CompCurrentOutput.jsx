import React, { useContext } from "react";
import { Appcontext } from "../../App";
import { fnSetWeatherInfo } from "../../js/weather";
import CompSvg from "./CompSvg";

const CompCurrentOutput = () => {
  const { fnAppInit,_weatherData, _addressKo, _addressEn } = useContext(Appcontext);
  const {temp,weatherImg,weatherIcon,desc,windDeg,windSpeed,humidity,uv,uviDesc,rain,snow,sunrise,sunset,date,time, apm} = fnSetWeatherInfo(_weatherData.current, _weatherData.timezone);
  const fnResetHandler = function(){
    const represh = window.confirm('현재위치로 날씨정보를 갱신하시겠습니까?')
    if(represh) fnAppInit()
  }
  return (
    <div className="current-output" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/img/weather/${weatherImg}.jpg)`,}}>
      <button className="reload" onClick={fnResetHandler}><i className="fa-solid fa-arrows-rotate"></i></button>
      <address>
        <span> {_addressKo} {_addressEn} </span>
        <span> {_addressKo} {_addressEn} </span>
      </address>
      <div className="circle-container">
        <div className="sunset">
          <CompSvg currentData={_weatherData.current} />
          <time className="risetime">{sunrise}</time>
          <time className="settime">{sunset}</time>
        </div>
        <div className="circle-container-inner">
          <p className="temp">
            <em>
              {temp}
              <sup>&#176;C</sup>
            </em>
            <img
              src={`${process.env.PUBLIC_URL}/img/icons/${weatherIcon}.gif`} alt=""/>
            <span>
              <i>FEEL</i>
              <b>
                23<sup>&#176;C</sup>
              </b>
            </span>
          </p>
          <p className="desc">"{desc}"</p>
          <p className="etc">
            <span className="wind">
              <i
                style={{ transform: `rotate(${windDeg - 45}deg)` }}
                className="fa-solid fa-location-arrow"
              ></i>
              <i className="fa-solid fa-wind"></i>
              <b>{windSpeed}</b>
              <small>M/s</small>
            </span>
            <span className="humidity">
              <i className="fa-solid fa-droplet"></i>
              <b>{humidity}</b>
              <small>%</small>
            </span>
            <span className="uv">
              <i className="fa-solid fa-fire-flame-curved"></i>
              <b>{uv}</b>
              <small>{uviDesc}</small>
            </span>
            {(rain!==0)&&<span className="rain">
              <i className="fa-solid fa-umbrella"></i>
              <b>{rain}</b>
              <small>mm</small>
            </span>}
            {(snow!==0)&&<span className="snow">
              <i className="fa-solid fa-snowflake"></i>
              <b>{snow}</b>
              <small>mm</small>
            </span>}
          </p>
          <p className="time-date">
            <time className="time"><small>{apm}</small> {time}</time>
            <time className="date">{date}</time>
          </p>
          <figure>
            <img src={`${process.env.PUBLIC_URL}/img/main/sunset.png`} alt="" />
            <img src={`${process.env.PUBLIC_URL}/img/main/sunset.png`} alt="" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default CompCurrentOutput;
