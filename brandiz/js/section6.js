$(function () {
  var reqID
  function fnSection6Motion() {
    var elT = $('.section6 .contact').offset().top
    var meta = 0 + (scrT - elT)
    if (meta > 0) meta = 0
    $('.section6 .car').css({ 'transform': `translateX(${meta}px)` })
  }
  fnSection6Motion()
  $(window).scroll(function () {
    reqID = requestAnimationFrame(fnSection6Motion)
  }).resize(function () {
    reqID = requestAnimationFrame(fnSection6Motion)
  })
})  