!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){var e,o,i=[],n=t(document),s=navigator.userAgent.toLowerCase(),a=t(window),c=[],d=null,l=/msie/.test(s)&&!/opera/.test(s),r=/opera/.test(s);e=l&&/msie 6./.test(s)&&"object"!=typeof window.XMLHttpRequest,o=l&&/msie 7.0/.test(s),t.modal=function(e,o){return t.modal.impl.init(e,o)},t.modal.close=function(){t.modal.impl.close()},t.modal.focus=function(e){t.modal.impl.focus(e)},t.modal.setContainerDimensions=function(){t.modal.impl.setContainerDimensions()},t.modal.setPosition=function(){t.modal.impl.setPosition()},t.modal.update=function(e,o){t.modal.impl.update(e,o)},t.fn.modal=function(e){return t.modal.impl.init(this,e)},t.modal.defaults={appendTo:"body",focus:!0,opacity:50,overlayId:"simplemodal-overlay",overlayCss:{},containerId:"simplemodal-container",containerCss:{},dataId:"simplemodal-data",dataCss:{},minHeight:null,minWidth:null,maxHeight:null,maxWidth:null,autoResize:!1,autoPosition:!0,zIndex:1e3,close:!0,closeHTML:'<a class="modalCloseImg" title="Close"></a>',closeClass:"simplemodal-close",escClose:!0,overlayClose:!1,fixed:!0,position:null,persist:!1,modal:!0,onOpen:null,onShow:null,onClose:null},t.modal.impl={d:{},init:function(e,o){if(this.d.data)return!1;if(d=l&&!t.support.boxModel,this.o=t.extend({},t.modal.defaults,o),this.zIndex=this.o.zIndex,this.occb=!1,"object"==typeof e)e=e instanceof t?e:t(e),this.d.placeholder=!1,0<e.parent().parent().size()&&(e.before(t("<span></span>").attr("id","simplemodal-placeholder").css({display:"none"})),this.d.placeholder=!0,this.display=e.css("display"),!this.o.persist)&&(this.d.orig=e.clone(!0));else{if("string"!=typeof e&&"number"!=typeof e)return alert("SimpleModal Error: Unsupported data type: "+typeof e),this;e=t("<div></div>").html(e)}return this.create(e),this.open(),t.isFunction(this.o.onShow)&&this.o.onShow.apply(this,[this.d]),this},create:function(o){this.getDimensions(),this.o.modal&&e&&(this.d.iframe=t('<iframe src="javascript:false;"></iframe>').css(t.extend(this.o.iframeCss,{display:"none",opacity:0,position:"fixed",height:c[0],width:c[1],zIndex:this.o.zIndex,top:0,left:0})).appendTo(this.o.appendTo)),this.d.overlay=t("<div></div>").attr("id",this.o.overlayId).addClass("simplemodal-overlay").css(t.extend(this.o.overlayCss,{display:"none",opacity:this.o.opacity/100,height:this.o.modal?i[0]:0,width:this.o.modal?i[1]:0,position:"fixed",left:0,top:0,zIndex:this.o.zIndex+1})).appendTo(this.o.appendTo),this.d.container=t("<div></div>").attr("id",this.o.containerId).addClass("simplemodal-container").css(t.extend({position:this.o.fixed?"fixed":"absolute"},this.o.containerCss,{display:"none",zIndex:this.o.zIndex+2})).append(this.o.close&&this.o.closeHTML?t(this.o.closeHTML).addClass(this.o.closeClass):"").appendTo(this.o.appendTo),this.d.wrap=t("<div></div>").attr("tabIndex",-1).addClass("simplemodal-wrap").css({height:"100%",outline:0,width:"100%"}).appendTo(this.d.container),this.d.data=o.attr("id",o.attr("id")||this.o.dataId).addClass("simplemodal-data").css(t.extend(this.o.dataCss,{display:"none"})).appendTo("body"),this.setContainerDimensions(),this.d.data.appendTo(this.d.wrap),(e||d)&&this.fixIE()},bindEvents:function(){var o=this;t("."+o.o.closeClass).bind("click.simplemodal",function(t){t.preventDefault(),o.close()}),o.o.modal&&o.o.close&&o.o.overlayClose&&o.d.overlay.bind("click.simplemodal",function(t){t.preventDefault(),o.close()}),n.bind("keydown.simplemodal",function(t){o.o.modal&&9===t.keyCode?o.watchTab(t):o.o.close&&o.o.escClose&&27===t.keyCode&&(t.preventDefault(),o.close())}),a.bind("resize.simplemodal orientationchange.simplemodal",function(){o.getDimensions(),o.o.autoResize?o.setContainerDimensions():o.o.autoPosition&&o.setPosition(),e||d?o.fixIE():o.o.modal&&(o.d.iframe&&o.d.iframe.css({height:c[0],width:c[1]}),o.d.overlay.css({height:i[0],width:i[1]}))})},unbindEvents:function(){t("."+this.o.closeClass).unbind("click.simplemodal"),n.unbind("keydown.simplemodal"),a.unbind(".simplemodal"),this.d.overlay.unbind("click.simplemodal")},fixIE:function(){var e=this.o.position;t.each([this.d.iframe||null,this.o.modal?this.d.overlay:null,"fixed"===this.d.container.css("position")?this.d.container:null],function(t,o){if(o){var i=o[0].style;if(i.position="absolute",2>t)i.removeExpression("height"),i.removeExpression("width"),i.setExpression("height",'document.body.scrollHeight > document.body.clientHeight ? document.body.scrollHeight : document.body.clientHeight + "px"'),i.setExpression("width",'document.body.scrollWidth > document.body.clientWidth ? document.body.scrollWidth : document.body.clientWidth + "px"');else{var n,s;e&&e.constructor===Array?(n=e[0]?"number"==typeof e[0]?e[0].toString():e[0].replace(/px/,""):o.css("top").replace(/px/,""),n=-1===n.indexOf("%")?n+' + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"':parseInt(n.replace(/%/,""))+' * ((document.documentElement.clientHeight || document.body.clientHeight) / 100) + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"',e[1]&&(s="number"==typeof e[1]?e[1].toString():e[1].replace(/px/,""),s=-1===s.indexOf("%")?s+' + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"':parseInt(s.replace(/%/,""))+' * ((document.documentElement.clientWidth || document.body.clientWidth) / 100) + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"')):(n='(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"',s='(document.documentElement.clientWidth || document.body.clientWidth) / 2 - (this.offsetWidth / 2) + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"'),i.removeExpression("top"),i.removeExpression("left"),i.setExpression("top",n),i.setExpression("left",s)}}})},focus:function(e){var o=this,e=e&&-1!==t.inArray(e,["first","last"])?e:"first",i=t(":input:enabled:visible:"+e,o.d.wrap);setTimeout(function(){0<i.length?i.focus():o.d.wrap.focus()},10)},getDimensions:function(){var t="undefined"==typeof window.innerHeight?a.height():window.innerHeight;i=[n.height(),n.width()],c=[t,a.width()]},getVal:function(t,e){return t?"number"==typeof t?t:"auto"===t?0:0<t.indexOf("%")?parseInt(t.replace(/%/,""))/100*("h"===e?c[0]:c[1]):parseInt(t.replace(/px/,"")):null},update:function(t,e){return this.d.data?(this.d.origHeight=this.getVal(t,"h"),this.d.origWidth=this.getVal(e,"w"),this.d.data.hide(),t&&this.d.container.css("height",t),e&&this.d.container.css("width",e),this.setContainerDimensions(),this.d.data.show(),this.o.focus&&this.focus(),this.unbindEvents(),void this.bindEvents()):!1},setContainerDimensions:function(){var t=e||o,i=this.d.origHeight?this.d.origHeight:r?this.d.container.height():this.getVal(t?this.d.container[0].currentStyle.height:this.d.container.css("height"),"h"),t=this.d.origWidth?this.d.origWidth:r?this.d.container.width():this.getVal(t?this.d.container[0].currentStyle.width:this.d.container.css("width"),"w"),n=this.d.data.outerHeight(!0),s=this.d.data.outerWidth(!0);this.d.origHeight=this.d.origHeight||i,this.d.origWidth=this.d.origWidth||t;var a=this.o.maxHeight?this.getVal(this.o.maxHeight,"h"):null,d=this.o.maxWidth?this.getVal(this.o.maxWidth,"w"):null,a=a&&a<c[0]?a:c[0],d=d&&d<c[1]?d:c[1],l=this.o.minHeight?this.getVal(this.o.minHeight,"h"):"auto",i=i?this.o.autoResize&&i>a?a:l>i?l:i:n?n>a?a:this.o.minHeight&&"auto"!==l&&l>n?l:n:l,a=this.o.minWidth?this.getVal(this.o.minWidth,"w"):"auto",t=t?this.o.autoResize&&t>d?d:a>t?a:t:s?s>d?d:this.o.minWidth&&"auto"!==a&&a>s?a:s:a;this.d.container.css({height:i,width:t}),this.d.wrap.css({overflow:n>i||s>t?"auto":"visible"}),this.o.autoPosition&&this.setPosition()},setPosition:function(){var t,e;t=c[0]/2-this.d.container.outerHeight(!0)/2,e=c[1]/2-this.d.container.outerWidth(!0)/2;var o="fixed"!==this.d.container.css("position")?a.scrollTop():0;this.o.position&&"[object Array]"===Object.prototype.toString.call(this.o.position)?(t=o+(this.o.position[0]||t),e=this.o.position[1]||e):t=o+t,this.d.container.css({left:e,top:t})},watchTab:function(e){0<t(e.target).parents(".simplemodal-container").length?(this.inputs=t(":input:enabled:visible:first, :input:enabled:visible:last",this.d.data[0]),(!e.shiftKey&&e.target===this.inputs[this.inputs.length-1]||e.shiftKey&&e.target===this.inputs[0]||0===this.inputs.length)&&(e.preventDefault(),this.focus(e.shiftKey?"last":"first"))):(e.preventDefault(),this.focus())},open:function(){this.d.iframe&&this.d.iframe.show(),t.isFunction(this.o.onOpen)?this.o.onOpen.apply(this,[this.d]):(this.d.overlay.show(),this.d.container.show(),this.d.data.show()),this.o.focus&&this.focus(),this.bindEvents()},close:function(){if(!this.d.data)return!1;if(this.unbindEvents(),t.isFunction(this.o.onClose)&&!this.occb)this.occb=!0,this.o.onClose.apply(this,[this.d]);else{if(this.d.placeholder){var e=t("#simplemodal-placeholder");this.o.persist?e.replaceWith(this.d.data.removeClass("simplemodal-data").css("display",this.display)):(this.d.data.hide().remove(),e.replaceWith(this.d.orig))}else this.d.data.hide().remove();this.d.container.hide().remove(),this.d.overlay.hide(),this.d.iframe&&this.d.iframe.hide().remove(),this.d.overlay.remove(),this.d={}}}}}),jQuery(function(t){var e={message:null,init:function(){t(".recall").click(function(o){o.preventDefault(),t.get("data/recall.php",function(o){t(o).modal({closeHTML:"<a href='#' title='Close' class='modal-close'>x</a>",autoPosition:!0,overlayId:"contact-overlay",containerId:"contact-container",onOpen:e.open,onShow:e.show,onClose:e.close})})})},open:function(e){var o=370,i=t("#contact-container .contact-title").html();t("#contact-container .contact-title").html("Loading..."),e.overlay.fadeIn(200,function(){e.container.fadeIn(200,function(){e.data.fadeIn(200,function(){t("#contact-container .contact-content").animate({height:o},function(){t("#contact-container .contact-title").html(i),t("#contact-container form").fadeIn(200,function(){t("#contact-container #contact-name").focus(),t("#contact-container .contact-cc").click(function(){var e=t("#contact-container #contact-cc");e.is(":checked")?e.attr("checked",""):e.attr("checked","checked")})})})})})})},show:function(o){t("#contact-container .contact-send").click(function(o){if(o.preventDefault(),e.validate()){var i=t("#contact-container .contact-message");i.fadeOut(function(){i.removeClass("contact-error").empty()}),t("#contact-container .contact-title").html("Sending..."),t("#contact-container form").fadeOut(200),t("#contact-container .contact-content").animate({height:"260px"},function(){t("#contact-container .contact-loading").fadeIn(200,function(){t.ajax({url:"data/recall.php",data:t("#contact-container form").serialize()+"&action=send",type:"post",cache:!1,dataType:"html",success:function(e){t("#contact-container .contact-loading").fadeOut(200,function(){t("#contact-container .contact-title").html("Thank you!"),i.html(e).fadeIn(200)})},error:e.error})})})}else if(t("#contact-container .contact-message:visible").length>0){var i=t("#contact-container .contact-message div");i.fadeOut(200,function(){i.empty(),e.showError(),i.fadeIn(200)})}else t("#contact-container .contact-message").animate({height:"1px"},e.showError)})},close:function(e){t("#contact-container .contact-message").fadeOut(),t("#contact-container .contact-title").html("Goodbye..."),t("#contact-container form").fadeOut(200),t("#contact-container .contact-content").animate({height:40},function(){e.data.fadeOut(200,function(){e.container.fadeOut(200,function(){e.overlay.fadeOut(200,function(){t.modal.close()})})})})},error:function(t){alert(t.statusText)},validate:function(){e.message="",t("#contact-container #contact-name").val()||(e.message+="Укажите Ваше Имя. ");var o=t("#contact-container #contact-email").val();o?e.validateEmail(o)||(e.message+="Email is invalid. "):e.message+="Email is required. ",t("#contact-container #contact-message").val()||(e.message+="Message is required.");var i=t("#contact-container .contact-phone").val().length;return console.log(i),(!t("#contact-container .contact-phone").val()||15>i)&&(e.message+="Укажите Ваш телефон."),e.message.length>0?!1:!0},validateEmail:function(t){var e=t.lastIndexOf("@");if(1>e||e+1===t.length)return!1;if(/(\.{2,})/.test(t))return!1;var o=t.substring(0,e),i=t.substring(e+1);return o.length<1||o.length>64||i.length<4||i.length>255?!1:/(^\.|\.$)/.test(o)||/(^\.|\.$)/.test(i)?!1:(/^"(.+)"$/.test(o)||/^[-a-zA-Z0-9!#$%*\/?|^{}`~&'+=_\.]*$/.test(o))&&/^[-a-zA-Z0-9\.]*$/.test(i)&&-1!==i.indexOf(".")?!0:!1},showError:function(){t("#contact-container .contact-message").html(t('<div class="contact-error"></div>').append(e.message)).fadeIn(200)}};e.init()});