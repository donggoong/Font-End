import React, { useContext, useState } from 'react';
import { DDayContext } from './CompDDay';
import CompListItem from './CompListItem';
import CompFilterForm from './CompFilterForm';

const CompList = () => {
  const {_setShowList,_ddayArr,_ddayOutputArr,_setDDayOutputArr} = useContext(DDayContext)
  const [_filterActive,_setFilterActive]=useState('')
  const [_searchString,_setSearchString]=useState('')
  const fnFilterHandelr = function(e){
    _setFilterActive(c=>(c==='active')?'':'active')
    _setSearchString('')
  }

  return (
    <>
      <article className='dday-list'>
        <button onClick={fnFilterHandelr} className={`filter-btn ${_filterActive}`}>
          <i className="fa-solid fa-magnifying-glass-plus"></i>
          <i className="fa-solid fa-magnifying-glass-minus"></i>
        </button>

        {_ddayArr.length===0?<p className='no-msg'>"DDay가 존재하지 않습니다."</p>:
        <ul>
        {_ddayOutputArr.map(v=><CompListItem item={v} key={v.id}/>)}
        </ul>
        }
        <CompFilterForm _filterActive={_filterActive} _setFilterActive={_setFilterActive} _searchString={_searchString} _setSearchString={_setSearchString} _ddayArr={_ddayArr} _setDDayOutputArr={_setDDayOutputArr}/>
      </article>
        <button className='btn-add' onClick={()=>{_setShowList(false)}}> <img src={require('../../assets/img/timer-icon-bg.gif')} alt="" /> D-Day 추가하기</button>
    </>
  );
};

export default CompList;