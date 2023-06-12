<section class="section3">
  <figure class="bg"></figure>
  <div class="gooey"></div>
  <script>
    for (let i = 1; i <= 50; i++) {
      $('.section3 .gooey').append(`
        <div></div>
      `)
      $('.section3 .gooey div:last-child').css({
        'left': `${Math.random()*100}%`,
        'width': `${Math.random()*3 + 1}%`,
        'filter': `hue-rotate(${Math.random()*360}deg)`,
        'animation-duration': `${Math.random()*7 + 3}s`
      })
    }
  </script>
  <svg style="display: none;">
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
      <feColorMatrix in="blur" mode="matrix" values="
        1 0 0 0 0
        0 1 0 0 0
        0 0 1 0 0
        0 0 0 20 -10" result="goo" />
      <feBlend in="SourceGraphic" in2="goo" />
    </filter>
  </svg>
  <img class="section3-text" src="./img/section3/seciton3_01.png" alt="">
</section>