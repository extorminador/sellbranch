$(function(){
        $('a.smoothScroll').smoothScroll({
          offset: -50,
      scrollTarget: $(this).val()
     });

       // Waypoints
       $('.post_article').waypoint(
        function(direction) {
        if (direction ==='down') {
            var wayID = $(this).attr('id');
        } else {
            var previous = $(this).prev();
            var wayID = $(previous).attr('id');
        }
            $('.current').removeClass('current');
            $('#main_nav a[href=#'+wayID+']').addClass('current');
        }, { offset: '40%' });



       /// StickNav
       var stickyNavTop = $('.nav').offset().top;

        var stickyNav = function(){
        var scrollTop = $(window).scrollTop();

        if (scrollTop > stickyNavTop) {
            $('.nav').addClass('isStuck');
        } else {
            $('.nav').removeClass('isStuck');
        }
    };
    stickyNav();
       $(window).scroll(function() {
            stickyNav();
        });
    });


  /***************** Header BG Scroll ******************/
  $(function() {
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if (scroll >= 50) {


        $("#logo").attr("src", "img/Sellbranch-logo.svg");

        $('section.navigation').addClass('fixed');

        $('#main_nav li a').addClass('nav_fixed');

        $('header').css({
          "border-bottom": "none",
          "padding": "15px 0 20px 0"
        });
      } else {
        $("#logo").attr("src", "img/SellbranchWhite.svg");

        $('section.navigation').removeClass('fixed');

        $('#main_nav li a').removeClass('nav_fixed');


        $('section.navigation').css({
          "border-bottom": "none"
        });
        $('header').css({
          "border-bottom": "1px solid rgba(255, 255, 255, 0.2)",
          "padding": "30px 0"
        });
      }
    });
  });








/*  $(function() {
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if (scroll >= 50) {
        $('section.navigation').addClass('fixed');
        // $('#logo').atrr("src", '../img/Sellbranch-logo.svg');
        // $('#main_nav li a').addClass('nav_fixed');
        $('header').css({
          "border-bottom": "none",
          "padding": "15px 0 10px 0"
        });
        // $('#main_nav li a').addClass('nav_fixed')
        // $('#main_nav li a').addClass('nav_fixed');
      } else {
        $('section.navigation').removeClass('fixed');
        $('#logo').atrr("src", '../img/SellbranchWhite.svg');
        // $('#main_nav li a').removeClass('nav_fixed')
        // $('section.navigation').css({
        //   "border-bottom": "none"
        // });
        $('header').css({
          "border-bottom": "1px solid rgba(255, 255, 255, 0.2)",
          "padding": "30px 0"
        });
      }
    });
  });

  */
