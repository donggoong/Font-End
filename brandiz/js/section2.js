$(function () {
  var reqID
  function fnSection2Motion() {
    var offT = $('.section2').offset().top
    var meta = 0 + (scrT - (offT - $('header').innerHeight())) * 0.07
    if (meta > 20) meta = 20
    if (meta < -20) meta = -20
    $('.section2 .bg').css({ 'transform': `scale(${1.1}) translateY(${meta}%) translateX(-50%)` })
  }
  fnSection2Motion()
  $(window).scroll(function () {
    reqID = requestAnimationFrame(fnSection2Motion)
  }).resize(function () {
    reqID = requestAnimationFrame(fnSection2Motion)
  })
  /* slider */
  var n = 1
  var timeoutID
  var intervalID = setInterval(() => {
    n++
    change(-20,20)
  }, 3000);
  function change(e1,e2) {
    if (n > 2) n = 1
    if (n < 1) n = 2
    $(`.carousel .img`).stop().animate({ 'left': `${e1}%`, 'opacity': '0' })
    $(`.carousel .img${n}`).css({ 'left': `${e2}%` }).stop().animate({ 'left': '0%', 'opacity': '1' })
  }

  function autoplay(){
    clearInterval(intervalID)
    clearTimeout(timeoutID)
    timeoutID = setTimeout(()=>{
      intervalID = setInterval(() => {
        n++
        change(-20,20)
      }, 3000);
    },5000);  
  }

  $('.carousel .next').click(function () {
    n++
    change(-20,20)
    autoplay()
  })
  $('.carousel .prev').click(function () {
    n--
    change(20,-20)
    autoplay()
  })
})