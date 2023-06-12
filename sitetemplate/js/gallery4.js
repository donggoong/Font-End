$(function () {
  $(`.masonry_container li a`).viewbox()
  $(window).load(function () {
    $(".masonry_container").masonry({ itemSelector: ".masonry_container li" })
  })
})