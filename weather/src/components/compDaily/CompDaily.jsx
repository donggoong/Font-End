import React, { useContext } from 'react';
import { Appcontext } from '../../App';
import CompLoader from '../compLoader/CompLoader';
import CompDailyItem from './CompDailyItem';
const CompDaily = () => {
const {_weatherData} = useContext(Appcontext)
  return (
    
    <section className='comp-daily'>
      <div className="section-inner">
        <h2>Daily 8</h2>
        <ul>
          {
            _weatherData?_weatherData.daily.map(v=><CompDailyItem key={v.dt} data={v} timezone={_weatherData.timezone}/>):<CompLoader/>
          }
        </ul>
      </div>
    </section>
  );
};

export default CompDaily;