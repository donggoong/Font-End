$(function () {
  var reqID
  function fnHeaderMotion() {
    /* headermotion */
    if(scrT>=35){
      $('header').addClass('active')
    }
    else{
      $('header').removeClass('active')
    }
  }
  fnHeaderMotion()
  $(window).scroll(function () {
    reqID = requestAnimationFrame(fnHeaderMotion)
  }).resize(function () {
    reqID = requestAnimationFrame(fnHeaderMotion)
  })
  /* gnb-lg */
  $('.gnb-lg > div > ul >li > a').click(function (e) {
    e.preventDefault()
  })
  $('.gnb-lg > div > ul >li').mouseenter(function () {
    $(this).find('ul').stop().slideDown()
  }).mouseleave(function () {
    $(this).find('ul').stop().slideUp()
  })
  /* gnb-sm */
  $('.mbtn-open').click(function () {
    $('.gnb-sm').stop().fadeIn(500, function () {
      $('.gnb-sm video')[0].play()
      $('.gnb-sm div').stop().fadeIn()
      $('body').append(`
      <script src="/wp-content/themes/wp-theme/js/app_particle_star.js"></script>
    `)
    })
    /* 
    setTimeout(function () {
      document.querySelector('.gnb-sm video').play()
    }, 500) 
    */
  })
  $('.gnb-sm .mbtn-close').click(function () {
    $('.gnb-sm').stop().fadeOut(500)
    $('.gnb-sm video')[0].currenttime = 0
    $('.gnb-sm > div > ul > li > a').removeClass('active')
    $('.gnb-sm > div > ul > li > ul').stop().slideUp()
    $('body > script:last-child').remove()
  })
  $('.gnb-sm > div > ul > li > a').click(function (e) {
    e.preventDefault()
    $('.gnb-sm > div > ul > li > ul').stop().slideUp()
    $(this).siblings('ul').stop().slideToggle()
    $('.gnb-sm > div > ul > li > a').not($(this)).removeClass('active')
    $(this).toggleClass('active')
  })
  $('.gnb-sm > div > ul > li > ul > li > a').click(function () {
    $('.gnb-sm').stop().fadeOut(500)
  })
})