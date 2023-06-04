$(function () {
  // SLIDERS
	$(".slider").slick({
		slidesToShow: 4,
		arrows: false,
	});

	$(".columns__slider").slick({
		sliderToShow: 1,
		nextArrow: ".controls-next",
		prevArrow: ".controls-prev",
	});

  // VALIDATION

  const form = $('#contact-form');

  form.validate({
    rules: {
     
    }
  })

 

  $('#submit__btn').on('click', function(e) {
    e.preventDefault()
    $('input:blank').css('border', '1px solid red')
    $('textarea:blank').css('border', '1px solid red')
    console.log(form.valid())
  })

});
