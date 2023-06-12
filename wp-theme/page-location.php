<?php include 'sub-header.php' ?>
<!--페이지 제목 출력-->
<h2 class="sub-title"><?php the_title(); ?></h2>

<p class="theme-guide">
  본 컨텐츠는 페이지로 제작되었으며, page-location.php 템플릿을 이용해 수정·편집 하실 수 있습니다.
  <button><i class="fa-solid fa-circle-xmark"></i></button>
</p>

<div class="sub-desc"><b>찾아오시는길 안내입니다.</b> 여러분의 방문을 환영합니다.</div>
<!--페이지 출력 시작-->
<section class="page-section page-section-location">

  <div class="address">
    <p>오시는길</p><address>인천광역시 부평구 부평1동 534-48</address>
    <p>전화번호</p><address>032-521-8889</address>
    <p>팩스번호</p><address>032-521-8887</address>
  </div>

  <div class="location">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.7175255910192!2d126.71799647717334!3d37.490991728454205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b7c4657c1fbbb%3A0x960379a8e77c411e!2z642U7KGw7J2A7Lu07ZOo7YSw7ZWZ7JuQ!5e0!3m2!1sko!2skr!4v1684204334303!5m2!1sko!2skr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</section>
<!--페이지 출력 끝-->
<?php include 'sub-footer.php' ?>