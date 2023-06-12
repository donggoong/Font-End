import React, { useContext } from 'react';
import CompHomeOutput from './CompHomeOutput';
import { Appcontext } from '../../App';

const CompHome = () => {
  const {_docsArr} = useContext(Appcontext)
  return (
    <section className='section-home'>
      {
        (_docsArr)?
        <CompHomeOutput/>
        :
        <p>데이터를 불러오는 중 입니다.</p>
      }
    </section>
  );
};

export default CompHome;