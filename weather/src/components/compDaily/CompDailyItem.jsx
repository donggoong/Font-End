import React from "react";
import { fnSetWeatherInfo } from "../../js/weather";
import $ from 'jquery';
const CompDailyItem = ({ data, timezone }) => {
  const {temp,tempMin,tempMax,day,mmdd,desc,weatherIcon,rain,snow,uvi,uviDesc,humidity,pressure,clouds,windDeg, windSpeed,} = fnSetWeatherInfo(data, timezone);

  const fnAccordian = function(e){
    e.preventDefault()
    $('.comp-daily li .detail').stop().slideUp()
    $(e.currentTarget).siblings('.detail').stop().slideToggle()
    $('.comp-daily li a').not(e.currentTarget).removeClass('active')
    $(e.currentTarget).toggleClass('active')
  }
  return (
    <li>
      <a href="#" onClick={fnAccordian}>
        <p className="date">
          <span>
            <i className="fa-solid fa-calendar-check"></i> {mmdd} ({day})
          </span>
          <span className="desc">{desc}</span>
        </p>
        <p className="info">
          <img
            src={`${process.env.PUBLIC_URL}/img/icons/${weatherIcon}.gif`}
            alt=""
          />
          <span className="temp">
            <i className="fas fa-temperature-half"></i>
            <em>
              {tempMin} / {tempMax}
              <sup>&#176;c</sup>
            </em>
          </span>
          {rain !== 0 && (
            <span className="rain">
              <i className="fa-solid fa-umbrella"></i>
              <em>{rain}mm</em>
            </span>
          )}
          {snow !== 0 && (
            <span className="snow">
              <i className="fas fa-snowflake"></i>
              <em>{snow}mm</em>
            </span>
          )}
        </p>
        <i className="fas fa-square-caret-down"></i>
      </a>
      <div className="detail">
        <p>
          <span className="temp">
            <i className="fas fa-temperature-high"></i>
            <b>체감온도</b>
            <em>
              {temp}
              <small>&#176;c</small>
            </em>
          </span>
        </p>
        <p>
          <span className="humidity">
            <i className="fas fa-circle-arrow-up"></i>
            <b>풍향</b>
            <em>
              {windDeg}
              <small>&#176;</small>
            </em>
          </span>
          <span className="humidity">
            <i className="fas fa-wind"></i>
            <b>풍속</b>
            <em>
              {windSpeed}
              <small>m/s</small>
            </em>
          </span>
        </p>
        <p>
          <span className="humidity">
            <i className="fas fa-cloud"></i>
            <b>구름량</b>
            <em>
              {clouds}
              <small>%</small>
            </em>
          </span>
        </p>
        <p>
          <span className="humidity">
            <i className="fas fa-droplet"></i>
            <b>습도</b>
            <em>
              {humidity}
              <small>hPa</small>
            </em>
          </span>
        </p>
        <p>
          <span className="humidity">
            <i className="fa-solid fa-arrows-to-dot"></i>
            <b>기압</b>
            <em>
              {pressure}
              <small>hPa</small>
            </em>
          </span>
        </p>
        <p>
          <span className="uv">
            <i className="fas fa-sun"></i>
            <b>자외선</b>
            <em>{uvi}<small>({uviDesc})</small></em>
          </span>
        </p>
      </div>
    </li>
  );
};

export default CompDailyItem;
