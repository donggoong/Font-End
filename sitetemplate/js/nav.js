$(function () {
  $(`.gnb.sm > ul > li > a`).click(function (e) {
    e.preventDefault()
    $(`.gnb.sm > ul > li > ul`).stop().slideUp(300)
    $(this).siblings('ul').stop().slideToggle(300)
    $(`.gnb.sm > ul > li > a`).not($(this)).removeClass('active')
    $(this).toggleClass('active')
  })//click

  $(`.mbtn`).click(function () {
    $(this).toggleClass('active')
    $(`.gnb.sm`).stop().fadeToggle().toggleClass('active')
    $(`.gnb.sm > ul > li > ul`).stop().slideUp()
    $(`.gnb.sm > ul > li > a`).removeClass('active')
  })//click

  $(`.gnb.lg > ul > li`).mouseenter(function () {
    $(this).children('ul').stop().slideDown(200)
  })

  $(`.gnb.lg > ul > li`).mouseleave(function () {
    $(this).children('ul').stop().slideUp(200)
  })


})//ready