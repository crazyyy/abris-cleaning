!function(){for(var e,r=function(){},n=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeline","timelineEnd","timeStamp","trace","warn"],t=n.length,a=window.console=window.console||{};t--;)e=n[t],a[e]||(a[e]=r)}(),$(".plain-form").on("submit",function(e){e.preventDefault(),$(this).addClass("current-form");var r=($(this),$.trim($(".current-form input[name=phone]").val())),n=$.trim($(".current-form input[name=name]").val()),t=$.trim($(".current-form input[name=email]").val()),a=$(".current-form input[name=name]"),l=$(".current-form input[name=phone]"),o=($(".current-form input[name=email]"),$(this).serializeArray()),i=$(this).attr("action"),s=$(".current-form .thanx"),m=$(".current-form .message");$(m).fadeIn(200),null!=n&&0==n.length?($(m).addClass("message-err").html("Укажите имя"),$(a).addClass("input-error"),event.preventDefault()):null!=r&&0==r.length?($(a).removeClass("input-error"),$(m).addClass("message-err").html("Укажите телефон"),$(l).addClass("input-error"),event.preventDefault()):null!=t&&0==t.length?($(a).removeClass("input-error"),$(m).addClass("message-err").html("Укажите почту"),$(l).addClass("input-error"),event.preventDefault()):($(l).removeClass("input-error"),$.ajax({url:i,type:"POST",data:o,beforeSend:function(){$(m).html("Отправляем...")},success:function(e){$(m).addClass("message-ok"),$(m).html("Успешно отправилось!"),$(m).fadeOut(1500),$(s).fadeIn(1500)}})),$(this).removeClass("current-form")});