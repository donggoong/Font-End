import React, { useContext, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Appcontext } from '../../App';
import CompItem from './CompItem';
import { fnGetDocs } from '../../fb/db';
import { auth } from '../../fb/auth';

const CompHomeOutput = () => {
  const {_docsCnt,_nextDoc,_setNextDoc,_docsArr,_setDocsArr,_docsOutputArr,_setDocsOutputArr} = useContext(Appcontext)
  const refScrollTrigger = useRef()
  
  useEffect(()=>{
    let docsArrRef = [..._docsArr]
    let nextDocRef = _nextDoc
    const observer = new IntersectionObserver(async ([entries])=>{ //한개 일때는 배열로 받아야함
      if(entries.intersectionRatio>0 && _docsCnt > docsArrRef.length){
        /* document.querySelector('.list-container').insertAdjacentHTML('beforeend',`<li>추가된 li</li>`) */
        const {docsArr,nextDoc} = await fnGetDocs(auth.currentUser.uid,2,nextDocRef)
        docsArrRef = [...docsArrRef,...docsArr]
        _setDocsArr([...docsArrRef])
        _setDocsOutputArr([...docsArrRef])
        _setNextDoc(nextDoc) 
        nextDocRef = nextDoc
      }else{

      }
    })
    observer.observe(refScrollTrigger.current)
  },[])

  return (
    <>
      <h2><img src={require('../../assets/img/list/title-list.png')} alt="" /></h2>
        <div className="scroll-wrap">
        {
        (_docsArr.length)?
        <ul className='list-container'>
          {_docsOutputArr.map(v=><CompItem key={v.data().timestamp} docid={v.id} data={v.data()}/>)}
        </ul>
        :
        <img className='no-list' src={require('../../assets/img/list/alert-no-list.png')} alt="" />
        }
        <div ref={refScrollTrigger} className="scroll-trigger"></div>
      </div>
      {
      <p className='add-btn-wrap'>
        <button>
          <Link to={'/add'}>
            <img src={require('../../assets/img/list/btn-add-new-list.png')} alt="" />
          </Link>
        </button>
      </p>
      }
    </>
  );
};

export default CompHomeOutput;