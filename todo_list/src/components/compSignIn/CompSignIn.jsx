import React from 'react';
import { auth, fnGoogleSignin, fnSendPasswordResetEmail, fnSetPersistence, fnSignOut, fnSignin } from '../../fb/auth';
import { useState } from 'react';
import { useContext } from 'react';
import { Appcontext } from '../../App';

const CompSignIn = () => {
  const {_setShowLoader,_setFadeOut} = useContext(Appcontext)
  const [_email,_setEmail] = useState('')
  const [_password,_setPassword] = useState('')
  const [_checked,_setChecked] = useState(false)

  const fnSignInHandler = async function(e){
    e.preventDefault()
    _setShowLoader(true)
    _setEmail('')
    _setPassword('')
    await fnSetPersistence(_checked,_setFadeOut)
    await fnSignin(_email,_password,_setFadeOut)
    if(auth.currentUser.emailVerified){
      alert(`${auth.currentUser.displayName}님 로그인 되었습니다.`)
    }
    else{
      alert('이메일 인증 후 다시 로그인해주세요.')
      await fnSignOut(_setFadeOut)
    }
    _setFadeOut(true)
  }

  const fnSendPasswordResetEmailHandler = async function(){
    const result = window.prompt('가입하신 이메일 주소를 입력해주세요.')
    if(!result) return
    await fnSendPasswordResetEmail(result,_setFadeOut)
    alert('비밀번호 재설정 이메일이 발송되었습니다.')
  }

  return (
    <section className='section-signin'>
      <h2><img src={require('../../assets/img/login/title-sign-in.png')} alt="" /></h2>
      <form onSubmit={fnSignInHandler}>
        <p className='email-wrap'>
          <input onChange={e=>_setEmail(e.target.value)} value={_email} type="email" placeholder='가입하신 이메일 주소를 입력하세요.' required/>
        </p>
        <p className='password-wrap'>
          <input onChange={e=>_setPassword(e.target.value)} value={_password} type="password" autoComplete='on' placeholder='가입하신 비밀번호를 입력하세요.' required/>
        </p>
        <p className='btn-wrap'>
          <button><img src={require('../../assets/img/login/btn-login.png')} alt="" /></button>
          <button onClick={async()=>await fnGoogleSignin(_setFadeOut)} type='button'><img src={require('../../assets/img/login/btn-google-login.png')} alt="" /></button>
        </p>
        <p className='remember-wrap'>
          <input onChange={e=>_setChecked(e.target.checked)} type="checkbox" id="remember" className='hidden'/>
          <label htmlFor="remember">
            <img src={require('../../assets/img/login/remember-check.png')} alt="" />
            <img src={require('../../assets/img/login/remember-checked.png')} alt="" />
          </label>
        </p>
        <p className='password-email-wrap'>
          <button onClick={fnSendPasswordResetEmailHandler} type='button'><img src={require('../../assets/img/login/btn-password-email.png')} alt="" /></button>
        </p>
      </form>
    </section>
  );
};

export default CompSignIn;