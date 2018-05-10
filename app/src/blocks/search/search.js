var
	classBlock = 'search',
	$blocks = $('.' + classBlock),
	delay = 200;

$blocks.each(function() {
	var
		$this = $(this),
		$input = $this.find('.' + classBlock + '__input'),
		$sub = $this.find('.' + classBlock + '__sub');

	$input.on('focus', function() {
		$sub.fadeIn(delay, function() {
			$(this).addClass(classBlock + '__sub_visible');
		});
	});

	$input.on('blur', function() {
		$sub.fadeOut(delay, function() {
			$(this)
				.removeClass(classBlock + '__sub_visible')
				.css('display', '');
		});
	});
});