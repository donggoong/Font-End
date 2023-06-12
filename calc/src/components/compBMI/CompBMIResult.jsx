import React, { useContext, useEffect } from 'react';
import { BMIContext } from './CompBMI';
import { fnChkObj } from '../../script/bmi';
import CompErr from './CompErr';
import CompResult from './CompResult';

const CompBMIResult = () => {
  const {_active, _setActive, _setHeight, _setWeight, _setChkObj, _error, _setBmi, _setDeg} = useContext(BMIContext)

  function fnResetHandler(){
    _setActive('')
    _setChkObj(fnChkObj())
    _setHeight('')
    _setWeight('')
    _setBmi(0)
    _setDeg(90)
    window.TweenMax.to(".manorg",1,{morphSVG:`.man3`,fill:'#000',ease:window.Linear.easeNone})
    window.TweenMax.to(".womanorg",1,{morphSVG:`.woman3`,fill:'#000',ease:window.Linear.easeNone})
  }

  useEffect(()=>{
  })

  return (
    <div className={`bmi-result ${_active}`}>
      <h2>bmi result</h2>
      {(_error)?<CompErr/>:<CompResult/>}
      <button onClick={fnResetHandler}><i className="fa-solid fa-rotate-right"></i> 다시 측정하기</button>
    </div>
  );
};

export default CompBMIResult;