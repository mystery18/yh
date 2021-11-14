$(function() {
  let globalWinw = $(window).width();
  let advantage_obj = $('.advantage')
  let color_bg = $('.color-bg')
  var options = {
    useEasing : true, 
    useGrouping : false
  };
  var myNum1 = new CountUp("myNum1", 0, 15, 0, 1, options);
  var myNum2 = new CountUp("myNum2", 0, 10000, 0, 1, options);
  var myNum3 = new CountUp("myNum3", 0, 98, 0, 1, options);
  $(window).on("scroll", function() {
    // if($(window).scrollTop()>=600)
    if(color_bg.offset().top < ($(window).height() + $(window).scrollTop() - 500)){
      myNum1.start();
      myNum2.start();
      myNum3.start();
    }

    if (advantage_obj.offset().top < ($(window).height() + $(window).scrollTop() - 550)) {
      setTimeout(function () {
        $('.advantage .bg-blue').addClass('animated widthExpend');
        setTimeout(function () {
          $('.advantage .ad-content').addClass('animated opacityUp');
          $('.advantage .sound').addClass('animated opacityUp');
          setTimeout(function () {
            $('.advantage .feat1').addClass('animated bounceInUp');
            setTimeout(function () {
              $('.advantage .feat2').addClass('animated bounceInUp');
              setTimeout(function () {
                $('.advantage .feat3').addClass('animated bounceInUp');
                setTimeout(function () {
                  $('.advantage .feat4').addClass('animated bounceInUp');
                  setTimeout(function () {
                    $('.advantage .feat5').addClass('animated bounceInUp');
                  }, 450)
                }, 450)
              }, 450)
            }, 450)
          }, 450)
        }, 650)
      }, 150)
    }
  })

})