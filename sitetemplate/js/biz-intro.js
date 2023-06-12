$(function(){
  var reqID
  function fnBizIntroMotion() {
    $(`.biz_intro_section>p , .biz_intro_section li`).each(function(){
      var offT = $(this).offset().top
      if(scrT >= offT - winH * 0.9) $(this).addClass('active')
      else $(this).removeClass('active')
    })

    $(`.biz_intro_section li div`).each(function(){
      var offT = $(this).offset().top
      var elH = $(this).innerHeight()
      var meta = 0 + (scrT - (offT - winH*0.5 + elH*0.5)) * 0.05
      if(meta > 15) meta = 15
      if(meta < -15) meta = -15
      $(this).children('img').css({'transform': `scale(1.3) translateY(${meta}%)`}) 
    })
  }

  fnBizIntroMotion()

  $(window).scroll(function () {
    reqID = requestAnimationFrame(fnBizIntroMotion)
  }).resize(function () {
    reqID = requestAnimationFrame(fnBizIntroMotion)
  })
})