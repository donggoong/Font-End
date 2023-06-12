import React, { useContext } from 'react';
import CompMorph from './CompMorph';
import { BMIContext } from './CompBMI';

const CompResult = () => {
  const {_bmi,_deg} = useContext(BMIContext)
  return (
    <div className="output result">
    <CompMorph/>
    <figure className="board">
      <img className='pin' style={{transform:`translate(6%,50%) rotate(${_deg}deg)`}} src={require('../../assets/img/bmiPin.svg').default} alt="" />
      <img src={require('../../assets/img/bmiBoard.svg').default} alt="" />
    </figure>
    <p>{_bmi}</p>
  </div>
  );
};

export default CompResult;