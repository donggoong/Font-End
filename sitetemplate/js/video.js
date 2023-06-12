$(function () {
  $(`.videos_list button`).click(function () {
    const prevSrc = $(`.youtube_wrap iframe`).attr('src')
    const youtube_url = $(this).val()
    const nextSrc = `https://www.youtube.com/embed/${youtube_url}`
    if(prevSrc===nextSrc) return false
    $(`.youtube_wrap iframe`).attr('src',nextSrc)
    $(`.videos_list button`).removeClass('active')
    $(this).addClass('active')
  })
})