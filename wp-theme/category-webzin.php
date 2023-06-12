<?php include 'sub-header.php' ?>
<script src="<?php bloginfo('template_directory'); ?>/js/category-webzin.js"></script>
<!--카테고리 전체 제목 출력-->
<h2 class="sub-title"><?php single_cat_title(' '); ?></h2>
<p class="theme-guide">
  본 컨텐츠는 카테고리로 제작되었으며, category-webzin.php 템플릿을 이용해 수정·편집 하실 수 있습니다.
  <button><i class="fa-solid fa-circle-xmark"></i></button>
</p>
<!--카테고리 설명 출력-->
<div class="sub-desc"><?php echo category_description(); ?></div>
<section class="category-webzin-section">
  <!--카테고리 리스트 출력-->
  <ul>
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
        <!--리스트 한개 출력-->
        <li>
          <div class="meta">
            <!--작성자-->
              <address><?php echo get_the_author(); ?></address>
              <!--작성일-->
              <time><?php echo get_the_date(); ?></time>
              <b><?php single_cat_title(' '); ?></b>
          </div>
          <figure>
            <!--글 이미지-->
            <?php if (has_post_thumbnail()) {
              the_post_thumbnail('thumbnail');
            } ?>
          </figure>
          <div class="textbox">
            <!--글 제목-->
            <h3><?php the_title(); ?></h3>
            <!--요약글 출력-->
            <?php the_excerpt(); ?>
            <!--해당글 링크-->
            <a href="<?php the_permalink(); ?>">해당글 보기</a>
          </div>
        </li>
        <!--리스트 한개 끝-->
      <?php endwhile;
    else : ?>
      <!--카테고리 글이 없는 경우-->
    <?php endif; ?>
    <!--카테고리 리스트 출력끝-->
  </ul>
  <!--페이징출력시작-->
</section>
<?php
global $wp_query;
$big = 999999999;
echo paginate_links(array(
  'type'        => 'list',
  'base'        => str_replace($big, '%#%', esc_url(get_pagenum_link($big))),
  'format'      => '?paged=%#%',
  'current'     => max(1, get_query_var('paged')),
  'total'       => $wp_query->max_num_pages,
  'prev_text'   => __('<i class="fa-regular fa-square-caret-left"></i>'),
  'next_text'   => __('<i class="fa-regular fa-square-caret-right"></i>'),
));
?>
<!--페이징출력끝-->
<?php include 'sub-footer.php' ?>