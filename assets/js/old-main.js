$(document).ready(function () {


//Какая акция
  var sale_val = $('#sale_id').text();
  $('.sale-input').attr('value',sale_val);
//Какая акция

// Плавное перемещение
  $('a[href^="#"]').click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    if($.browser.safari){
      $('body').animate( { scrollTop: destination }, 800);
    }else{
      $('html').animate( { scrollTop: destination }, 800);
      $('body').animate( { scrollTop: destination }, 800);
    }
    return false;
  });
// Плавное перемещение




$(window).load(function() {
  $('.b-a').twentytwenty({
    default_offset_pct: 0.5
  });
});
// Слайдеры

$('.b-a-slider').owlCarousel({
  loop: false,
  nav: false,
  dots: true,
  items: 1,
  mouseDrag: false,
  touchDrag: false,
  dotsSpeed: 600
})

// Слайдеры


// Параллакс
  var current_width = $(window).width();
  if(current_width > 1200){
    $('.par').css('background-attachment', 'fixed');
    $(window).scroll(function (e) {
      parallax();
    });
  }

function parallax() {
  var scrolled = $(window).scrollTop();
  $('.bub1').css('background-position', 'center  ' + -(scrolled * 0.52) + 'px');
  $('.bub2').css('background-position', 'center  ' + -(scrolled * 0.8) + 'px');
  $('.par').css('background-position', 'center  ' + -(scrolled * 0.5-2300) + 'px');
  $('.shet2').css('background-position', 'center  ' + -(scrolled * 0.6-6650) + 'px');
}

// Параллакс

// меню
jQuery(function($) {
  $(document).ready( function() {
    $('.top-panel').stickUp({
      parts: {
        0:'home',
        1:'services',
        2:'about',
        3: 'pluses',
        4: 'tests',
        5: 'contacts'
      },
      itemClass: 'menuItem',
      itemHover: 'active'
    });
  });
});
// меню

// отзывы
$('.more-test').on('click', function(e) {
  $('.hide-test').toggle('slow');
})

$('.w-1').hover ( function() {$('.ar-1').addClass('hover');}, function(){$('.ar-1').removeClass('hover');})
$('.w-2').hover ( function() {$('.ar-2').addClass('hover');}, function(){$('.ar-2').removeClass('hover');})
$('.w-3').hover ( function() {$('.ar-3').addClass('hover');}, function(){$('.ar-3').removeClass('hover');})
$('.w-4').hover ( function() {$('.ar-4').addClass('hover');}, function(){$('.ar-4').removeClass('hover');})
$('.w-5').hover ( function() {$('.ar-5').addClass('hover');}, function(){$('.ar-5').removeClass('hover');})
// ОТзывы

$('.serv-link').on('click', function(e) {
  var scroll_top = $(window).scrollTop();
  $('.modal-service').css('top',(scroll_top-(-30)) + 'px');
})

// карты
$('.link-1').on('click', function(e) {
  $('.map-link').removeClass('active');
  $(this).addClass('active');
  $('.map').hide();
  $('.map-1').show();
})
$('.link-2').on('click', function(e) {
  $('.map-link').removeClass('active');
  $(this).addClass('active');
  $('.map').hide();
  $('.map-2').show();
})
$('.link-3').on('click', function(e) {
  $('.map-link').removeClass('active');
  $(this).addClass('active');
  $('.map').hide();
  $('.map-3').show();
})
$('.link-4').on('click', function(e) {
  $('.map-link').removeClass('active');
  $(this).addClass('active');
  $('.map').hide();
  $('.map-4').show();
})
// карты

var day = new Date();
timeto= new Date(day.getFullYear(), day.getMonth(), (day.getDate() + 1), 00, 00);
$('.timer').countdown({until: timeto, format: 'HMS'});


});//конец document.ready

jQuery(function($){
  $("input[name='ctel']").mask("+7 (999) 999-99-99");
});

// цифры
$(document).ready(function() {
  $('.scroll-animate').each(function () {
    var block = $(this);
    $(window).scroll(function() {
      var top = block.offset().top;
      var bottom = block.height()+top;
      top = top - $(window).height();
      var scroll_top = $(this).scrollTop();
      if ((scroll_top > top) && (scroll_top < bottom)) {
        if (!block.hasClass('animate')) {
          block.addClass('animate');
          block.trigger('animateIn');
        }
      } else {
        block.removeClass('animate');
        block.trigger('animateOut');
      }
    });
  });

$('.profits').on('animateIn', function() {
    $(this).find('.num').each(function() {
      var count =  parseInt($(this).attr('data-number'));
      var block = $(this);
      var timeout = null;
      var step = 1;
      timeout = setInterval(function() {
        if (step == 25) {
          block.text(count.toString());
          clearInterval(timeout);
        } else {
          block.text((Math.floor(count*step/25)).toString());
          step++;
        }
      }, 60);
    });
});

  new WOW().init();
});
// цифры

// services
$(document).ready(function(){
  $('#s_1').show();
  $('.service-link:first').addClass('current');

  $('div[data-service]').on('click', function() {
    var sLocation = $(this).attr('data-service');
    var service = $('#'+sLocation);
    $('.service-link').removeClass('current');
    $(this).addClass('current');
    $('.service-block').hide();
    service.show();
  });
});
// services

$(window).load(function() {
  $('.b-a').twentytwenty({
    default_offset_pct: 0.5
  });
});
