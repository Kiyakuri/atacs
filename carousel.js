// SLICK CAROUSEL
// if mobile or tablet do nothing
 $('.slick').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true,
  cssEase: 'linear',
   responsive: [
    {
      breakpoint: 769,
      settings: "unslick"
	}]
});	

// Find screen ratio

var res = ($(window).width()/$(window).height());

if ( res >= 1.6){
$(".slick-slide img").css("width", "100%");
}
else {
	console.log("Non Wide Screen");
}