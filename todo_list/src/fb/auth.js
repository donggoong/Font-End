import { getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, deleteUser ,onAuthStateChanged, setPersistence, browserSessionPersistence, browserLocalPersistence } from "firebase/auth";
export const auth = getAuth();

/* -------------------사용자 등록------------------- */
export const fnCreateUser = function(email,password,setFadeOut){
  return new Promise((resolve) => {
    createUserWithEmailAndPassword(auth, email, password).then((result) => {
      resolve()
    }).catch((error) => {
      if(error.code==='email-already-in-use') alert('이미 등록된 계정입니다.')
      if(error.code==='invalid-email') alert('잘못된 이메일 형식입니다.')
      if(error.code==='weak-password') alert('비밀번호 형식이 잘못 되었습니다.\n(최소 6자리 이상)')
      setFadeOut(true)
    });
  })
}
/* -------------------사용자 등록------------------- */
export const fnDeleteUser = function(setFadeOut){
  return new Promise((resolve) => {
    deleteUser(auth.currentUser).then(() => {
      resolve()
    }).catch((error) => {
      alert('로그아웃 후 다시 로그인 하신 후 회원탈퇴를 실행해주세요');
      setFadeOut(true)
    });
  })
}
/* -------------------사용자 정보 업데이트------------------- */
export const fnUpdateProfile = function(displayName,photoURL,setFadeOut){
  return new Promise((resolve) => {
    updateProfile(auth.currentUser, {
      displayName, photoURL
    }).then(() => {
      resolve()
    }).catch((error) => {
      alert(error.message)
      setFadeOut(true)
    });
  })
}
/* -------------------로그인------------------- */
export const fnSignin = function(email,password,setFadeOut){
  return new Promise((resolve) => {
    signInWithEmailAndPassword(auth, email, password).then((result) => {
      resolve()
    }).catch((error) => {
      if(error.code==='auth/user-not-found') alert('해당 계정은 없는 계정입니다.')
      if(error.code==='auth/wrong-password') alert('잘못된 비밀번호입니다.')
      setFadeOut(true)
    });
  })
}
/* -------------------구글로그인------------------- */
export const fnGoogleSignin = function(setFadeOut){
  return new Promise((resolve) => {
    signInWithPopup(auth,new GoogleAuthProvider()).then((result) => {
      resolve()
    }).catch((error) => {
      alert(error.message)
      setFadeOut(true)
    });
  })
}
/* -------------------로그아웃------------------- */
export const fnSignOut = function(setFadeOut){
  return new Promise((resolve) => {
    signOut(auth).then(() => {
      resolve()
    }).catch((error) => {
      alert(error.message)
      setFadeOut(true)
    });
  })
}
/* -------------------이메일 인증------------------- */
export const fnSendEmailVerification = function(setFadeOut){
  return new Promise((resolve) => {
    sendEmailVerification(auth.currentUser).then(() => {
      resolve()
    }).catch(error=>{
      setFadeOut(true)
    })
  })
} 
/* -------------------비밀번호 재설정 이메일 인증------------------- */
export const fnSendPasswordResetEmail = function(email,setFadeOut){
  return new Promise((resolve) => {
  sendPasswordResetEmail(auth, email).then(() => {
    resolve()
  }).catch((error) => {
    setFadeOut(true)
    if(error.code==='auth/user-not-found') alert('해당 이메일은 없는 계정입니다.')
    if(error.code==='auth/invalid-email') alert('잘못된 이메일 양식입니다.')
    else alert('error ! :'+error.message)
  });
  })
}
/* -------------------인증 지속성------------------- */
export const fnSetPersistence = function(checked,setFadeOut){
  return new Promise((resolve) => {
    const persistence = (checked)?browserLocalPersistence:browserSessionPersistence
    setPersistence(auth, persistence)
  .then(() => {
    resolve()
  })
  .catch((error) => {
    alert(error.code+':'+error.message)
    setFadeOut(true)
  });
  })
}