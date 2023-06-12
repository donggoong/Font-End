$(function(){
  $(`.flex_container li a`).viewbox()
  var reqID
  function fnGalleryMotion() {
    $(`.flex_container li`).each(function(){
      var offT = $(this).offset().top
      var elH = $(this).innerHeight()
      var meta = 1 + Math.abs(scrT - (offT - (winH * 0.5 + elH * 0.5))) * -0.003
      if(meta < 0) meta = 0
      $(this).find('a').css({'transform':`scale(${meta})`})
    })
  }
  fnGalleryMotion()
  $(window).scroll(function () {
    reqID = requestAnimationFrame(fnGalleryMotion)
  }).resize(function () {
    reqID = requestAnimationFrame(fnGalleryMotion)
  })
})