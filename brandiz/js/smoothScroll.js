{
  let scrollSpeed = 0
  const fnSmoothScroll= function(){
    if(isMobile) return false
    /* 
    $(window).scrollTop($(window).scrollTop() + 10) 
    */
    window.scrollTo({
      top : window.scrollY + scrollSpeed
    })
    scrollSpeed *= 0.9
    requestAnimationFrame(fnSmoothScroll)
  }
  fnSmoothScroll()
  /* 
  $('section,main').bind('mousewheel',function(e){
    e.preventDefault()
    scrollSpeed = e.originalEvent.wheelDelta / -120 * 10
  }) 
  */
 let prevWheelDelta
  window.addEventListener('mousewheel', e=>{
    e.preventDefault()
    if(e.wheelDelta !== prevWheelDelta) scrollSpeed = 0
    scrollSpeed += e.wheelDelta / -120 * 10
    prevWheelDelta = e.wheelDelta
  },{passive:false})
}
