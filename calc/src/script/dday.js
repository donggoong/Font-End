export const fnGetDateInfo = function(yymmdd){
  const dday = new Date(yymmdd)
  const dayArr = ['sun','mon','two','wed','thr','fri','sat']
  const day = dayArr[dday.getDay()]
  const year = dday.getFullYear()
  const month = dday.getMonth() + 1 < 10?'0'+(dday.getMonth() + 1):dday.getMonth() + 1
  const date = dday.getDate() + 1 < 10?'0'+dday.getDate():dday.getDate()
  const ap = dday.getHours()<12?'AM':'PM'
  const hour = dday.getHours() + 1 < 10?'0'+dday.getHours():dday.getHours()
  const minute = dday.getMinutes() + 1 < 10?'0'+dday.getMinutes():dday.getMinutes()
  const seconds = dday.getSeconds() + 1 < 10?'0'+dday.getSeconds():dday.getSeconds()
  const timestamp = dday.getTime()
  
  return {day,year,month,date,ap,hour,minute,seconds,timestamp}
}

export const fnSetDDayArrInit = function(){
  const ddayArrStorage = window.localStorage.getItem('ddayArrStorage')
  const ddayArr = ddayArrStorage?JSON.parse(ddayArrStorage):[
    {
      id : Date.now()+1,
      title:'18시30분 (sample data)',
      dday:`${new Date().getFullYear()}-${(new Date().getMonth()+1<10)?'0'+(new Date().getMonth()+1):new Date().getMonth()+1}-${new Date().getDate()}T18:30`,
    },
    {
      id : Date.now()+2,
      title:'크리스마스 (sample data)',
      dday:`${new Date().getFullYear()}-12-25T00:00`,
    },
    {
      id : Date.now()+3,
      title:'새해 (sample data)',
      dday:`${new Date().getFullYear()+1}-01-01T00:00`,
    },
  ]
  return ddayArr
}

export const fnTimer = function(ddayTimeStamp){
  let diffTimeStamp = ddayTimeStamp - Date.now()
  let diffSeconds = parseInt(diffTimeStamp / 1000)
  let remain
  let diffDate = parseInt(diffSeconds / (24 * 60 * 60))
  remain = diffSeconds % (24*60*60)
  let diffHour = parseInt(remain / (60 * 60))
  remain = diffSeconds % (60*60)
  let diffMinute = parseInt(remain / (60))
  let remainSecsonds = remain = diffSeconds % (60)
  if(diffTimeStamp<0){
    diffDate=0;diffHour=0;diffMinute=0;remainSecsonds=0;
  }
  return {diffDate,diffHour,diffMinute,remainSecsonds}
}