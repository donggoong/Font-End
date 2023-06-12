import React from 'react';
import { Link } from 'react-router-dom';

const CompItem = ({data,docid}) => {
  const {date,time,title,outputUrl} = data
  return (
    <li>
      <Link to={`/detail/${docid}`}>
        <img src={outputUrl} alt="" className="thumbnail" />
        <div className="metabox">
          <p>
            <time className='date'><img src={require('../../assets/img/icons/icon-calendar.png')} alt="" />{date}</time>
            <time className='time'><img src={require('../../assets/img/icons/icon-clock.png')} alt="" />{time}</time>
          </p>
          <p>
            <em className='title'><img src={require('../../assets/img/icons/icon-pencil.png')} alt="" />{title}</em>
          </p>
        </div>
        <img src={require('../../assets/img/list/more.png')} alt="" className='more'/>
      </Link>
    </li>
  );
};

export default CompItem;