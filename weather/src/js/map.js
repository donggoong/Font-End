/* 현재위치 정보를 리턴해주는 함수 */
export const fnGetLatLng = function(){
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (location)=>{//success
        resolve(
          {
            lat:location.coords.latitude,
            lng:location.coords.longitude
          }
        )
      }
      ,(error)=>{//failed
        alert(`Error Code : ${error.code} \nError Message : ${error.message}`)//throw new Error('Location error')
        reject(new Error(`Code : ${error.code} message : ${error.message}`))
      })
  })
}

/* 위경도를 받아서 구글맵을 출력하는 함수 */
export const fnInitMap = function(latLngObj, fn){
  const {lat, lng} = latLngObj
  let map = new window.google.maps.Map(document.getElementById("map"), {
    center: { lat : lat, lng : lng },
    zoom: 8,
    styles: mapStyle,
    myLocationButtonEnabled: true
  }); //map
  let center = { lat : lat, lng : lng };
  let marker = new window.google.maps.Marker({ position: center, map: map });
  map.addListener("click",async e => {
    const weatherRenewal = window.confirm('해당위치로 날씨정보를 갱신하시겠습니까?')
    if(weatherRenewal){
      let lat = e.latLng.lat()
      let lng = e.latLng.lng()
      marker.setPosition(e.latLng)
      fn({lat,lng})//클릭한 위치의 위경도를 받아서 주소와 날씨정보 갱신
    }
  }); //click
}

/* 위경도를 받아서 주소를 반환하는 함수 */
export const fnGetAddress = function(latLngObj, language){
  return new Promise((resolve) => {
    const geocoder = new window.google.maps.Geocoder();
    let address
    geocoder.geocode({ location: latLngObj, 'language' : language}, function (results, status) {
      try{
        address =`[ ${results[3].formatted_address} ]`
      }
      catch{
        address = language==='ko'? `"해당 위치의 주소는 존재하지 않습니다."`:`"Failed to get address Information for that location"`
      }
      resolve(address)
    });
  })
}

/* export const fnGetTimezone = function(latLngObj){
  return new Promise((resolve) => {
    const {lat, lng} = latLngObj
    fetch(`https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${lng}&timestamp=0&key=${process.env.REACT_APP_GOOGLE_API_KEY}`).then(data=>{
      resolve(data.json())
    })
  })
} */

const mapStyle = [
  {"featureType": "administrative","elementType": "labels.text.fill","stylers": [{"color": "#6195a0"}]},
  {"featureType": "administrative.province","elementType": "geometry.stroke","stylers": [{"visibility": "off"}]},
  {"featureType": "landscape","elementType": "geometry","stylers": [{"lightness": "0"},{"saturation": "0"},{"color": "#f5f5f2"},{"gamma": "1"}]},
  {"featureType": "landscape.man_made","elementType": "all","stylers": [{"lightness": "-3"},{"gamma": "1.00"}]},
  {"featureType": "landscape.natural.terrain","elementType": "all","stylers": [{"visibility": "off"}]},
  {"featureType": "poi","elementType": "all","stylers": [{"visibility": "off"}]},{"featureType": "poi.park","elementType": "geometry.fill","stylers": [{"color": "#bae5ce"},{"visibility": "on"}]},
  {"featureType": "road","elementType": "all","stylers": [{"saturation": -100},{"lightness": 45},{"visibility": "simplified"}]},
  {"featureType": "road.highway","elementType": "all","stylers": [{"visibility": "simplified"}]},
  {"featureType": "road.highway","elementType": "geometry.fill","stylers": [{"color": "#fac9a9"},{"visibility": "simplified"}]},
  {"featureType": "road.highway","elementType": "labels.text","stylers": [{"color": "#4e4e4e"}]},
  {"featureType": "road.arterial","elementType": "labels.text.fill","stylers": [{"color": "#787878"}]},
  {"featureType": "road.arterial","elementType": "labels.icon","stylers": [{"visibility": "off"}]},
  {"featureType": "transit","elementType": "all","stylers": [{"visibility": "simplified"}]},
  {"featureType": "transit.station.airport","elementType": "labels.icon","stylers": [{"hue": "#0a00ff"},{"saturation": "-77"},{"gamma": "0.57"},{"lightness": "0"}]},
  {"featureType": "transit.station.rail","elementType": "labels.text.fill","stylers": [{"color": "#43321e"}]},
  {"featureType": "transit.station.rail","elementType": "labels.icon","stylers": [{"hue": "#ff6c00"},{"lightness": "4"},{"gamma": "0.75"},{"saturation": "-68"}]},
  {"featureType": "water","elementType": "all","stylers": [{"color": "#eaf6f8"},{"visibility": "on"}]},
  {"featureType": "water","elementType": "geometry.fill","stylers": [{"color": "#c7eced"}]},
  {"featureType": "water","elementType": "labels.text.fill","stylers": [{"lightness": "-49"},{"saturation": "-53"},{"gamma": "0.79"}]}
]