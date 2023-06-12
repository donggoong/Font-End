$(function () {
  var reqID
  var meta
  function fnShortcutMotion() {
    var offT = $('.shortcut').offset().top
    var elH = $('.shortcut').innerHeight()
    meta = 0 + (scrT - (offT - winH * 0.5 + elH * 0.5)) * 0.5
    $('.shortcut .bg').css({'background-position':`center ${meta}px`})
    meta = 1 + Math.abs(scrT - (offT - winH * 0.5 + elH * 0.5)) * -0.001
    if(meta < 0) meta = 0
    $('.shortcut .center').css({'opacity':`${meta}`,'transform':`scale(${meta})`})
  }
  fnShortcutMotion()
  $(window).scroll(function () {
    reqID = requestAnimationFrame(fnShortcutMotion)
  }).resize(function () {
    reqID = requestAnimationFrame(fnShortcutMotion)
  })
})