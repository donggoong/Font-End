import { Route, Routes, useLocation } from "react-router-dom";
import CompMenu from "./components/compMenu/CompMenu";
import CompCalc from "./components/compCalc/CompCalc";
import CompBMI from "./components/compBMI/CompBMI";
import CompDDay from "./components/compDDay/CompDDay";
import CompBackBtn from "./components/compBackBtn/CompBackBtn";
import { createContext, useEffect, useState } from "react";
import { fnGetTheme} from './script/comp-menu';
export const AppContext = createContext()
function App() {
  const [_theme, _setTheme] = useState({ 1: false, 2: false, 3: false })
  const [_key , _setKey] = useState(1)
  const location = useLocation()

  useEffect(()=>{
    _setKey(p=>p+3)
    _setTheme(fnGetTheme())
},[])

  return (
    <AppContext.Provider value={{_theme, _setTheme, _key, _setKey}}>
      {location.pathname!=='/'&&<CompBackBtn/>}
    <Routes>
      <Route path="/" element={<CompMenu />} />
      <Route path="/calculator" element={<CompCalc />} />
      <Route path="/bmi" element={<CompBMI />} />
      <Route path="/dday" element={<CompDDay />} />
    </Routes>
    </AppContext.Provider>
  );
}

export default App;
