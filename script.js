// 換圖輪播 Auto Switching Images for CSS-Slider
function bannerSwitcher() {
  next = $('.sec-1-input').filter(':checked').next('.sec-1-input');
  if (next.length) next.prop('checked', true);
  else $('.sec-1-input').first().prop('checked', true);
}

var bannerTimer = setInterval(bannerSwitcher, 5000);

$('nav .controls label').click(function () {
  clearInterval(bannerTimer);
  bannerTimer = setInterval(bannerSwitcher, 5000)
});


// 綜合寫法
$(function () {
  //---漢堡按鈕---
  $('.hamburger').click(function () {
    $(this).toggleClass('is-active');
    $('.navigation').toggleClass('show');
  });

  // 滑動至指定區塊位置
  $('.menu a').click(function () {
    var btn = $(this).attr('href');
    var pos = $(btn).offset();
    $('html,body').animate({ scrollTop: pos.top }, 1500);
  });

  // 滑動至頂
  $('#gotop').click(function () {
    $('html,body').animate({ scrollTop: 0 }, 1500);
  });

  // 至頂按鈕的淡出淡入
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('#gotop').stop().fadeTo('', 1);
    } else {
      $('#gotop').stop().fadeOut();
    }
  });

  // 滑動載入
  // 預設淡入淡出
  $('.smoove').smoove({
    offset: '30%'
  });
});


