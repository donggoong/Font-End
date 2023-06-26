# 1 to 50 Game
## 🔧 개발일지
### 📅 2023.06.26

  <blockquote>
  <details>
    <summary>초기 DOM 구조 구성</summary>

  ```html
  <main>
    <section>
      <div class="ui">
        <h1>1 to 50</h1>
        <div class="wrap-bottom">
          <b class="next-number"></b>
          <div class="wrap-right">
            <button class="btn-restart">restart</button>
            <em class="sec">15.5</em>
          </div>
        </div>
      </div>
      <div class="board"></div>
      <div class="init">
        <button class="btn-start">start</button>
      </div>
      <div class="game-over">
        <p>You are Failed!</p>
        <button class="btn-again">start again</button>
      </div>
    </section>
  </main>
  ```
  </details>
    <details>
      <summary>Code</summary>

  <blockquote>
    <details>
      <summary>spawn.js</summary>

  ```js
    window.btnArr
    /* 버튼 배열 생성 */
    window.fnSetArr = function(start,end){
      btnArr = [] // 빈 배열생성
      for(let i = start; i<=end; i++){ // 첫 출력은 1 ~ 25, 두번째 출력은 26 ~ 50을 파라미터로 받는다.
        let button = document.createElement('button')
        button.value = i
        button.innerHTML=`<span>${i}</span>`
        btnArr.push(button) // 생성한 버튼 요소를 배열로 push
      }
    }
    /* 만든 배열 출력 */
    window.fnSpawnBtn = function(){
      for(let i = 1; i <= 25; i++){
        let ranN = Math.floor(Math.random() * btnArr.length) // 배열의 길이 만큼 랜덤 수를 출력. 배열의 시작은 0번째 부터 이므로 ceil이 아닌 floor로 사용
        let button = btnArr[ranN]
        document.querySelector('.board').append(button)
        btnArr.splice(ranN,1) // 랜덤한 버튼을 출력하고 출력한 버튼은 배열에서 삭제
      }
    }
    /* 출력된 버튼의 클릭 이벤트 부여 */
    window.fnBtnHandler = function(){
      document.querySelectorAll('.board button').forEach(btn=>{
        btn.addEventListener('click',e=>{
          if(parseInt(e.currentTarget.value)===nextNum){
            e.currentTarget.disabled = true // 클릭한 버튼과 클릭해야하는 버튼의 값이 맞으면 다음에는 클릭을 못하게 한다.
            fnPrintNextnum(++nextNum)
          }else{
            time -= 10*10 // 잘못된 버튼을 클릭하면 타이머 10초 차감
            document.querySelector('section').classList.add('active')
            document.querySelector('section').addEventListener('animationend',e=>{
              document.querySelector('section').classList.remove('active')
            }) // 틀렸을시 애니메이션 효과를 위한 클래스 추가와 애니메이션이 종료된 후 클래스 제거
          }
        })
      })
    }
  ```
  </details>
  <details>
    <summary>init.js</summary>

  ```js
    window.nextNum = 1
    window.startTimer = 10 * 60
    window.time = startTimer
    window.intervalID
    window.timeoutID

    window.fninit = function(){
      fnPrintNextnum(nextNum) // 다음 클릭할 숫자를 나타냄
      fnSetTimer() // 타이머 가동
      fnInitReset() // 초기화
      fnSetArr(1,25) // 1번부터 25번 버튼 배열 생성
      fnSpawnBtn() // 배열을 랜덤하게 스폰
      fnBtnHandler() // 출력된 숫자 버튼의 클릭 이벤트 함수
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
        fnGameOver()
      },100)
    }
    /* gameover시 출력 */
    window.fnGameOver = function(){
      if(time <= 0){
        clearInterval(intervalID)
        document.querySelector('.game-over').style.display='flex'
      }
    }
  ```
  </details>
  <details>
    <summary>script.js</summary>

  ```js
    /* 스타트 버튼 클릭 */
    document.querySelector('.btn-start').addEventListener('click',()=>{
      document.querySelector('.init').remove()
      fninit()
    })
    /* 다시하기 버튼 클릭 */
    document.querySelector('.btn-again').addEventListener('click',()=>{
      document.querySelector('.game-over').style.display = 'none' // .game-over는 재사용을 위해 remove()가 아닌 display=none으로 해야한다.
      fninit()
    })
  ```
  </details>
  </blockquote>
  </details>
  </blockquote>
