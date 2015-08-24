// Avoid `console` errors in browsers that lack a console.
(function () {
  var method;
  var noop = function () {};
  var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
        console[method] = noop;
    }
}
}());
// top navi
jQuery(function($) {
  $(document).ready( function() {
    //enabling stickUp on the '.navbar-wrapper' class
    $('header').stickUp({
                  parts: {
                    0:'home',
                    1:'features',
                    2: 'about',
                    3: 'supers',
                    4: 'review',
                    5: 'contact'
                  },
                  itemClass: 'menuItem',
                  itemHover: 'current'
                });
  });
});
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

var day = new Date();
timeto= new Date(day.getFullYear(), day.getMonth(), (day.getDate() + 1), 00, 00);
$('.timer').countdown({until: timeto, format: 'HMS'});

jQuery(function($){

  var day = new Date();
  timeto= new Date(day.getFullYear(), day.getMonth(), (day.getDate() + 1), 00, 00);
  $('.timer').countdown({until: timeto, format: 'HMS'});


  $("input[name='phone']").mask("+7 (999) 999-99-99");
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

  $('.block-second').on('animateIn', function() {
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

// services
$(document).ready(function(){
  $('#s1').show();
  $('.service-link:first').addClass('current');

  $('li[data-service]').on('click', function() {
    var sLocation = $(this).attr('data-service');
    var service = $('#'+sLocation);
    $('.service-link').removeClass('current');
    $(this).addClass('current');
    $('.service-block').hide();
    service.show();
  });
});
// services
