$(function(){
  var reqID
    function fnSectionMotion() {
      var offT = $('.page-section-area p').offset().top
      if(scrT >= offT - winH *0.9){
        $('.page-section-area p').addClass('active')
      }
      else{
        $('.page-section-area p').removeClass('active')
      }
      offT = $('.page-section-area figure').offset().top
      if(scrT >= offT - winH *0.9){
        $('.page-section-area figure img').addClass('active')
      }
      else{
        $('.page-section-area figure img').removeClass('active')
      }
    }
    fnSectionMotion()
    $(window).scroll(function () {
      reqID = requestAnimationFrame(fnSectionMotion)
    }).resize(function () {
      reqID = requestAnimationFrame(fnSectionMotion)
    })
})