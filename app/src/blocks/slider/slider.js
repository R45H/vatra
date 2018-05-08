var
	classSlider = 'slider',
	classDots = classSlider + '__dots',
	classDot = classSlider + '__dot',
	classArrow = classSlider + '__arrow',
	$sliders = $('.' + classSlider);

$sliders.each(function() {
	var
		$this = $(this),
		$items = $this.children();

	if ($items.length < 2) return;

	$this.slick({
		dots: true,
		dotsClass: classDots,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnDotsHover: true,
		customPaging: function() {
			return '<div class="' + classDot + '"></div>'
		},
		prevArrow: '<div class="' + classArrow + ' ' + classArrow + '_prev"></div>',
		nextArrow: '<div class="' + classArrow + ' ' + classArrow + '_next"></div>',
		responsive: [
			{
				breakpoint: 576,
				settings: {
					dots: false
				}
			}
		]
	})
});