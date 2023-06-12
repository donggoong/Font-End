<?php include 'sub_header.php' ?>
<script src="./js/location.js"></script>
<h2 class="sub_title">오시는길</h2>
<section class="location_section">
  <p class="site_guide">
    탭메뉴 UI와 구글맵 API를 이용하여 찾아오시는 길 페이지를 설계하였습니다.<br>
    <button><i class="fa-solid fa-circle-xmark"></i></button>
  </p>
  <p class="sub_desc">
    <em class="emphasis">찾아오시는 길 안내입니다.</em>
    방문전 연락을 주시면 친절하게 안내해 드립니다.
  </p>
  <article>
    <h3 class="hidden">구글맵, 약도</h3>
    <div class="tab_menu">
      <button value="1" class="active">구글맵</button>
      <button value="2">약도</button>
    </div>
    <div class="pane">
      <div>
        <iframe class="map1" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2237.8252412123347!2d127.10854227273263!3d37.51351211399869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sko!2skr!4v1679970085701!5m2!1sko!2skr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <img class="map2" src="./img/sub1/map.jpg" alt="">
      </div>
    </div>
  </article>
</section>
<?php include 'sub_footer.php' ?>