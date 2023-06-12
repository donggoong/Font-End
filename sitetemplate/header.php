<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" href="./img/icons/favicon.ico" type="image/x-icon">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />
  <link rel="stylesheet" href="./css/reset.css">
  <link rel="stylesheet" href="./css/viewbox.css">
  <link rel="stylesheet" href="./css/isotope.css">
  <link rel="stylesheet" href="./css/style.css">
  <link rel="stylesheet" href="./css/preloader.css">
  <link rel="stylesheet" href="./css/header.css">
  <link rel="stylesheet" href="./css/footer.css">
  <link rel="stylesheet" href="./css/home.css">
  <link rel="stylesheet" href="./css/sub_layout.css">
  <link rel="stylesheet" href="./css/greet.css">
  <link rel="stylesheet" href="./css/location.css">
  <link rel="stylesheet" href="./css/video.css">
  <link rel="stylesheet" href="./css/biz-intro.css">
  <link rel="stylesheet" href="./css/biz-area.css">
  <link rel="stylesheet" href="./css/gallery1.css">
  <link rel="stylesheet" href="./css/gallery2.css">
  <link rel="stylesheet" href="./css/gallery3.css">
  <link rel="stylesheet" href="./css/gallery4.css">
  <link rel="stylesheet" href="./css/gallery5.css">
  <link rel="stylesheet" href="./css/contact.css">
  <link rel="stylesheet" href="./css/board.css">
  <link rel="stylesheet" href="./css/faq.css">
  <script src="http://code.jquery.com/jquery-latest.js" type="text/javascript"></script>
  <script src="https://kit.fontawesome.com/e74d8a6caa.js" crossorigin="anonymous"></script>
  <script src="./js/common.js"></script>
  <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
  <script src="./js/hoverBox.js"></script>
  <script src="./js/jquery.viewbox.js"></script>
  <script src="./js/masonry-docs.min.js"></script>
  <title>Site Template Renewal</title>
</head>

<body>
  <?php include 'preloader.php' ?>
  <script src="./js/header.js"></script>
  <script src="./js/nav.js"></script>
  <header>
    <div class="top">
      <nav class="member">
        <a href="./index.php">처음으로</a>
        <a href="#">로그인</a>
        <a href="#">회원가입</a>
      </nav>
    </div>
    <div class="center">
      <h1>
        <a href="./index.php">
          <img src="./img/icons/sdg_logo.png" alt="">
        </a>
        <span class="hidden">선샤인</span>
      </h1>
      <nav class="gnb lg">
        <?php include 'menu.php' ?>
      </nav>

      <nav class="gnb sm">
        <?php include 'menu.php' ?>
      </nav>

      <button class="mbtn">
        <i class="fa-solid fa-bars open"></i>
        <i class="fa-solid fa-xmark close"></i>
      </button>
    </div>
  </header>