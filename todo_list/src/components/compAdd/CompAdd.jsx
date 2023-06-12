import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../fb/auth';
import { fnUploadFile } from '../../fb/storage';
import { fnAddDoc } from '../../fb/db';
import { Appcontext } from '../../App';

const CompAdd = () => {
  const {navi,_setShowLoader,_setFadeOut} = useContext(Appcontext)
  const [_date,_setDate] = useState('')
  const [_time,_setTime] = useState('')
  const [_title,_setTitle] = useState('')
  const [_desc,_setDesc] = useState('')
  const [_file,_setFile] = useState('')
  const [_label,_setLabel] = useState('일정과 관련된 이미지를 업로드 해주세요')
  const [_validity,_setValidity] = useState(false)

  const fnAddDocHandler = async function(){
    if(!_validity){alert('날짜,시간,일정명은 필수입력 사항입니다.'); return false}
    _setShowLoader(true)
    const {outputUrl,orgUrl,storageUrl} = (_file)?await fnUploadFile(auth.currentUser.uid,_file):{outputUrl:'https://firebasestorage.googleapis.com/v0/b/todo-app-926dd.appspot.com/o/common%2Fno-image.jpg?alt=media&token=c5ae8e0a-c6b1-4635-b620-48e13c00a1c0',orgUrl:'',storageUrl:''} 
    const data = {
      timestamp : Date.now(),
      uid : auth.currentUser.uid,
      date : _date,
      time : _time,
      title : _title,
      desc : _desc,
      outputUrl,storageUrl,orgUrl 
    }
    await fnAddDoc(auth.currentUser.uid, data)
    alert('일정이 등록되었습니다\n목록페이지로 이동합니다.')
    _setFadeOut(true)
    navi('/')
  }

  return (
    <section className='section-add'>
      <h2><img src={require('../../assets/img/add/title-add.png')} alt="" /></h2>
      <form className='scroll-wrap' onSubmit={e=>e.preventDefault()} onChange={e=>_setValidity(e.currentTarget.checkValidity())}>
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
          <textarea onChange={e=>_setDesc(e.target.value)} value={_desc} placeholder='일정내용을 입력해주세요.'></textarea>
        </p>
        <p className='photo-wrap'>
          <input onChange={e=>{_setFile(e.target.files[0]);e.target.files[0] && _setLabel(e.target.files[0].name);}} id='file' type="file" className='hidden'/>
          <label htmlFor="file">{_label}</label>
        </p>
      </form>
        <p className='btn-wrap'>
          <button onClick={fnAddDocHandler}><img src={require('../../assets/img/add/btn-add-list.png')} alt="" /></button>
          <Link to={'/'}><img src={require('../../assets/img/add/btn-backto-list.png')} alt="" /></Link>
        </p>
    </section>
  );
};

export default CompAdd;