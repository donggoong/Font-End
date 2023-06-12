$(function(){

  carousel3d(".carousel",2000,1000)

  $('.home-section3 .bg').ripples({
    resolution: 512,
    dropRadius: 20,
    perturbance: 0.02,
  });

  var flipBook1 = new flipBook('.flip-book1')
  var reqID

  function fnHeaderMotion() {
    var offT = $('.home-section3').offset().top
    var num
    if(scrT >= offT - winH *0.3){
      num = 2
    }
    else{num = 1
    }
    flipBook1.flip(num)
  }

  fnHeaderMotion()
  
  $(window).scroll(function () {
    reqID = requestAnimationFrame(fnHeaderMotion)
  }).resize(function () {
    reqID = requestAnimationFrame(fnHeaderMotion)
  })
})