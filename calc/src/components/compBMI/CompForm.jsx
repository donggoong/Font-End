import React, { useContext } from 'react';
import { BMIContext } from './CompBMI';
import { fnCheckBMI, fnChkObj } from '../../script/bmi';

const CompForm = () => {
  const {_setActive, _gender, _setGender, _height, _setHeight, _weight, _setWeight,_chkObj, _setChkObj,_setError, _setBmi, _setDeg} = useContext(BMIContext)
  
  function fnSubmitHandler(e){
    e.preventDefault()
    const {bmi,deg,err}=fnCheckBMI(_gender,_height,_weight)
    _setBmi(bmi)
    _setDeg(deg)
    _setError(err)
    _setActive('active')
  }
  function fnChangeHandler(e){
    _setChkObj(fnChkObj(e.target.value))
    _setGender(e.target.value)
  }
  function fnInputHandler(e){
    (e.target.id==='height')?_setHeight(parseFloat(e.target.value)):_setWeight(parseFloat(e.target.value))
  }
  
  return (
    <form onSubmit={fnSubmitHandler}>
      <div className='radios'>
        <label><i className="fa-solid fa-venus-mars"></i>성별</label>
        <p>
          <input onChange={fnChangeHandler} checked={_chkObj['male']} value='male' id='male' type="radio" name='gender' required/>
          <label htmlFor="male"><i className="fa-solid fa-mars"></i>male</label>
          <input onChange={fnChangeHandler} checked={_chkObj['female']} value='female' id='female' type="radio" name='gender' required/>
          <label htmlFor="female"><i className="fa-solid fa-venus"></i>female</label>
        </p>
      </div>
      <div>
        <label htmlFor="height"><i className="fa-solid fa-person"></i>신장</label>
        <input onInput={fnInputHandler} value={_height||''} type="number" id='height' min="1" max="500" step="0.1" required placeholder='cm단위로 입력해주세요'/>
      </div>
      <div>
        <label htmlFor="weight"><i className="fa-solid fa-weight-scale"></i>체중</label>
        <input onInput={fnInputHandler} value={_weight||''} type="number" id='weight' min="1" max="500" step="0.1" required placeholder='kg단위로 입력해주세요'/>
      </div>
      <button>측정하기</button>
    </form>
  );
};

export default CompForm;