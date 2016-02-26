/***************** Header BG Scroll ******************/
function menu()
    {
    var navigation = document.getElementsByClassName('navigation');
    var nav = document.getElementById('js-navigation');
    var logo = document.getElementById('js-logo');
    var header = document.getElementById('js-header');

    var mq = window.matchMedia( "(max-width: 767px)" );

     if(window.pageYOffset>=50){

        // Navigation



        // Logotype
        logo.setAttribute("src", "img/Sellbranch-logo.svg");


        if (mq.matches) {
          // window width is at least 767px

          // Navigation
          navigation[0].style.boxShadow = "0px 3px 3px 0px rgba(0, 0, 0, 0.3)";
          navigation[0].style.backgroundColor = "#fdfdfd";

          // Header
          header.style.padding = "10px 0";
        } else {
          // window width is less than 767px

          // Navigation
          navigation[0].style.boxShadow = "0px 2px 1px 0px rgba(0, 0, 0, 0.2)";
          navigation[0].style.backgroundColor = "#fcfcfc";

          // Header
          header.style.padding = "15px 0";
        }
        header.style.borderBottom = "none";

        // Nav menu
        var links = document.querySelectorAll('#js-nav .js-link');
        var i;
        for (i = 0; i < links.length; i++){
            links[i].style.color = "#2f3d48";
        }

     }
    else{
        // Navigation
        navigation[0].style.backgroundColor = "transparent";
        navigation[0].style.boxShadow = "none";

        // Logo
        logo.setAttribute("src", "img/SellbranchWhite.svg");

        // Header
        if (mq.matches) {
          // window width is at least 767px
          header.style.padding = "10px 0";
        } else {
          // window width is less than 767px
          header.style.padding = "30px 0";
        }
        // header.style.padding = "30px 0";
        header.style.borderBottom = "1px solid rgba(255, 255, 255, 0.2)";

        // Nav menu
        var links = document.querySelectorAll('#js-nav .js-link');
        var i;
        for (i = 0; i < links.length; i++){
            links[i].style.color = "#ffffff";
        }
    }
    }window.addEventListener('scroll',menu);



/***************** Scroll Up ******************
**********************************************/

  function scrollWin() {
     setTimeout(function(){ window.scrollTo(0, 0); }, 300);
  }

/***************** Color Button ******************
/* Change display to button
**********************************************/

  function colorButton() {

    var button = document.getElementById('js-button-up');

    if(window.pageYOffset>=300){
      button.style.display = "block";
    }
    else{
      button.style.display = "none";
    }

  }window.addEventListener('scroll',colorButton);





/***************** Waypoint ******************/
/* https://github.com/imakewebthings/waypoints
**********************************************/

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


  /***************** Retina Image ******************/

    if (window.devicePixelRatio > 1) {

    var lowresImages = $('img');



    lowresImages.each(function(i) {

        var lowres = $(this).attr('src');

        var highres = lowres.replace(".", "@2x.");

        $(this).attr('src', highres);

    });

}
