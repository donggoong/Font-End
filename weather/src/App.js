import CompCurrent from "./components/compCurrent/CompCurrent";
import CompMap from "./components/compMap/CompMap";
import CompHourly from "./components/compHourly/CompHourly";
import CompDaily from "./components/compDaily/CompDaily";
import { createContext, useLayoutEffect, useState } from "react";
import { fnGetAddress, fnGetLatLng } from "./js/map";
import { fnGetWeatherData } from "./js/weather";

export const Appcontext = createContext()
function App() {
  const [_latLng, _setLatLng] = useState(null) // 위경도
  const [_weatherData, _setWeatherData] = useState(null) // 날씨데이터
  const [_addressEn,_setAddressEn] = useState(null) // 주소
  const [_addressKo,_setAddressKo] = useState(null) // 주소
  const fnAppInit = async function(){ //위경도, 주소, 날씨정보를 초기설정하는 함수
    const latLngObj = await fnGetLatLng() // 위도와 경도를 객체로 반환
    _setLatLng(latLngObj) // 위경도 상태 설정
    const addressKo = await fnGetAddress(latLngObj,'ko')//주소를 반환
    _setAddressKo(addressKo)
    const addressEn = await fnGetAddress(latLngObj,'en')//주소를 반환
    _setAddressEn(addressEn)
    const weatherData = await fnGetWeatherData(latLngObj) // api비동기 통신으로 날씨정보를 반환
    _setWeatherData(weatherData)
  }

  useLayoutEffect(()=>{//리얼돔이 구축된후
    fnAppInit()// 위경도 상태 설정
  },[])

  return (
    <Appcontext.Provider value={{_latLng, _setLatLng, _weatherData, _setWeatherData, _addressEn, _setAddressEn, _addressKo, _setAddressKo, fnAppInit}}>
      <h1><img src={`${process.env.PUBLIC_URL}/img/main/title.png`} alt=""/></h1>
      <div className="app-inner">
        <CompCurrent/>
        <CompMap/>
        <CompHourly/>
        <CompDaily/>
      </div>
    </Appcontext.Provider>
  );
}

export default App;
