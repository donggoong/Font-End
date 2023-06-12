$(function(){
  var reqID
  function fnbizMotion() {
    $(`.biz_area_section p, .biz_area_section figure`).each(function(){
      var offT = $(this).offset().top
      if(scrT >= offT - winH * 0.8){
        $(this).addClass('active')
      }
      else{
        $(this).removeClass('active')
      }
    })
  }
  fnbizMotion()
  $(window).scroll(function () {
    reqID = requestAnimationFrame(fnbizMotion)
  }).resize(function () {
    reqID = requestAnimationFrame(fnbizMotion)
  })
})