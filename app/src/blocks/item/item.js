var
	classBlock = 'item',
	$blocks = $('.' + classBlock);

$blocks.each(function() {
	var
		$this = $(this),
		$img = $this.find('.' + classBlock + '__img-link'),
		$zoomBtn = $this.find('.' + classBlock + '__link_zoom');

	$zoomBtn.on('click', function() {
		$img.trigger('click');
	});
});