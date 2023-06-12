import React, { useContext } from 'react';
import { fnSetWeatherInfo } from '../../js/weather';
import { Appcontext } from '../../App';

const CompHourlyItem = ({data}) => {
  const {_weatherData} = useContext(Appcontext)
  const {weatherIcon, rain, snow, hh} = fnSetWeatherInfo(data,_weatherData.timezone)
  return (
    <li>
      <p>
        <img src={`${process.env.PUBLIC_URL}/img/icons/${weatherIcon}.gif`} alt="" />
      </p>
      <p>
        {hh}
      </p>
      <p>
        {
          (rain!==0)&&<span><i className='fas fa-umbrella'></i>{rain}</span>
        }
        {
          (snow!==0)&&<span><i className='fas fa-snowflake'></i>{snow}</span>
        }
      </p>
    </li>
  );
};

export default CompHourlyItem;