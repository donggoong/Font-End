import React, { useContext, useState } from 'react';
import { DDayContext } from './CompDDay';

const CompAdd = () => {
  const {_setShowList,_ddayArr,_setDDayArr,_setDDayOutputArr} = useContext(DDayContext)
  const [_title,_setTitle]=useState('')
  const [_date,_setDate]=useState('')
  const [_time,_setTime]=useState('00:00')
  function fnChangeHandler(e){
    if(e.target.type==='text'){
      _setTitle(e.target.value)
    } else if((e.target.type==='date')){
      _setDate(e.target.value)
    }else{
      _setTime(e.target.value)
    }
  }
  function fnSubmitHandler(e){
    e.preventDefault()
    _setShowList(true)
    const dday = new Date(`${_date}T${_time}`)
    const ddayStamp = parseInt(dday.getTime() / 1000)
    const nowStamp = parseInt(Date.now() / 1000)
    if(ddayStamp < nowStamp){
      alert('과거 시점은 DDay로 설정하실 수 없습니다.')
    }
    else if((ddayStamp - nowStamp)/(24*60*60) > 365){
      alert('300일 이후 시점은 DDay로 설정하실 수 없습니다.')
    }
    if(ddayStamp < nowStamp || (ddayStamp - nowStamp)/(24*60*60) > 365){
      _setDate('')
      _setTime('00:00')
      return false
    }
    const ddayObj = {
      id:Date.now(),
      title:_title,
      dday:`${_date}T${_time}`
    }
    const ddayArr = [ddayObj,..._ddayArr]
    _setDDayArr(ddayArr)
    _setDDayOutputArr(ddayArr)
    window.localStorage.setItem('ddayArrStorage',JSON.stringify(ddayArr))
  }
  return (
    <form className='dday-add' onSubmit={fnSubmitHandler}>
      <p><label htmlFor="dday1"><i className="fa-solid fa-file-signature"></i> DDay Name</label><input onChange={fnChangeHandler} type="text" id='dday1' placeholder='dday 일정명을 입력해주세요' required/></p>
      <p><label htmlFor="dday2"><i className="fa-regular fa-calendar-days"></i> DDay Date</label><input onChange={fnChangeHandler} type="date" id='dday2' required/></p>
      <p><label htmlFor="dday3"><i className="fa-solid fa-clock"></i> DDay Time</label><input onChange={fnChangeHandler} type="time" id='dday3' value={_time} required/></p>
      <button><i className="fa-solid fa-plus"></i> 추가하기</button>
      <i onClick={()=>{_setShowList(true)}} className="fa-solid fa-chevron-left"></i>
    </form>
  );
};

export default CompAdd;