$(function(){
    var reqID
    function fnSectionMotion() {
      var offT = $('.page-section-greet p').offset().top
      if(scrT >= offT - (winH * 0.5)){
        $('.page-section-greet p').addClass('active')
      }
      else{
        $('.page-section-greet p').removeClass('active')
      }

      offT = $('.page-section-greet figure').offset().top
      var elH = $('.page-section-greet figure').innerHeight()
      var meta = 0 + (scrT - (offT - winH*0.5+elH*0.5)) * 0.15
      $('.page-section-greet figure img').css({transform:`rotateX(${meta}deg)`})
    }
    fnSectionMotion()
    $(window).scroll(function () {
      reqID = requestAnimationFrame(fnSectionMotion)
    }).resize(function () {
      reqID = requestAnimationFrame(fnSectionMotion)
    })
})