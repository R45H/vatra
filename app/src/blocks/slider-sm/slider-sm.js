var
	classSlider = 'slider-sm',
	classDots = classSlider + '__dots',
	classDot = classSlider + '__dot',
	classArrow = classSlider + '__arrow',
	$sliders = $('.' + classSlider);

$sliders.each(function() {
	var
		$this = $(this),
		$items = $this.children();

	if ($items.length < 2) return;

	var config = {
		dotsClass: classDots,
		dots: true,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnDotsHover: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		customPaging: function() {
			return '<div class="' + classDot + '"></div>'
		},
		prevArrow: '<div class="' + classArrow + ' ' + classArrow + '_prev"></div>',
		nextArrow: '<div class="' + classArrow + ' ' + classArrow + '_next"></div>',
		responsive: [
			{
				breakpoint: 1500,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					adaptiveHeight: true
				}
			},
			{
				breakpoint: 576,
				settings: {
					dots: false
				}
			}
		]
	};

	$this.slick(config);
});