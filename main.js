// JavaScript Document
$(document).ready(function() {

// START TRANSLATION	
// Flag Required for Click Functionality	
var toggle_flag = 0;

// Click Div With Flag	
$('#Language_Select').click(function () {

// Toggle Hidden ul

$('.sub_menu').slideToggle();

// Check if open or closed already, and do the opposite
  
	if(toggle_flag===0){
      //code for slide down
      $('.sub_menu').slideDown(200);
	   
	  toggle_flag=1;
   }else{
	  //code for slide up
	  $('.sub_menu').slideUp(200);
      toggle_flag=0;
   }

});
	
// Accesibility Keyboard - Language Select
$('#Language_Select').keypress(function(e) {
    if(e.which === 13) {
      $('.sub_menu').slideToggle();

// Check if open or closed already, and do the opposite
  
	if(toggle_flag===0){
      //code for slide down
      $('.sub_menu').slideDown(200);
	   
	  toggle_flag=1;
   }else{
	  //code for slide up
	  $('.sub_menu').slideUp(200);
      toggle_flag=0;
   }
    }
});
// END ACCESSABILITY TRANSLATION

// FEATURED IMAGE HOVER	
$('.featured_hover_left').mouseenter(function(){
       if ($(".parent").hasClass('lft')) {
		 $('.lft').css("background-image", "url(/Assets/Images/IXFeatured_Hover_1920_1608.jpg)"); }
    
});
$('.featured_hover_left').mouseleave(function(){
        if ($(".parent").hasClass('lft')) {
		 $('.lft').css("background-image", "url(/Assets/Images/IXFeaturedImage_1920_1608.jpg)"); }
    
});
	
$('.featured_hover_right').mouseenter(function(){
       if ($(".parentrght").hasClass('rght')) {   
		 $('.parentrght').css("background-image", "url(/Assets/Images/AUFeatured_Hover_1920_1608.jpg)"); }
    
});
$('.featured_hover_right').mouseleave(function(){
        if ($(".parentrght").hasClass('rght')) {
		 $('.parentrght').css("background-image", "url(/Assets/Images/AUFeaturedImage_1920_1608.jpg)"); }
    
});
	
// FORM VALIDATION

	
$("form").ready(function() {

// In-Line Validation
$( "#email" ).focusout(function() {
    var email = $('#email').val();
	function isValidEmailAddress(email) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(email);
	}
	
	if( !isValidEmailAddress( email ) ) { 
		$(".erroremail").css("display", "block");
		$("#email").css("background-color", "#FF3F3F");
	}
	
	else {
		$(".erroremail").css("display", "none");
		$("#email").css("background-color", "#FFF");
	}
	
});

$( "#enquiry" ).focusout(function() {
if( $("#enquiry").val() === "" ) { 
		$(".errorenquiry").css("display", "block");
		$("#enquiry").css("background-color", "#FF3F3F");
	}
	
	else {
		$(".errorenquiry").css("display", "none");
		$("#enquiry").css("background-color", "#FFF");
	}
});

$( "#message" ).focusout(function() {
if( $("#message").val().length < 20 ) { 
		$(".errorsubmit").css("display", "block");
		$("#message").css("background-color", "#FF3F3F");
	}
	
	else {
		$(".errorsubmit").css("display", "none");
		$("#message").css("background-color", "#FFF");
	}
});
	
// Validation
	
$("#submit-button").click( function (){
	if ($("#message").val().length < 20 ) // Repeats  check on Submission
	  { 
		 $(".errorsubmit").css("display", "block");  // Shows In-Line Error for UX
		$("#message").css("background-color", "#FF3F3F"); //Shows In-Line Error for UX
		  return false ; // Disables Submit
	  } else if ($("#enquiry").val() === "") {
		$(".errorenquiry").css("display", "block");
		$("#enquiry").css("background-color", "#FF3F3F");
		  return false;
	  } else if ($(".erroremail").is(":visible") || $("#email").val() === "")  // Validates Email, did they trip inline validation, or did they skip it?
	  {
		 $(".erroremail").css("display", "block");
		 $("#email").css("background-color", "#FF3F3F");
		  return false;
	  } 
	  // Checks to see if a bot filled in the hidden form that users cant see
		else if ($(".bots").val().length > 0)
	  {
		  return false;	
	  }
		else
	  {
		  return true;
	  }
	
});
	


});

	

}); // end ready

// Page Transitions

$(document).ready(function() {
  $(".animsition-overlay").animsition({
    inClass: 'overlay-slide-in-right',
	outClass: 'overlay-slide-out-left',
    inDuration: 1500,
    linkElement: 'a:not([target="_blank"]):not([href^="#"])',
    loading: false,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '<img src="/Assets/Icons/A-TACSLogo.svg">', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : true,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });
});