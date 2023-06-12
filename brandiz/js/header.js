$(function () {
  var offT1, offT2, offT3, offT4, offT5, offT6, offSetArr
  var currentSection


  function fnHeaderScrollMotion() {
    var reqID
    var scrRange = docH - winH
    var scrRatio = scrT / scrRange
    offT1 = $('.section1').offset().top
    offT2 = $('.section2').offset().top - $(`header`).height()
    offT3 = $('.section3').offset().top - $(`header`).height()
    offT4 = $('.section4').offset().top - $(`header`).height()
    offT5 = $('.section5').offset().top - $(`header`).height()
    offT6 = $('.section6').offset().top - $(`header`).height()
    offSetArr = [offT1, offT2, offT3, offT4, offT5, offT6]

    if (scrT > 200) {
      $(`header`).addClass('active')
      TweenMax.to("header .line", 1, { morphSVG: "header .zigzag", ease: Linear.easeNone })
    } else {
      $(`header`).removeClass('active')
      TweenMax.to("header .line", 1, { morphSVG: "header .linecopy", ease: Linear.easeNone })
    }

    $(`header .line`).css({ 'stroke-dashoffset': `-${1 - scrRatio}` })
    $(`.scrollspy .progress`).css({ 'stroke-dashoffset': `${1 - scrRatio}` })
    $(`.scrollspy .circle`).css({ 'offset-distance': `${scrRatio * 100}%` })

    if (window.matchMedia("screen and (max-width:1000px)").matches) {
      $(`header`).addClass('active')
    }

    if (scrT < offT2 - 1) {
      currentSection = 1
    }
    else if (scrT >= offT2 - 1 && scrT <= offT3 - 1) {
      currentSection = 2
    }
    else if (scrT >= offT3 - 1 && scrT <= offT4 - 1) {
      currentSection = 3
    }
    else if (scrT >= offT4 - 1 && scrT <= offT5 - 1) {
      currentSection = 4
    }
    else if (scrT >= offT5 - 1 && scrT <= offT6 - 1) {
      currentSection = 5
    }
    else {
      currentSection = 6
    }

    $('.gnb a').removeClass('active')
    $(`.gnb .link${currentSection}`).addClass('active')

  }

  fnHeaderScrollMotion()

  $(window).scroll(function () {
    reqID = requestAnimationFrame(fnHeaderScrollMotion)
  }).resize(function () {
    reqID = requestAnimationFrame(fnHeaderScrollMotion)
  })

  $(`.mbtn`).click(function () {
    $(this).toggleClass('active')
    $(`.gnb-sm`).stop().slideToggle()
  })

  $(`.gnb a`).click(function (e) {
    e.preventDefault()
    $('body,html').stop().animate({ 'scrollTop': offSetArr[`${parseInt($(this).attr('href'))}`] })
    /* window.scrollTo({top: offSetArr[`${parseInt($(this).attr('href'))}`],behavior:'smooth'}) */
    $('.gnb-sm').stop().slideUp()
    $('.mbtn').removeClass('active')
  })

})