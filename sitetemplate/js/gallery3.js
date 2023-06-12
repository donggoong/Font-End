$(function(){
  $(`.grid_container li a`).viewbox()
  var reqID
  function fnGalleryMotion() {
    $(`.grid_container li`).each(function(){
      var offT = $(this).offset().top
      var elH = $(this).innerHeight()
      var meta = 0 + (scrT - (offT * 0.5 + elH * 0.5)) * 0.02
      if(meta>15) meta = 15
      if(meta<-15) meta = -15
      $(this).find('img').css({'transform':`scale(1.2) translateY(${meta}%)`})
    })
  }
  fnGalleryMotion()
  $(window).scroll(function () {
    reqID = requestAnimationFrame(fnGalleryMotion)
  }).resize(function () {
    reqID = requestAnimationFrame(fnGalleryMotion)
  })
})