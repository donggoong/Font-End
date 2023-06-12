$(function () {
  var url = location.href
  var dep1
  var dep2
  if (url.match(`/greet.php`)) {
    dep1 = 1; dep2 = 1;
  }
  else if (url.match(`/location.php`)) {
    dep1 = 1; dep2 = 2;
  }
  else if (url.match(`/video.php`)) {
    dep1 = 1; dep2 = 3;
  }
  else if (url.match(`/biz-intro.php`)) {
    dep1 = 2; dep2 = 1;
  }
  else if (url.match(`/biz-area.php`)) {
    dep1 = 2; dep2 = 2;
  }
  else if (url.match(`/gallery1.php`)) {
    dep1 = 3; dep2 = 1;
  }
  else if (url.match(`/gallery2.php`)) {
    dep1 = 3; dep2 = 2;
  }
  else if (url.match(`/gallery3.php`)) {
    dep1 = 3; dep2 = 3;
  }
  else if (url.match(`/gallery4.php`)) {
    dep1 = 3; dep2 = 4;
  }
  else if (url.match(`/gallery5.php`)) {
    dep1 = 3; dep2 = 5;
  }
  else if (url.match(`/contact.php`)) {
    dep1 = 4; dep2 = 1;
  }
  else if (url.match(`/notice.php`)) {
    dep1 = 5; dep2 = 1;
  }
  else if (url.match(`/faq.php`)) {
    dep1 = 5; dep2 = 2;
  }
  else if (url.match(`/freeboard.php`)) {
    dep1 = 5; dep2 = 3;
  }
  else if (url.match(`/signin.php`)) {
    dep1 = 6; dep2 = 1;
  }
  else if (url.match(`/resister.php`)) {
    dep1 = 6; dep2 = 2;
  }
  else if (url.match(`/member.php`)) {
    dep1 = 6; dep2 = 3;
  }
  $(`.snb .menu${dep1}`).show()
  $(`.snb .menu${dep1}-${dep2}`).addClass('active')
  /* 
  $(`.sub_visual .visual${dep1}`).show()
  setTimeout(function(){
    $(`.sub_visual .visual${dep1}`).addClass('active')
  },1) 
  */
  $(`.sub_visual .visual${dep1}`).fadeIn().addClass('active')
  $(`.sub_visual .visual${dep1} img`).fadeIn().addClass('active')
  var dep1_title = $(`.gnb.lg .menu${dep1} h6`).text()
  var dep2_title = $(`.gnb.lg .menu${dep1}-${dep2}`).text()
  $(`.sub_content .breadcrumb .dep1`).text(dep1_title)
  $(`.sub_content .breadcrumb .dep2`).text(dep2_title)

  $(`.site_guide button`).click(function () {
    $(`.site_guide`).slideUp()
  })
})//ready