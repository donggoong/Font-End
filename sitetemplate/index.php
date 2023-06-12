<?php include 'header.php' ?>
<script src="./store/store.js"></script>
<script src="./js/home.js"></script>
<section class="home_visual">
    <script src="js/particles.js"></script>
    <script src="js/app_particle_star.js"></script>
    <div id="particles-js"></div>
</section>
<script>
    homeVisualArr.forEach(e => {
        $(`.home_visual`).append(`<figure><img src="${e.path}" alt=""><figcaption><h5>${e.title}</h5><p>${e.desc}</p></figcaption></figure>`)
    })
</script>

<section class="feature">
    <h2 class="hidden">feature</h2>
    <ul></ul>
    <script>
        featureArr.forEach(e => {
            $(`.feature ul`).append(`<li><a href=${e.link}><figure><img src=${e.path} alt=""><figcaption><h3>${e.title}</h3><p>${e.desc}</p></figcaption></figure></a></li>`)
        })
    </script>
</section>

<section class="latest">
    <h2 class="hidden">recently</h2>
    <article class="news">
        <div class="center">
            <h3><i class="fa-solid fa-microphone-lines"></i> LATEST NEWS</h3>
            <div class="rolling">
                <ul>
                    <li>뉴스 게시판 최신글 1번</li>
                    <li>뉴스 게시판 최신글 2번</li>
                    <li>뉴스 게시판 최신글 3번</li>
                    <li>뉴스 게시판 최신글 4번</li>
                    <li>뉴스 게시판 최신글 5번</li>
                </ul>
            </div>
            <script>
                $(`.rolling ul`).clone().appendTo(`.rolling`)
                /* 
                let clone = document.querySelector(`.rolling ul`).cloneNode(true)
                document.querySelector(`.rolling`).append(clone)
                 */
            </script>
        </div>
    </article>
    <div class="bottom">
        <article class="notice">
            <h3>notice</h3>
            <ul></ul>
            <script>
                noticeArr.forEach(function(v){$(`.bottom .notice ul`).append(`<li><a href="#">${v.desc}</a><time>${v.date}</time></li>`)})
            </script>
            <a class="more" href="./notice.php">more+</a>
        </article>

        <article class="customer">
            <h3>customer</h3>
            <p>문의전화를 주시면 친절히 상담하여 드립니다.</p>
            <a class="tel" href="tel:010-0000-0000"><i class="fa-solid fa-phone"></i> 070.7155.1979</a>
            <a class="mail" href="./contact.php"><i class="fa-solid fa-envelope"></i> contact us</a>
        </article>

        <article class="gallery">
            <h3>gallery</h3>
            <ul>
            </ul>
            <script>
                for(var i = 1; i<= 4 ; i++){$(`.gallery ul`).append(`<li><a href="#"><img src="./img/sub3/${i}.jpg" alt=""></a></li>`)}
            </script>
            <a class="more" href="./gallery1.php">more+</a>
        </article>
    </div>
</section>
<?php include 'footer.php' ?>