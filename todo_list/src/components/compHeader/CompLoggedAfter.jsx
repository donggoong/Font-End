import React from 'react';
import { auth, fnDeleteUser, fnSignOut } from '../../fb/auth';
import { useContext } from 'react';
import { Appcontext } from '../../App';
import { fnDeleteDirectory } from '../../fb/storage';
import { fnDeleteCollection } from '../../fb/db';

const CompLoggedAfter = () => {
  const {navi,_setShowLoader,_setFadeOut} = useContext(Appcontext)
  const fnSignOutHandler = async function(){
    const result = window.confirm('로그아웃하시겠습니까?')
    if(!result) return
    _setShowLoader(true)
    await fnSignOut(_setFadeOut)
    _setFadeOut(true)
    
  }
  const fnDeresgisterHandler = async function(){
    const result = window.confirm('회원님과 관련된 모든 정보가 삭제됩니다.\n회원 탈퇴를 하시겠습니까?')
    if(!result) return
    _setShowLoader(true)
    await fnDeleteCollection(auth.currentUser.uid)
    await fnDeleteDirectory(auth.currentUser.uid)
    await fnDeleteUser(_setFadeOut)
    alert('회원탈퇴가 완료되었습니다.')
    _setFadeOut(true)
    navi('/signin')
  }
  return (
    <div className='logged-after'>
      <p className='user'>
        <img src={auth.currentUser.photoURL} alt="" />
        <span>
          <em>{auth.currentUser.displayName}님 환영합니다.</em>
          <em>{auth.currentUser.email}</em>
        </span>
      </p>
      <p className='btns'>
        <button onClick={fnSignOutHandler}>
          <img src={require('../../assets/img/header/btn-sign-out.png')} alt="" />
        </button>
        <button onClick={fnDeresgisterHandler}>
          <img src={require('../../assets/img/header/btn-deresgister.png')} alt="" />
        </button>
      </p>
    </div>
  );
};

export default CompLoggedAfter;