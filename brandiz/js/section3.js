$(function(){
  var reqID
  function fnSection3Motion() {
    var offT = $('.section3').offset().top
    var meta = 0 + (scrT - (offT)) * 0.1
    if(meta < -40) meta=-40 
    if(meta > 40) meta=40 
    $('.section3 .bg').css({'transform':`scale(1.3) translateY(${meta}%)`})
  }
  fnSection3Motion()
  $(window).scroll(function () {
    reqID = requestAnimationFrame(fnSection3Motion)
  }).resize(function () {
    reqID = requestAnimationFrame(fnSection3Motion)
  })

  $('.section3 .bg').ripples({
    resolution: 512,
    dropRadius: 20,
    perturbance: 0.04,
  });
})