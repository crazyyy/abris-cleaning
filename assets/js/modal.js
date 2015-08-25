/*
 * SimpleModal 1.4.4 - jQuery Plugin
 * http://simplemodal.com/
 * Copyright (c) 2013 Eric Martin
 * Licensed under MIT and GPL
 * Date: Sun, Jan 20 2013 15:58:56 -0800
 */
(function(b){"function"===typeof define&&define.amd?define(["jquery"],b):b(jQuery)})(function(b){var j=[],n=b(document),k=navigator.userAgent.toLowerCase(),l=b(window),g=[],o=null,p=/msie/.test(k)&&!/opera/.test(k),q=/opera/.test(k),m,r;m=p&&/msie 6./.test(k)&&"object"!==typeof window.XMLHttpRequest;r=p&&/msie 7.0/.test(k);b.modal=function(a,h){return b.modal.impl.init(a,h)};b.modal.close=function(){b.modal.impl.close()};b.modal.focus=function(a){b.modal.impl.focus(a)};b.modal.setContainerDimensions=
function(){b.modal.impl.setContainerDimensions()};b.modal.setPosition=function(){b.modal.impl.setPosition()};b.modal.update=function(a,h){b.modal.impl.update(a,h)};b.fn.modal=function(a){return b.modal.impl.init(this,a)};b.modal.defaults={appendTo:"body",focus:!0,opacity:50,overlayId:"simplemodal-overlay",overlayCss:{},containerId:"simplemodal-container",containerCss:{},dataId:"simplemodal-data",dataCss:{},minHeight:null,minWidth:null,maxHeight:null,maxWidth:null,autoResize:!1,autoPosition:!0,zIndex:1E3,
close:!0,closeHTML:'<a class="modalCloseImg" title="Close"></a>',closeClass:"simplemodal-close",escClose:!0,overlayClose:!1,fixed:!0,position:null,persist:!1,modal:!0,onOpen:null,onShow:null,onClose:null};b.modal.impl={d:{},init:function(a,h){if(this.d.data)return!1;o=p&&!b.support.boxModel;this.o=b.extend({},b.modal.defaults,h);this.zIndex=this.o.zIndex;this.occb=!1;if("object"===typeof a){if(a=a instanceof b?a:b(a),this.d.placeholder=!1,0<a.parent().parent().size()&&(a.before(b("<span></span>").attr("id",
"simplemodal-placeholder").css({display:"none"})),this.d.placeholder=!0,this.display=a.css("display"),!this.o.persist))this.d.orig=a.clone(!0)}else if("string"===typeof a||"number"===typeof a)a=b("<div></div>").html(a);else return alert("SimpleModal Error: Unsupported data type: "+typeof a),this;this.create(a);this.open();b.isFunction(this.o.onShow)&&this.o.onShow.apply(this,[this.d]);return this},create:function(a){this.getDimensions();if(this.o.modal&&m)this.d.iframe=b('<iframe src="javascript:false;"></iframe>').css(b.extend(this.o.iframeCss,
{display:"none",opacity:0,position:"fixed",height:g[0],width:g[1],zIndex:this.o.zIndex,top:0,left:0})).appendTo(this.o.appendTo);this.d.overlay=b("<div></div>").attr("id",this.o.overlayId).addClass("simplemodal-overlay").css(b.extend(this.o.overlayCss,{display:"none",opacity:this.o.opacity/100,height:this.o.modal?j[0]:0,width:this.o.modal?j[1]:0,position:"fixed",left:0,top:0,zIndex:this.o.zIndex+1})).appendTo(this.o.appendTo);this.d.container=b("<div></div>").attr("id",this.o.containerId).addClass("simplemodal-container").css(b.extend({position:this.o.fixed?
"fixed":"absolute"},this.o.containerCss,{display:"none",zIndex:this.o.zIndex+2})).append(this.o.close&&this.o.closeHTML?b(this.o.closeHTML).addClass(this.o.closeClass):"").appendTo(this.o.appendTo);this.d.wrap=b("<div></div>").attr("tabIndex",-1).addClass("simplemodal-wrap").css({height:"100%",outline:0,width:"100%"}).appendTo(this.d.container);this.d.data=a.attr("id",a.attr("id")||this.o.dataId).addClass("simplemodal-data").css(b.extend(this.o.dataCss,{display:"none"})).appendTo("body");this.setContainerDimensions();
this.d.data.appendTo(this.d.wrap);(m||o)&&this.fixIE()},bindEvents:function(){var a=this;b("."+a.o.closeClass).bind("click.simplemodal",function(b){b.preventDefault();a.close()});a.o.modal&&a.o.close&&a.o.overlayClose&&a.d.overlay.bind("click.simplemodal",function(b){b.preventDefault();a.close()});n.bind("keydown.simplemodal",function(b){a.o.modal&&9===b.keyCode?a.watchTab(b):a.o.close&&a.o.escClose&&27===b.keyCode&&(b.preventDefault(),a.close())});l.bind("resize.simplemodal orientationchange.simplemodal",
function(){a.getDimensions();a.o.autoResize?a.setContainerDimensions():a.o.autoPosition&&a.setPosition();m||o?a.fixIE():a.o.modal&&(a.d.iframe&&a.d.iframe.css({height:g[0],width:g[1]}),a.d.overlay.css({height:j[0],width:j[1]}))})},unbindEvents:function(){b("."+this.o.closeClass).unbind("click.simplemodal");n.unbind("keydown.simplemodal");l.unbind(".simplemodal");this.d.overlay.unbind("click.simplemodal")},fixIE:function(){var a=this.o.position;b.each([this.d.iframe||null,!this.o.modal?null:this.d.overlay,
"fixed"===this.d.container.css("position")?this.d.container:null],function(b,e){if(e){var f=e[0].style;f.position="absolute";if(2>b)f.removeExpression("height"),f.removeExpression("width"),f.setExpression("height",'document.body.scrollHeight > document.body.clientHeight ? document.body.scrollHeight : document.body.clientHeight + "px"'),f.setExpression("width",'document.body.scrollWidth > document.body.clientWidth ? document.body.scrollWidth : document.body.clientWidth + "px"');else{var c,d;a&&a.constructor===
Array?(c=a[0]?"number"===typeof a[0]?a[0].toString():a[0].replace(/px/,""):e.css("top").replace(/px/,""),c=-1===c.indexOf("%")?c+' + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"':parseInt(c.replace(/%/,""))+' * ((document.documentElement.clientHeight || document.body.clientHeight) / 100) + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"',a[1]&&(d="number"===typeof a[1]?
a[1].toString():a[1].replace(/px/,""),d=-1===d.indexOf("%")?d+' + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"':parseInt(d.replace(/%/,""))+' * ((document.documentElement.clientWidth || document.body.clientWidth) / 100) + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"')):(c='(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"',
d='(document.documentElement.clientWidth || document.body.clientWidth) / 2 - (this.offsetWidth / 2) + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"');f.removeExpression("top");f.removeExpression("left");f.setExpression("top",c);f.setExpression("left",d)}}})},focus:function(a){var h=this,a=a&&-1!==b.inArray(a,["first","last"])?a:"first",e=b(":input:enabled:visible:"+a,h.d.wrap);setTimeout(function(){0<e.length?e.focus():h.d.wrap.focus()},
10)},getDimensions:function(){var a="undefined"===typeof window.innerHeight?l.height():window.innerHeight;j=[n.height(),n.width()];g=[a,l.width()]},getVal:function(a,b){return a?"number"===typeof a?a:"auto"===a?0:0<a.indexOf("%")?parseInt(a.replace(/%/,""))/100*("h"===b?g[0]:g[1]):parseInt(a.replace(/px/,"")):null},update:function(a,b){if(!this.d.data)return!1;this.d.origHeight=this.getVal(a,"h");this.d.origWidth=this.getVal(b,"w");this.d.data.hide();a&&this.d.container.css("height",a);b&&this.d.container.css("width",
b);this.setContainerDimensions();this.d.data.show();this.o.focus&&this.focus();this.unbindEvents();this.bindEvents()},setContainerDimensions:function(){var a=m||r,b=this.d.origHeight?this.d.origHeight:q?this.d.container.height():this.getVal(a?this.d.container[0].currentStyle.height:this.d.container.css("height"),"h"),a=this.d.origWidth?this.d.origWidth:q?this.d.container.width():this.getVal(a?this.d.container[0].currentStyle.width:this.d.container.css("width"),"w"),e=this.d.data.outerHeight(!0),f=
this.d.data.outerWidth(!0);this.d.origHeight=this.d.origHeight||b;this.d.origWidth=this.d.origWidth||a;var c=this.o.maxHeight?this.getVal(this.o.maxHeight,"h"):null,d=this.o.maxWidth?this.getVal(this.o.maxWidth,"w"):null,c=c&&c<g[0]?c:g[0],d=d&&d<g[1]?d:g[1],i=this.o.minHeight?this.getVal(this.o.minHeight,"h"):"auto",b=b?this.o.autoResize&&b>c?c:b<i?i:b:e?e>c?c:this.o.minHeight&&"auto"!==i&&e<i?i:e:i,c=this.o.minWidth?this.getVal(this.o.minWidth,"w"):"auto",a=a?this.o.autoResize&&a>d?d:a<c?c:a:f?
f>d?d:this.o.minWidth&&"auto"!==c&&f<c?c:f:c;this.d.container.css({height:b,width:a});this.d.wrap.css({overflow:e>b||f>a?"auto":"visible"});this.o.autoPosition&&this.setPosition()},setPosition:function(){var a,b;a=g[0]/2-this.d.container.outerHeight(!0)/2;b=g[1]/2-this.d.container.outerWidth(!0)/2;var e="fixed"!==this.d.container.css("position")?l.scrollTop():0;this.o.position&&"[object Array]"===Object.prototype.toString.call(this.o.position)?(a=e+(this.o.position[0]||a),b=this.o.position[1]||b):
a=e+a;this.d.container.css({left:b,top:a})},watchTab:function(a){if(0<b(a.target).parents(".simplemodal-container").length){if(this.inputs=b(":input:enabled:visible:first, :input:enabled:visible:last",this.d.data[0]),!a.shiftKey&&a.target===this.inputs[this.inputs.length-1]||a.shiftKey&&a.target===this.inputs[0]||0===this.inputs.length)a.preventDefault(),this.focus(a.shiftKey?"last":"first")}else a.preventDefault(),this.focus()},open:function(){this.d.iframe&&this.d.iframe.show();b.isFunction(this.o.onOpen)?
this.o.onOpen.apply(this,[this.d]):(this.d.overlay.show(),this.d.container.show(),this.d.data.show());this.o.focus&&this.focus();this.bindEvents()},close:function(){if(!this.d.data)return!1;this.unbindEvents();if(b.isFunction(this.o.onClose)&&!this.occb)this.occb=!0,this.o.onClose.apply(this,[this.d]);else{if(this.d.placeholder){var a=b("#simplemodal-placeholder");this.o.persist?a.replaceWith(this.d.data.removeClass("simplemodal-data").css("display",this.display)):(this.d.data.hide().remove(),a.replaceWith(this.d.orig))}else this.d.data.hide().remove();
this.d.container.hide().remove();this.d.overlay.hide();this.d.iframe&&this.d.iframe.hide().remove();this.d.overlay.remove();this.d={}}}}});



