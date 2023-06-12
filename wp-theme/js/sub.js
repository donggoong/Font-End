$(function(){
  /* sub-visual */
  var menuCategory = location.pathname.split('/')[1]
  if(menuCategory!==''){
    $(`.sub-visual .${menuCategory}`).fadeIn().addClass('active')
    var type1 = new Type_effect(`.sub-visual .${menuCategory} h6`,200)
    type1.play()
    var type2 = new Type_effect(`.sub-visual .${menuCategory} p`,50)
    type2.play()
  }
  /* theme-guide */
  $('p.theme-guide button').click(function(){$('p.theme-guide').slideUp()})

})