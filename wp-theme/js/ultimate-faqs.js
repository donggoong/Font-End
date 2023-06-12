$(function(){
  $('.ewd-ufaq-faq-div').click(function(e){
    e.preventDefault()
    $('.ewd-ufaq-faq-title a').not($(this).find('.ewd-ufaq-faq-title a')).parent().parent().removeClass('ewd-ufaq-post-active')    
    $(this).toggleClass('ewd-ufaq-post-active')
    $(this).not('.ewd-ufaq-post-active').find('span').text('a')//+
    $('div.ewd-ufaq-faq-div.ewd-ufaq-post-active').find('span').text('A')//-
    $(this).siblings('div').find('span').text('a')//+
    $('.ewd-ufaq-faq-div .ewd-ufaq-faq-body').not($(this).find('.ewd-ufaq-faq-body')).slideUp()
    $(this).find('.ewd-ufaq-faq-body').stop().slideToggle()
  })//click
})//ready