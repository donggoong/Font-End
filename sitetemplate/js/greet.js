$(function(){
  var reqID
  function fnGreetMotion() {
    $(`.greet_section p , .greet_section img`).each(function(){
      var offT = $(this).offset().top
      if(scrT >= offT - winH * 0.8) $(this).addClass('active')
      else $(this).removeClass('active')
    })
  }
  fnGreetMotion()
  $(window).scroll(function () {
    reqID = requestAnimationFrame(fnGreetMotion)
  }).resize(function () {
    reqID = requestAnimationFrame(fnGreetMotion)
  })
})