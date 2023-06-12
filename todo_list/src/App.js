import fb from "./fb/config";
import { auth } from "./fb/auth";
import { onAuthStateChanged } from "firebase/auth";
import { db, fnGetDocCount, fnGetDocs } from "./fb/db";
import { collection, onSnapshot } from "firebase/firestore";
import { Routes, Route, useNavigate } from "react-router-dom";
import { createContext, useState } from "react";
import { useEffect } from "react";
import CompHeader from "./components/compHeader/CompHeader";
import CompSignIn from "./components/compSignIn/CompSignIn";
import CompHome from "./components/compHome/CompHome";
import Comp404 from "./components/comp404/Comp404";
import CompSignUp from "./components/compSignUp/CompSignUp";
import CompAdd from "./components/compAdd/CompAdd";
import CompDetail from "./components/compDetail/CompDetail";
import CompLoader from "./components/comploader/CompLoader";
export const Appcontext = createContext()

function App() {
  const navi = useNavigate()
  const [_isLogged,_setIsLogged] = useState(null)
  const [_showLoader,_setShowLoader] = useState(true)
  const [_fadeOut,_setFadeOut] = useState(false)
  const [_docsCnt,_setDocsCnt] = useState(0)
  const [_docsArr,_setDocsArr] = useState(null)
  const [_nextDoc,_setNextDoc] = useState(null)
  const [_docsOutputArr,_setDocsOutputArr] = useState(null)
  useEffect(()=>{
    let init = true
    onAuthStateChanged(auth, (user) => {
      if (user && user.emailVerified) {
        _setIsLogged(true) //로그인된상태
        onSnapshot(
          collection(db, user.uid), async () => {
            const {docsArr,nextDoc} = await fnGetDocs(user.uid,5)
            _setDocsCnt(await fnGetDocCount(user.uid))
            _setDocsArr(docsArr)
            _setNextDoc(nextDoc)
            _setDocsOutputArr(docsArr)
          })
          navi('/')
      } else {
        _setIsLogged(false) //로그아웃된상태
        navi('/signin')
      }
      if(init){_setFadeOut(true);init=false}
    });
  },[])

  return (
    <Appcontext.Provider value={{navi,_isLogged,_setIsLogged,_showLoader,_setShowLoader,_fadeOut,_setFadeOut,_docsCnt,_setDocsCnt,_docsArr,_setDocsArr,_nextDoc,_setNextDoc,_docsOutputArr,_setDocsOutputArr}}>
      <main>
        <img className="main-bg" src={require('./assets/img/common/main-bg.png')} alt="" />
        <h1><img src={require('./assets/img/header/title-main.png')} alt="" /></h1>
        <article>
          <CompHeader/>
          <Routes>
          <Route path="/" element={<CompHome/>} />
          <Route path="/signin" element={<CompSignIn/>} />
          <Route path="/signup" element={<CompSignUp/>} />
          <Route path="/add" element={<CompAdd/>} />
          <Route path="/detail/:docid" element={<CompDetail/>} />
          <Route path="/*" element={<Comp404/>} />
          </Routes>
        </article>
      </main>
      {(_showLoader)&&<CompLoader/>}
    </Appcontext.Provider>
  );
}

export default App;
