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
        $('section.navigation').addClass('fixed');
        $('header').css({
          "border-bottom": "none",
          "padding": "15px 0 10px 0"
        });
      } else {
        $('section.navigation').removeClass('fixed');
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