/*
 * SimpleModal Contact Form
 * http://simplemodal.com
 *
 * Copyright (c) 2013 Eric Martin - http://ericmmartin.com
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */
jQuery(function ($) {
  var contact = {
    message: null,
    init: function () {
      $('.recall').click(function (e) {
        e.preventDefault();

        // load the contact form using ajax
        $.get("data/recall.php", function(data){
          // create a modal dialog with the data
          $(data).modal({
            closeHTML: "<a href='#' title='Close' class='modal-close'><span>x</span>закрыть</a>",
            autoPosition: true,
            overlayId: 'contact-overlay',
            containerId: 'contact-container',
            onOpen: contact.open,
            onShow: contact.show,
            onClose: contact.close
          });
        });
      });
    },
    open: function (dialog) {
      // dynamically determine height
      var h = 370;

      var title = $('#contact-container .contact-title').html();
      $('#contact-container .contact-title').html('Loading...');
      dialog.overlay.fadeIn(200, function () {
        dialog.container.fadeIn(200, function () {
          dialog.data.fadeIn(200, function () {
            $('#contact-container .contact-content').animate({
              height: h
            }, function () {
              $('#contact-container .contact-title').html(title);
              $('#contact-container form').fadeIn(200, function () {
                $('#contact-container #contact-name').focus();

                $('#contact-container .contact-cc').click(function () {
                  var cc = $('#contact-container #contact-cc');
                  cc.is(':checked') ? cc.attr('checked', '') : cc.attr('checked', 'checked');
                });
              });
            });
          });
        });
      });
    },
    show: function (dialog) {
      $('#contact-container .contact-send').click(function (e) {
        e.preventDefault();
        // validate form
        if (contact.validate()) {
          var msg = $('#contact-container .contact-message');
          msg.fadeOut(function () {
            msg.removeClass('contact-error').empty();
          });
          $('#contact-container .contact-title').html('Sending...');
          $('#contact-container form').fadeOut(200);
          $('#contact-container .contact-content').animate({
            height: '260px'
          }, function () {
            $('#contact-container .contact-loading').fadeIn(200, function () {
              $.ajax({
                url: 'data/recall.php',
                data: $('#contact-container form').serialize() + '&action=send',
                type: 'post',
                cache: false,
                dataType: 'html',
                success: function (data) {
                  $('#contact-container .contact-loading').fadeOut(200, function () {
                    $('#contact-container .contact-title').html('Thank you!');
                    msg.html(data).fadeIn(200);
                  });
                },
                error: contact.error
              });
            });
          });
        }
        else {
          if ($('#contact-container .contact-message:visible').length > 0) {
            var msg = $('#contact-container .contact-message div');
            msg.fadeOut(200, function () {
              msg.empty();
              contact.showError();
              msg.fadeIn(200);
            });
          }
          else {
            $('#contact-container .contact-message').animate({
              height: '1px'
            }, contact.showError);
          }

        }
      });
    },
    close: function (dialog) {
      $('#contact-container .contact-message').fadeOut();
      $('#contact-container .contact-title').html('Goodbye...');
      $('#contact-container form').fadeOut(200);
      $('#contact-container .contact-content').animate({
        height: 40
      }, function () {
        dialog.data.fadeOut(200, function () {
          dialog.container.fadeOut(200, function () {
            dialog.overlay.fadeOut(200, function () {
              $.modal.close();
            });
          });
        });
      });
    },
    error: function (xhr) {
      alert(xhr.statusText);
    },
    validate: function () {
      contact.message = '';
      if (!$('#contact-container #contact-name').val()) {
        contact.message += 'Укажите Ваше Имя. ';
      }

      var email = $('#contact-container #contact-email').val();
      if (!email) {
        contact.message += 'Email is required. ';
      }
      else {
        if (!contact.validateEmail(email)) {
          contact.message += 'Email is invalid. ';
        }
      }

      if (!$('#contact-container #contact-message').val()) {
        contact.message += 'Message is required.';
      }

      var contactPhoneLenght = $('#contact-container .contact-phone').val().length;
      console.log(contactPhoneLenght);
      if (!$('#contact-container .contact-phone').val()  ||  contactPhoneLenght < 15) {
        contact.message += 'Укажите Ваш телефон.';

      }

      if (contact.message.length > 0) {
        return false;
      }
      else {
        return true;
      }
    },
    validateEmail: function (email) {
      var at = email.lastIndexOf("@");

      // Make sure the at (@) sybmol exists and
      // it is not the first or last character
      if (at < 1 || (at + 1) === email.length)
        return false;

      // Make sure there aren't multiple periods together
      if (/(\.{2,})/.test(email))
        return false;

      // Break up the local and domain portions
      var local = email.substring(0, at);
      var domain = email.substring(at + 1);

      // Check lengths
      if (local.length < 1 || local.length > 64 || domain.length < 4 || domain.length > 255)
        return false;

      // Make sure local and domain don't start with or end with a period
      if (/(^\.|\.$)/.test(local) || /(^\.|\.$)/.test(domain))
        return false;

      // Check for quoted-string addresses
      // Since almost anything is allowed in a quoted-string address,
      // we're just going to let them go through
      if (!/^"(.+)"$/.test(local)) {
        // It's a dot-string address...check for valid characters
        if (!/^[-a-zA-Z0-9!#$%*\/?|^{}`~&'+=_\.]*$/.test(local))
          return false;
      }

      // Make sure domain contains only valid characters and at least one period
      if (!/^[-a-zA-Z0-9\.]*$/.test(domain) || domain.indexOf(".") === -1)
        return false;

      return true;
    },
    showError: function () {
      $('#contact-container .contact-message')
        .html($('<div class="contact-error"></div>').append(contact.message))
        .fadeIn(200);
    }
  };

  contact.init();

});
