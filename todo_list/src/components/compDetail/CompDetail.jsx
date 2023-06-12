import React, { useContext } from 'react';
import { Appcontext } from '../../App';
import CompDetailOutput from './CompDetailOutput';

const CompDetail = () => {
  const {_isLogged} = useContext(Appcontext)

  return (
    <section className='section-detail'>
      {_isLogged?
      <CompDetailOutput/> 
      :
      '로더'
      }
    </section>
  );
};

export default CompDetail;