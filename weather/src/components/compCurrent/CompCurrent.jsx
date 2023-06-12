import React, { useContext } from 'react';
import { Appcontext } from '../../App';
import CompLoader from '../compLoader/CompLoader';
import CompCurrentOutput from './CompCurrentOutput';

const CompCurrent = () => {
  const {_weatherData} = useContext(Appcontext)
  return (
    <section className='comp-current'>
      <div className="section-inner">
      {_weatherData?<CompCurrentOutput/>:<CompLoader/>}
      </div>
    </section>
  );
};

export default CompCurrent;