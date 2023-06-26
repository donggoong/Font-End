window.nextNum = 1
window.startTimer = 10 * 60
window.time = startTimer
window.intervalID
window.timeoutID

window.fninit = function(){
  fnPrintNextnum(nextNum)
  fnSetTimer()
  fnInitReset()
  fnSetArr(1,25)
  fnSpawnBtn()
  fnBtnHandler()
}
/* 초기화 */
window.fnInitReset = function(){
  nextNum = 1
  time = startTimer
  document.querySelector('.board').innerHTML=''
}
/* 다음 숫자 출력 */
window.fnPrintNextnum = function(n){
  document.querySelector('.next-number').innerText = n
}
/* 타이머 */
window.fnSetTimer = function(){
  intervalID = setInterval(()=>{
    time --
    document.querySelector('.sec').innerText = time / 10
    fnGameOver(time)
  },100)
}
/* gameover시 출력 */
window.fnGameOver = function(t){
  if(t <= 0){
    clearInterval(intervalID)
    document.querySelector('.game-over').style.display='flex'
  }
}
