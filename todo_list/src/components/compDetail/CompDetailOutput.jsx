import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fnGetDoc, fnUpdateDoc } from '../../fb/db';
import { auth } from '../../fb/auth';

const CompDetailOutput = () => {
  const {docid} = useParams()
  const [_docData, _setDocData] = useState()
  const [_date, _setDate] = useState('')
  const [_time, _setTime] = useState('')
  const [_title, _setTitle] = useState('')
  const [_desc, _setDesc] = useState('')
  const [_file, _setFile] = useState('')
  const [_label, _setLabel] = useState('이미지를 업로드 해주세요')
  const [_orgUrl, _setOrgUrl] = useState('')
  const [_outputUrl, _setOutputUrl] = useState('')
  const [_storageUrl, _setStorageUrl] = useState('')

  const fnGetDocHandler = async function(){
    const {date,time,title,desc,orgUrl,outputUrl,storageUrl} = await fnGetDoc(auth.currentUser.uid,docid);
    _setDate(date);_setTime(time);_setTitle(title);_setDesc(desc);_setOrgUrl(orgUrl);_setOutputUrl(outputUrl);_setStorageUrl(storageUrl);
  }

  useEffect(()=>{
    fnGetDocHandler()
  },[])

  return (
    <>
      <h2><img className='thumbnail' src={require('../../assets/img/detail/title-detail.png')} alt="" /></h2>
      <form className='scroll-wrap'>
        {_outputUrl && <img className='thumbnail' src={_outputUrl} alt="" /> }
        <p className='date-wrap'>
          <input onChange={e=>_setDate(e.target.value)} value={_date} type="date" required/>
        </p>
        <p className='time-wrap'>
          <input onChange={e=>_setTime(e.target.value)} value={_time} type="time" required/>
        </p>
        <p className='title-wrap'>
          <input onChange={e=>_setTitle(e.target.value)} value={_title} type="text" placeholder='일정명을 입력해주세요.' required/>
        </p>
        <p className='desc-wrap'>
          <textarea onChange={e=>_setDesc(e.target.value)} value={_desc} placeholder='일정내용을 입력해주세요.' required></textarea>
        </p>
        {
        (_orgUrl) &&
        <p className='remember-wrap'>
          <input type="checkbox" id="remember" className='hidden'/>
          <label htmlFor="remember">
            <img src={require('../../assets/img/add/remove-checked.png')} alt="" />
            <img src={require('../../assets/img/add/remove-check.png')} alt="" />
            {_orgUrl} 삭제하기
          </label>
        </p>}
        <p className='photo-wrap'>
          <input onChange={e=>{_setFile(e.target.files[0]);e.target.files[0]&&_setLabel(e.target.files[0].name);}} id='file' type="file" className='hidden' accept='image/*'/>
          <label htmlFor="file">{_label}</label>
        </p>
      </form>
        <p className='btn-wrap'>
          <button ><img src={require('../../assets/img/detail/btn-update-list.png')} alt="" /></button>
          <button ><img src={require('../../assets/img/detail/btn-delete-list.png')} alt="" /></button>
          <Link to={'/'}><img src={require('../../assets/img/detail/btn-goto-list.png')} alt="" /></Link>
        </p>
    </>
  );
};

export default CompDetailOutput;