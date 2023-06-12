$(function () {
  /* wave motion */
  $(window).load(function () {
    var wave1 = new displacmentWave('.section1 .bg img', '#ripple-filter1', './img/ripple/ripple.png', 5, 4)
    setInterval(function () {
      wave1.wave()
    }, 6000)
  })
  /* scroll motion & parallax */
  var reqID
  function fnHeaderMotion() {
    var offT
    var meta
    offT = $('.section2').offset().top
    if (scrT >= offT - winH * 0.5) {
      $('.section1').removeClass('active')
    }
    else {
      $('.section1').addClass('active')
    }
    offT = $('.section1').offset().top
    meta = 0 + (scrT - offT) * 0.3
    $('.section1 .boy').css({'transform':`translateY(${meta}px)`})
    meta = 1 + (scrT - offT) * 0.0001
    $('.section1 .bg').css({'transform':`scale(${meta})`})
    meta = 0 + (scrT - offT) * 0.03
    $('.section1 .bg').css({'filter':`blur(${meta}px)`})
  }
  fnHeaderMotion()
  $(window).scroll(function () {
    reqID = requestAnimationFrame(fnHeaderMotion)
  }).resize(function () {
    reqID = requestAnimationFrame(fnHeaderMotion)
  })

})