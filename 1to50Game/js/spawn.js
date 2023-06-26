window.btnArr

window.fnSetArr = function(start,end){
  btnArr = []
  for(let i = start; i<=end; i++){
    let button = document.createElement('button')
    button.value = i
    button.innerHTML=`<span>${i}</span>`
    btnArr.push(button)
  }
}

window.fnSpawnBtn = function(){
  for(let i = 1; i <= 25; i++){
    let ranN = Math.floor(Math.random() * btnArr.length)
    let button = btnArr[ranN]
    document.querySelector('.board').append(button)
    btnArr.splice(ranN,1)
  }
}

window.fnBtnHandler = function(){
  document.querySelectorAll('.board button').forEach(btn=>{
    btn.addEventListener('click',e=>{
      if(parseInt(e.currentTarget.value)===nextNum){
        e.currentTarget.disabled = true
        fnPrintNextnum(++nextNum)
      }else{
        time -= 10*10
        document.querySelector('section').classList.add('active')
        document.querySelector('section').addEventListener('animationend',e=>{
          document.querySelector('section').classList.remove('active')
        })
      }
    })
  })
}