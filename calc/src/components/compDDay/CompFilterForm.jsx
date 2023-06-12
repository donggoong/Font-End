import React from 'react';

const CompFilterForm = ({_filterActive,_setFilterActive,_searchString,_setSearchString,_ddayArr,_setDDayOutputArr}) => {

  const fnSortHandler = function(e){
    const sortType = e.currentTarget.value
    let sortedArr
    if(sortType==='time'){
      sortedArr = [..._ddayArr].sort((a,b)=>{
        if(a.dday>b.dday) return 1
        else if(a.dday<b.dday) return -1
        else return 0
      })
    }
    else if(sortType==='title'){
      sortedArr = [..._ddayArr].sort((a,b)=>{
        if(a.title.toLowerCase()>b.title.toLowerCase()) return 1
        else if(a.title.toLowerCase()<b.title.toLowerCase()) return -1
        else return 0
      })
    }else {
      sortedArr = [..._ddayArr]
    }
    _setDDayOutputArr(sortedArr)
    _setFilterActive('')
    document.querySelector('.filter-btn').classList.remove('active')
  }

  const fnSearchHandler = function(e){
    _setSearchString(e.target.value)
    const searchArr = e.target.value?_ddayArr.filter(v=>v.title.includes(e.target.value)):[..._ddayArr]
    _setDDayOutputArr(searchArr)
  }

  const fnSubmitHandler = function(e){
    e.preventDefault();
    _setFilterActive('');
    _setSearchString('');
  }

  return (
    <form className={`filter-form ${_filterActive}`} onSubmit={fnSubmitHandler}>
      <fieldset>
        <legend><i className="fa-solid fa-arrow-down-short-wide"></i> 정렬</legend>
        <button type='button' onClick={fnSortHandler} value='latest'>최신등록순</button>
        <button type='button' onClick={fnSortHandler} value='time'>DDay시간</button>
        <button type='button' onClick={fnSortHandler} value='title'>DDay제목</button>
      </fieldset>
      <fieldset>
        <legend><i className="fa-solid fa-magnifying-glass"></i> 검색</legend>
        <input type="text" onInput={fnSearchHandler} value={_searchString || ''}/>
      </fieldset>
    </form>
  );
};

export default React.memo(CompFilterForm);