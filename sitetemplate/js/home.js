$(function(){
  $('.home_visual').slick({
    slide: 'figure',        //슬라이드 되어야 할 태그
    infinite : true,     //무한 반복 옵션     
    slidesToShow : 1,        // 한 화면에 보여질 컨텐츠 개수
    slidesToScroll : 1,        //스크롤 한번에 움직일 컨텐츠 개수
    speed : 500,     // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    arrows : true,         // 옆으로 이동하는 화살표 표시 여부
    dots : true,         // 스크롤바 아래 점으로 페이지네이션 여부
    autoplay : true,            // 자동 스크롤 사용 여부
    autoplaySpeed : 3000,         // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    pauseOnHover : false,        // 슬라이드 이동    시 마우스 호버하면 슬라이더 멈추게 설정
    vertical : false,        // 세로 방향 슬라이드 옵션
    prevArrow : "<button type='button' class='slick-prev'><i class='fa-solid fa-chevron-left'></i></button>",
    nextArrow : "<button type='button' class='slick-next'><i class='fa-solid fa-chevron-right'></i></button>",
    draggable : true,     //드래그 가능 여부 
  
  });

  var reqID
  function fnHomeMotion() {
    $(`.feature ul li`).each(function(){
      var elT = $(this).offset().top
      var elH = $(this).innerHeight()
      var meta = 1 + (scrT - (elT - (winH * 0.3 + elH * 0.3))) * +0.002
      if(meta < 0) mata= 0
      $(this).find('a').css({'opacity':`${meta}`})
    })
    $(`.latest article`).each(function(){
      var offT = $(this).offset().top
      if(scrT >= offT - winH * 0.8){
        $(this).addClass('active')
      }
      else{
        $(this).removeClass('active')
      }
    })
  }
  fnHomeMotion()
  $(window).scroll(function () {
    reqID = requestAnimationFrame(fnHomeMotion)
  }).resize(function () {
    reqID = requestAnimationFrame(fnHomeMotion)
  })
})