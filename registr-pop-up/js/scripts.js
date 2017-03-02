$(document).ready(function(){
	$(".successReg").hide();
	$(".attractionList").owlCarousel({
		items: 4,
		margin: 26,
		dots: true
	});
});


$(".tab-item-reg").not(":first").hide();
$(".tab-reg").click(function() {
	$(".tab-reg").removeClass("active-registr").eq($(this).index()).addClass("active-registr");
	$(".tab-item-reg").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active-registr"); 



	$(".registr").click(function(){
		$(".content-pop-up-main").animate({top: "99px"},0)
	});
	$(".sign-in").click(function(){
		$(".content-pop-up-main").animate({top: "190px"},0)
	})

	$(document).ready(function(){
   $(".pop-up-main").hide();
});
function PopUpShow(){
    $(".pop-up-main").show();
}
function PopUpHide(){
    $(".pop-up-main").hide();
}


/***********************************************/
		var regFormInpt = $("#reg-form input");
		var signInFormInpt = $("#sign-in-form input");
		var mailSignIn = $("#mailSignIn");
		var passwordSignIn = $("#passwordSignIn");
		var nameReg = $("#nameReg");
		var famReg = $("#famReg");
		var mailReg = $("#mailReg");
		var passwordReg = $("#passwordReg");
		var phoneReg = $("#phoneReg");
		var passwordRegRepl = $("#passwordRegRepl");
		var regexes = {
			reg_sername: /[А-Яа-я]{2,20}$/,
			reg_name: /^[А-Яа-я]{2,20}$/,
			reg_mail: 	/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,5}$/,
			reg_pass: /^([a-zA-Z0-9@#$%^&+=*.\-_ ]){6,18}$/,
			reg_pass_repl: /^([a-zA-Z0-9@#$%^&+=*.\-_ ]){6,18}$/,
			reg_tel: /[0-9]$/,
			sign_in_mail: 	/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,5}$/,
			sign_in_pass: /^([a-zA-Z0-9@#$%^&+=*.\-_ ]){6,18}$/,
		};

function validateReg(){			
		if (!nameReg.val()  || !passwordRegRepl.val()  || !famReg.val()  || !mailReg.val()  || !phoneReg.val()  || !passwordReg.val()  || passwordReg.val()  != passwordRegRepl.val()  || $(regFormInpt).hasClass("error")){
			return false;
		}	return secVal(),true ;


};
$(function regexpReg(){
	'use strict';	
	$.each($(regFormInpt), function() {
		$(this).on('keyup keydown change keypress', function(){
			if(!regexes[$(this).attr('name')].test($(this).val())){
				$(this).removeClass('conf');
				$(this).addClass('error');
			} else {
				$(this).removeClass('error');
				$(this).addClass('conf');
			}
		});
	});
		
});

function validateSignIn(){
	if (!mailSignIn.val() || !passwordSignIn.val()  || $(signInFormInpt).hasClass("error")) {
		return false;
	}else if (mailSignIn.val() || passwordSignIn.val()  || $(signInFormInpt).hasClass("conf")){}
		return true;
}

$(function regexpSignIn(){
	'use strict';
	$.each($(signInFormInpt), function() {
		$(this).on('keyup keydown change keypress ', function(){
			if(!regexes[$(this).attr('name')].test($(this).val())){
				$(this).removeClass('conf');
				$(this).addClass('error');
			} else {
				$(this).removeClass('error');
				$(this).addClass('conf');
			}
		});
	});		
});
$("#phoneReg").mask("+7(999) 999-9999");


$("#reg-form form").change( function () {
        var $form = $("#reg-form");
        $.ajax({
            type: "POST",
            url: "#",
            data: $form.serialize()
        }).done(function(data) {
        	/*$(".img-reg").hide().html(data);*/
        	$(".successReg").show().html(data);
            
        }).fail(function() {
            console.log('fail');
        });
    });


