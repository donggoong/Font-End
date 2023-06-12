import React, { useEffect, useState } from 'react';
import { fnGetDateInfo } from '../../script/dday';

const CompTime = () => {
  const [_day,_setDay] = useState()
  const [_year,_setYear] = useState()
  const [_month,_setMonth] = useState()
  const [_date,_setDate] = useState()
  const [_ap,_setAp] = useState()
  const [_hour,_setHour] = useState()
  const [_minute,_setMinute] = useState()
  const [_seconds,_setSeconds] = useState()

  function fnSetState(now){
    const {day,year,month,date,ap,hour,minute,seconds} = fnGetDateInfo(now)
    _setDay(day);_setYear(year);_setMonth(month);_setDate(date);_setAp(ap);_setHour(hour);_setMinute(minute);_setSeconds(seconds);
  }

  useEffect(()=>{
    fnSetState(new Date())
    const intervalID = setInterval(()=>{
      fnSetState(new Date())
    },100)
    return(()=>{
      clearInterval(intervalID)
    })
  },[])

  return (
    <div className='now'>
      <time><b>{_year}</b>-<b>{_month}</b>-<b>{_date}</b><small>{_day}</small></time>
      <time><small>{_ap}</small><b>{_hour}</b>:<b>{_minute}</b>:<b>{_seconds}</b></time>
    </div>
  );
};

export default CompTime;