import React, { useCallback, useContext, useLayoutEffect, useState } from 'react';
import { Appcontext } from '../../App';
import { fnGetAddress, fnInitMap } from '../../js/map';
import { fnGetWeatherData } from '../../js/weather';
import CompLoader from '../compLoader/CompLoader';
/* 
  컴포넌트가만들어지는순서 부모 => 자식
  컴포넌트가완료되는순서 자식 => 부모
*/
const CompMap = () => {
  const {_latLng,_setAddressKo,_setAddressEn,_setWeatherData} = useContext(Appcontext)
  const [_isActive,_setIsActive] = useState(false)

  const fnMapClickHandler = useCallback(async function(latLngObj){
    _setAddressKo(await fnGetAddress(latLngObj,'ko'))
    _setAddressEn(await fnGetAddress(latLngObj,'en'))
    _setWeatherData(await fnGetWeatherData(latLngObj))
    _setIsActive(false)
    document.querySelector('.app-inner').scrollTo({top:0,behavior:'smooth'});
    document.querySelector('.comp-hourly .section-inner').scrollTo({left:0,behavior:'smooth'})
  },[_setAddressKo,_setAddressEn,_setWeatherData])

  useLayoutEffect(()=>{
    _latLng && fnInitMap(_latLng,fnMapClickHandler)
  },[_latLng,fnMapClickHandler])

  return (
    <section className={`comp-map ${_isActive&& 'active'}`}>
      <div className="btns">
        <button onClick={()=>_setIsActive(true)}><i className='fas fa-map-location-dot'></i></button>
        <button onClick={()=>_setIsActive(false)}><i className='fas fa-x'></i></button>
      </div>
      <div className="section-inner">
      {_latLng?<div id='map'></div>:<CompLoader/>}
      </div>
    </section>
  );
};

export default CompMap;