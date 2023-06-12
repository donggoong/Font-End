import React, { useContext, useEffect, useState } from "react";
import { fnGetDateInfo, fnTimer } from "../../script/dday";
import { DDayContext } from "./CompDDay";

const CompListItem = ({ item }) => {
  const {_ddayArr,_setDDayArr,_setDDayOutputArr} = useContext(DDayContext)
  const {id, title, dday } = item;
  const { day, year, month, date, ap, hour, minute, seconds, timestamp } = fnGetDateInfo(dday);
  const [_remainDate, _setRemainDate] = useState();
  const [_remainHour, _setRemainHour] = useState();
  const [_remainMinute, _setRemainMinute] = useState();
  const [_remainSeconds, _setRemainSeconds] = useState();
  const [_dashOffset1, _setDashOffset1] = useState(365);
  const [_dashOffset2, _setDashOffset2] = useState(24);
  const [_dashOffset3, _setDashOffset3] = useState(60);
  const [_dashOffset4, _setDashOffset4] = useState(60);
  const [_isActive, _setIsActive] = useState('');
  const [_isDeActive, _setIsDeActive] = useState('');

  const fnTimerState = function (param) {
    const { diffDate, diffHour, diffMinute, remainSecsonds } = fnTimer(param);
    if(!diffDate&&!diffHour&&!diffMinute&&!remainSecsonds) _setIsDeActive('deactive')
    _setRemainDate(diffDate);
    _setRemainHour(diffHour);
    _setRemainMinute(diffMinute);
    _setRemainSeconds(remainSecsonds);
    _setDashOffset1(365 - diffDate)
    _setDashOffset2(24 - diffHour)
    _setDashOffset3(60 - diffMinute)
    _setDashOffset4(remainSecsonds)
  };

  const fnMouseDownHandler = function(){
    _setIsActive('active')
  }

  const fnDelHandler = function(){
    if(window.confirm('DDay목록을 삭제하시겠습니까?')){
      const ddayArr = _ddayArr.filter(v=>v.id!==id)
      _setDDayArr(ddayArr)
      _setDDayOutputArr(ddayArr)
      window.localStorage.setItem('ddayArrStorage',JSON.stringify(ddayArr))
    }else{
      _setIsActive('')
    }
  }

  useEffect(() => {
    fnTimerState(timestamp);
    let intervalID;
    intervalID = setInterval(() => {
      fnTimerState(timestamp);
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, [timestamp]);

  return (
    <li className={`${_isActive} ${_isDeActive}`} onMouseDown={fnMouseDownHandler} onClick={fnDelHandler}>
      <div className="meta">
        <h3>{title}</h3>
        <p>
          <time className="date">
            <em>{year}</em>.<em>{month}</em>.<em>{date}</em>
            <small>{day}</small>
          </time>
          <time className="time">
            <small>{ap}</small>
            <em>{hour}</em>:<em>{minute}</em>:<em>{seconds}</em>
          </time>
        </p>
      </div>
      <ul className="timer-output">
        <li>
          <figure>
            <svg viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={47}/>
              <circle cx={50} cy={50} r={47} pathLength={365} strokeDasharray={365} strokeDashoffset={_dashOffset1}/>
            </svg>
            <figcaption>{_remainDate}</figcaption>
          </figure>
          <p>
            <em>date</em>
            <small>0 ~ 365</small>
          </p>
        </li>
        <li>
          <figure>
            <svg viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={47}/>
              <circle cx={50} cy={50} r={47} pathLength={24} strokeDasharray={24} strokeDashoffset={_dashOffset2}/>
            </svg>
            <figcaption>{_remainHour}</figcaption>
          </figure>
          <p>
            <em>hour</em>
            <small>0 ~ 24</small>
          </p>
        </li>
        <li>
          <figure>
            <svg viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={47}/>
              <circle cx={50} cy={50} r={47} pathLength={60} strokeDasharray={60} strokeDashoffset={_dashOffset3}/>
            </svg>
            <figcaption>{_remainMinute}</figcaption>
          </figure>
          <p>
            <em>minute</em>
            <small>0 ~ 60</small>
          </p>
        </li>
        <li>
          <figure>
            <svg viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={47}/>
              <circle cx={50} cy={50} r={47} pathLength={60} strokeDasharray={60} strokeDashoffset={_dashOffset4}/>
            </svg>
            <figcaption>{_remainSeconds}</figcaption>
          </figure>
          <p>
            <em>seconds</em>
            <small>0 ~ 60</small>
          </p>
        </li>
      </ul>
    </li>
  );
};

export default CompListItem;
