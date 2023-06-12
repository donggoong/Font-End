import React, { useState } from 'react';
import { auth, fnCreateUser, fnSendEmailVerification, fnSignOut, fnUpdateProfile } from '../../fb/auth';
import { fnUploadFile } from '../../fb/storage';
import { useContext } from 'react';
import { Appcontext } from '../../App';

const CompSignUp = () => {
  const {_setShowLoader,_setFadeOut} = useContext(Appcontext)
  const [_email,_setEmail] = useState('')
  const [_password,_setPassword] = useState('')
  const [_nickName,_setNickName] = useState('')
  const [_photo,_setPhoto] = useState('')
  const [_photoLabel,_setPhotoLabel] = useState('프로필사진을 업로드 해주세요')

  const fnSignUpHandler = async function(e){
    e.preventDefault()
    _setShowLoader(true)
    _setEmail('');_setPassword('');_setNickName('');_setPhoto('');_setPhotoLabel('프로필사진을 업로드 해주세요')
    const signup = window.confirm('회원가입을 하시겠습니까?')
    if(!signup) return
    await fnCreateUser(_email,_password,_setFadeOut)
    const photo = (_photo)?(await fnUploadFile(auth.currentUser.uid, _photo)).outputUrl:'https://firebasestorage.googleapis.com/v0/b/todo-app-926dd.appspot.com/o/common%2Fno-profile.png?alt=media&token=a1ef083b-60ae-4289-9de8-6eccd9e2cde9'
    await fnUpdateProfile(_nickName,photo,_setFadeOut)
    await fnSendEmailVerification(_setFadeOut)
    await fnSignOut(_setFadeOut)
    alert('회원가입이 완료되었습니다\n이메일 인증 후 로그인해주세요.')
    _setFadeOut(true)
  }

  return (
    <section className='section-signup'>
      <h2><img src={require('../../assets/img/register/title-register.png')} alt="" /></h2>
      <form onSubmit={fnSignUpHandler}>
        <p className='email-wrap'>
          <input onChange={e=>_setEmail(e.target.value)} value={_email} type="email" placeholder='사용하실 이메일을 입력하세요.'/>
        </p>
        <p className='password-wrap'>
          <input onChange={e=>_setPassword(e.target.value)} value={_password} type="password" autoComplete='on' placeholder='사용하실 비밀번호를 입력하세요.'/>
        </p>
        <p className='nickname-wrap'>
          <input onChange={e=>_setNickName(e.target.value)} value={_nickName} type="text" placeholder='사용하실 닉네임을 입력하세요.'/>
        </p>
        <p className='photo-wrap'>
          <input onChange={e=>{_setPhoto(e.target.files[0]);(e.target.files[0])&&_setPhotoLabel(e.target.files[0].name);}} id='file' type="file" className='hidden'/>
          <label htmlFor="file">{_photoLabel}</label>
        </p>
        <p className='btn-wrap'>
          <button><img src={require('../../assets/img/register/btn-register.png')} alt="" /></button>
        </p>
      </form>
    </section>
  );
};

export default CompSignUp;