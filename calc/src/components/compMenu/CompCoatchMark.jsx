import React, { useState } from 'react';

const CompCoatchMark = ({_setShowCoatch}) => {
  const [_isActive,_setIsActive] = useState('')
  const fnSetLocalCoatch = function(e){
    if(e.target.checked){
      const coatch = Date.now()+(1000*24*60*60)
      window.localStorage.setItem('localCoatch',coatch)
    }else{
      window.localStorage.removeItem('localCoatch')
    }
  }

  return (
    <figure onTransitionEnd={()=>_setShowCoatch(false)} className={`coatch-mark ${_isActive}`}>
      <img src={require('../../assets/img/coatchmark.png')} alt="" />
      <figcaption>
        <p>
          <input onChange={fnSetLocalCoatch} type="checkbox"/> 오늘 하루 보지 않기.
        </p>
        <button onTransitionEnd={e=>e.stopPropagation()} onClick={()=>_setIsActive('active')}>skip</button>
      </figcaption>
    </figure>
  );
};

export default CompCoatchMark;