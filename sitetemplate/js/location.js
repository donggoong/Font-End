$(function(){
  $(`.tab_menu button`).click(function(){
    $(`.tab_menu button`).removeClass('active')
    $(this).addClass('active')
    $(`.pane div *`).hide()
    $(`.pane div .map${$(this).val()}`).show()
  })
})