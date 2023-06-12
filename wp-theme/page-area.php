<?php include 'sub-header.php' ?>
<!--페이지 제목 출력-->
<script src="<?php bloginfo('template_directory'); ?>/js/page-area.js"></script>
<h2 class="sub-title"><?php the_title(); ?></h2>

<p class="theme-guide">
  본 컨텐츠는 페이지로 제작되었으며, page-area.php 템플릿을 이용해 수정·편집 하실 수 있습니다.
  <button><i class="fa-solid fa-circle-xmark"></i></button>
</p>

<div class="sub-desc">회사만의 특화되고 <b>세분화된 사업영역</b>을 바탕으로 <b>최고의 비즈니스를 제안</b>합니다.</div>
<!--페이지 출력 시작-->
<section class="page-section page-section-area">
<p>
  고객님의 요구에 기획부터 홈페이지에 필요한 이미지 촬영, 전자카다로그 제작, 포탈싸이트 등록, 키워드광고,<br>홈페이지 제작과 활용에 필요한 모든 서비스를 제공하고 있습니다.
</p>
<figure>
  <img src="<?php bloginfo('template_directory'); ?>/img/sub2/business-04.jpg" alt="">
  <img src="<?php bloginfo('template_directory'); ?>/img/sub2/business-05.png" alt="">
</figure>
</section>
<!--페이지 출력 끝-->
<?php include 'sub-footer.php' ?>