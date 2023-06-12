window.portfolioArr = [
  {
    title: '_JAM Music Website Design',
    desc: 'JAM Music Website Design',
    thumb: 'thumb1',
    detail: 'big1',
    class: 'web'
  },
  {
    title: '_Idol Master GUI Design',
    desc: 'Idol Master GUI Design',
    thumb: 'thumb2',
    detail: 'big2',
    class: 'app'
  },
  {
    title: '_soul linker GUI Design',
    desc: 'soul linker GUI Design',
    thumb: 'thumb3',
    detail: 'big3',
    class: 'app'
  },
  {
    title: '_NICE NPAY GUI Design',
    desc: 'NICE NPAY GUI Design',
    thumb: 'thumb4',
    detail: 'big4',
    class: 'app'
  },
  {
    title: '_Hongil-Kim',
    desc: 'Hongil-Kim Website',
    thumb: 'thumb5',
    detail: 'big5',
    class: 'web'
  },
  {
    title: '_LEEWAY',
    desc: 'LEEWAY Website',
    thumb: 'thumb6',
    detail: 'big6',
    class: 'web'
  },
  {
    title: '_HEAL DENTAL CLINIC Website',
    desc: 'HEAL DENTAL CLINIC Website',
    thumb: 'thumb7',
    detail: 'big7',
    class: 'web'
  },
  {
    title: '_EBS bandi Application GUI Design',
    desc: 'EBS bandi Application GUI Design',
    thumb: 'thumb8',
    detail: 'big8',
    class: 'app'
  },
  {
    title: '_SHINHAN INVISTA',
    desc: 'SHINHAN INVISTA Presentation Design',
    thumb: 'thumb9',
    detail: 'big9',
    class: 'etc'
  }
]

$(function () {
  hover_box('.portfolio li figure','figcaption')
  var reqID
  function fnSection4Motion() {
    $('.portfolio li').each(function(){
      var elT = $(this).offset().top
      var elH = $(this).innerHeight()
      var meta = 0 + (scrT - (elT - winH*0.5 + elH*0.5)) * -0.1
      $(this).find('img').css({'transform':`scale(1.2) translateY(${meta}px)`})
    })
  }
  fnSection4Motion()
  $(window).scroll(function () {
    reqID = requestAnimationFrame(fnSection4Motion)
  }).resize(function () {
    reqID = requestAnimationFrame(fnSection4Motion)
  })
  $(window).load(function(){
		var $container = $('.section4 .portfolio');
		var filterSelect ="*"
		fn_isotope()
		function fn_isotope(){
			$container.isotope({
				filter: filterSelect,
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				}//animationOptions
			})//isotope
		}//fn
		$('.section4 .btns button').click(function(){
			filterSelect = $(this).val()
      $('.section4 .btns button').removeClass('active')
      $(this).addClass('active')
			fn_isotope()
		})//click	
		$(window).resize(function(){
			fn_isotope()
		})//resize
	})//load

  $('.portfolio li a').click(function(e){
    e.preventDefault()
    $('.modal').fadeIn()
    $('body').css({'overflow':'hidden'})
    $('.modal .loader').show()
    $('.modal').append(`<img src="${$(this).attr('href')}" alt="">`)
    $('.modal img').load(function(){$(this).fadeIn();$('.modal .loader').hide()})
    $('.modal img').click(function(e){e.stopPropagation()})
  })
  $('.modal').bind('mousewheel',function(e){e.stopPropagation()})
  $('.modal').click(function(e){$(this).fadeOut();$('.modal img').remove();$('body').css({'overflow':'auto'})})
})
