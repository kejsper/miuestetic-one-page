$(document).ready(function () {
  var sliderfit = $('.sliderfit'),
      scrolltop = $('#scrolltop');

  showScrolltop();
  adjustSlider();

  $(document).on('scroll', function () {
    setTimeout(showScrolltop, 300);
  });

  $(window).on('resize', function () {
    setTimeout(adjustSlider, 100);
  });

  // Inside links animation
  $('a[href^="#"]').on('click', function (event) {
    var target = $($(this).attr('href'));
    console.log(target);
    if ( target.length ) {
    event.preventDefault();
    $('html, body').animate({scrollTop: target.offset().top}, 700);
    }
  });

  scrolltop.on('click', function (event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, 600);
  });

  // Buy package tab menu functionality
  $('.tabs').on('click', function() {
    $('.tab-menu-active').addClass('tab-menu').removeClass('tab-menu-active');
    $(this).addClass('tab-menu-active').removeClass('tab-menu');
    var clickedTab = $(this).attr('id');
    var clickedId = clickedTab[clickedTab.length-1];
    $('.tab-menu-item').fadeOut(1);
    var idToShow = '#tab-item-' + clickedId;
    $(idToShow).stop().fadeIn(700);
  });

  // Shows scroll top arrow
  function showScrolltop () {
    var scrollPosition = $(document).scrollTop();
    if (scrollPosition > 50) {
      scrolltop.fadeIn(300);
    }
    else {
      scrolltop.fadeOut(300);
    }
  }
  // Adjust height of the images inside slider
  function adjustSlider () {
    var windowWidth = $(window).width() + 17,
        ratio = 3.047,
        windowHeight = Math.floor(windowWidth/ratio);
    sliderfit.height(windowHeight);
  }

});
