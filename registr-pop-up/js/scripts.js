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




	$(document).ready(function(){
   $(".pop-up-main , .PasswordRecoveryMain").hide();
});
var closePopUpRecoveryPass = $(".closePopUpRecoveryPass");
var jsPasswordRecoveryMain = $(".jsPasswordRecoveryMain");
var contentPopUpMain = $(".content-pop-up-main");
var signInProfile = $(".SignInProfile");
var userLink = $(".userLink");
var popUpMain = $(".pop-up-main");
var exitPopUp = $(".close-pop-up-reg,.exitPopUp");
var linkRecoveryPass = $(".zabil-pass");

	signInProfile.on("click",  (e) => {
		e.preventDefault();
		popUpMain.show();
		return	false;
	});
	exitPopUp.on("click",  (e) => {
		e.preventDefault();
		popUpMain.hide();
		return	false;
	});
	userLink.on("click",  (e) => {
		e.preventDefault();
		popUpMain.show();
		contentPopUpMain.show();
		return	false;
	});
	linkRecoveryPass.on("click", (e) =>{
		e.preventDefault();
		jsPasswordRecoveryMain.show();
		contentPopUpMain.hide();
		return	false;
	});
		closePopUpRecoveryPass.on("click",  (e) => {
		e.preventDefault();
		popUpMain.hide();
		jsPasswordRecoveryMain.hide();

		return	false;
	});




/***********************************************/
		var PasswordRecoveryInput = $(".PasswordRecoveryInput");
		var PasswordRecoveryForm = $(".PasswordRecoveryForm input");
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
			PasswordRecovery: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,5}$/
		};


function validatePassRecovery(){
	if (!PasswordRecoveryInput.val() || PasswordRecoveryForm.hasClass("error")) {
		return	false;
	}
	return true;
};

function validateReg(){			
		if (!nameReg.val()  || !passwordRegRepl.val()  || !famReg.val()  || !mailReg.val()  || !phoneReg.val()  || !passwordReg.val()  || passwordReg.val()  != passwordRegRepl.val()  || $(regFormInpt).hasClass("error")){
			return false;
		}	return secVal(),true ;


};

$(phoneReg).mask("+7-999-999-9999");

$(function regexpFormPassRecovery(){
	'use strict';	
	$.each($(PasswordRecoveryForm), function() {
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


var registrBut = $(".registr-but");
$(registrBut).on("click", function (e) {
		e.preventDefault();
        var $form = $("#reg-form");
        $.ajax({
            type: "POST",
            url: "#",
            data: $form.serialize(),
        }).done(function(data) {
        	$(".successReg").show().html(data);
        	$(".img-reg").hide().html(data);
        	var delay = 3000;
 			setTimeout("document.location.href='http://vk.com'", delay);

        }).fail(function() {
            console.log('fail');
        });
      
        return false;
    });  




var jsPasswordRecoveryButton = $(".jsPasswordRecoveryButton");
$(jsPasswordRecoveryButton).on("click", function (e) {
		e.preventDefault();
        var $form = $(".PasswordRecoveryForm");
        $.ajax({
            type: "POST",
            url: "#",
            data: $form.serialize(),
        }).done(function(data) {
        	$("#").show().html(data);
        	$("#").hide().html(data);
        }).fail(function() {
            console.log('fail');
            $("#").show().html(data);
            $("#").hide().html(data);
        });
      
        return false;
    }); 

