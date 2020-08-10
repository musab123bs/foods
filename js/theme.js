function PST(){
    time.innerHTML = new Date();
}
setInterval(PST,1000);

$(window).scroll(function(){
    var sticky = $('.header'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });

  $(window).scroll(function(){
      var sticky = $('.scrollup-btn'),
      scroll = $(window).scrollTop();

      if (scroll >=100) sticky.addClass('fixed-btn');
      else sticky.removeClass('fixed-btn');
  })