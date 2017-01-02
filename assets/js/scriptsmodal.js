// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function() {};
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


$('.plain-form').on('submit', function(e) {
  e.preventDefault();

  $(this).addClass('current-form');
  var currForm = $(this),
    phone = $.trim($('.current-form input[name=phone]').val()),
    name = $.trim($('.current-form input[name=name]').val()),
    email = $.trim($('.current-form input[name=email]').val()),
    inputName = $('.current-form input[name=name]'),
    inputPhone = $('.current-form input[name=phone]'),
    inputEmail = $('.current-form input[name=email]'),
    postData = $(this).serializeArray(),
    formURL = $(this).attr('action'),
    thanx = $('.current-form .thanx'),
    message = $('.current-form .message');

  $(message).fadeIn(200);
  if (name != null && name.length == 0) {
    // $(message).addClass('message-err').html('Укажите имя');
    // $(inputName).addClass('input-error');
    // event.preventDefault();
  } else if (phone != null && phone.length == 0) {
    $(inputName).removeClass('input-error');
    $(message).addClass('message-err').html('Укажите телефон');
    $(inputPhone).addClass('input-error');
    event.preventDefault();
  } else if (email != null && email.length == 0) {
    $(inputName).removeClass('input-error');
    $(message).addClass('message-err').html('Укажите почту');
    $(inputPhone).addClass('input-error');
    event.preventDefault();
  } else {
    $(inputPhone).removeClass('input-error');
    $.ajax({
      url: formURL,
      type: 'POST',
      data: postData,
      beforeSend: function() {
        $(message).html('Отправляем...');
      },
      success: function(data) {
        $(message).addClass('message-ok');
        $(message).html('Успешно отправилось!');
        $(message).fadeOut(1500);
        $(thanx).fadeIn(1500);
      }
    });
  };
  $(this).removeClass('current-form');
});
