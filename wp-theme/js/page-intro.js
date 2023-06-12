$(function(){
  var reqID
    function fnSectionMotion() {
      var offT
      var elH
      var meta
      $('.page-section-intro ul li').each(function(){
        offT = $(this).offset().top
        if(scrT >= offT - (winH * 0.8)){
          $(this).addClass('active')
        }
        else{
          $(this).removeClass('active')
        }
        $('.page-section-intro ul li figure').each(function(){
          offT = $(this).offset().top
          elH = $(this).innerHeight()
          meta = 0 + (scrT - (offT - winH * 0.5 + elH * 0.5)) * 0.1
          if(meta < -14) meta = -14
          if(meta > 14) meta = 14
          $(this).children('img').css({transform:`scale(1.4) translateY(${meta}%)`})
        })
      });
    }
    fnSectionMotion()
    $(window).scroll(function () {
      reqID = requestAnimationFrame(fnSectionMotion)
    }).resize(function () {
      reqID = requestAnimationFrame(fnSectionMotion)
    })
})