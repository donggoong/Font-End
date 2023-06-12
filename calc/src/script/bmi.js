export const fnChkObj = function(param){
  const obj = {
    male : false,
    female : false
  }
  obj[param]=true
  return obj
}

export const fnCheckBMI= function(gender,height,weight){
  const bmi = (weight /((height*height)/10000)).toFixed(2)
  let morphNum
  let Fill
  if(((gender === 'male') && (bmi < 15)) || ((gender === 'female') && (bmi < 20))){
    morphNum = (gender === 'male')?'man1':'woman1'
    Fill = '#8EACC9'
  }
  else if(((gender === 'male') && (15 <= bmi && bmi < 20)) || ((gender === 'female') &&  (20 <= bmi && bmi < 25))){
    morphNum = (gender === 'male')?'man2':'woman2'
    Fill = '#97C93C'
  }
  else if(((gender === 'male') && (20 <= bmi && bmi < 25)) || ((gender === 'female') &&  (25 <= bmi && bmi < 30))){
    morphNum = (gender === 'male')?'man3':'woman3'
    Fill = '#FDD500'
  }
  else if(((gender === 'male') && (25 <=bmi && bmi < 30)) || ((gender === 'female') &&  (30 <= bmi && bmi < 35))){
    morphNum = (gender === 'male')?'man4':'woman4'
    Fill = '#F5881F'
  }
  else{
    morphNum = (gender === 'male')?'man5':'woman5'
    Fill = '#EF5023'
  }

  
  let min = (gender==='male')?10:15
  let max = (gender==='male')?35:40
  let deg = ((bmi-min)/(max-min))*180
  if(deg<0) deg = 0
  if(deg>180) deg = 180

  let err = (bmi < 3 || bmi > 80)?true:false
  
  if(!err){
    let timeoutID
    clearTimeout(timeoutID)
    timeoutID = setTimeout(() => {
      gender==='male'?
      window.TweenMax.to(".manorg",1,{morphSVG:`.${morphNum}`,fill:Fill,ease:window.Linear.easeNone}):
      window.TweenMax.to(".womanorg",1,{morphSVG:`.${morphNum}`,fill:Fill,ease:window.Linear.easeNone})
    }, 500);
  }

  return {bmi,deg,err}
}