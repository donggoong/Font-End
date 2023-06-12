$(function () {
  var start = false
  $('.progress-num').each(function () {
    var c = 0
    var el = $(this)
    setInterval(function () {
      if (start === true) {
        var t = parseInt(el.attr('data-t'))
      } else {
        var t = 0;
      }
      c += (t - c) * 0.2
      el.text(Math.round(c))
    }, 50);
  })

  var reqID
  function fnSection5Motion() {
    var elT
    var elH
    /* progress */
    elT = $('.section5 .dummy-scroll').offset().top
    elH = $('.section5 .dummy-scroll').innerHeight()
    if (scrT >= elT - winH) {
      $('.section5 .progress ul li').addClass('active')
      TweenMax.to(".section5 .poly-circle", 0.5, { morphSVG: ".section5 .badge", ease: Linear.easeNone })
      start = true
    } else {
      $('.section5 .progress ul li').removeClass('active')
      TweenMax.to(".section5 .poly-circle", 0.5, { morphSVG: ".section5 .poly-circle-copy", ease: Linear.easeNone })
      start = false
    }
    /* sticky ratio */
    var stickyStart = $('.section5').offset().top + (winH * 0.5)
    var stickyEnd = $('.section6').offset().top - winH - winH
    var scrollRange = stickyEnd - stickyStart
    var scrollRatio = (scrT - stickyStart) / scrollRange
    if (scrollRatio < 0) scrollRatio = 0
    if (scrollRatio > 1) scrollRatio = 1
    var imgN = parseInt(scrollRatio * 47) + 1
    $(`.section5 .earth figure .img`).hide()
    $(`.section5 .earth figure .img${imgN}`).show()
  }
  fnSection5Motion()
  $(window).scroll(function () {
    reqID = requestAnimationFrame(fnSection5Motion)
  }).resize(function () {
    reqID = requestAnimationFrame(fnSection5Motion)
  })
})
