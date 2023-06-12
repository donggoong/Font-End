$(function(){
  $(`.faq_list button`).click(function(){
    $(`.faq_list button`).not($(this)).removeClass('active')
    $(this).toggleClass('active')
    $(`.faq_list p`).stop().slideUp()
    $(this).siblings('p').stop().slideToggle()
  })
})