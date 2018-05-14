var
	classBlock = 'check-list',
	$blocks = $('.' + classBlock);

$blocks.each(function() {
	var
		$this = $(this),
		$title = $this.find('.' + classBlock + '__title').find('.check'),
		$titleInput = $title.find('.check__input'),
		$items = $this.find('.' + classBlock + '__list').find('.check'),
		$itemsInput = $items.find('.check__input');

	$titleInput.on('change', function() {
		var $this = $(this);

		if ($this.is(':checked')) {
			$itemsInput.prop('checked', true);
		} else {
			$itemsInput.prop('checked', false);
		}
	});

	$itemsInput.on('change', function() {
		var lengthChecked = $itemsInput.filter(':checked').length;

		if (lengthChecked) {

			if ($items.length == lengthChecked) {
				$title.removeClass('check_partial');
				$titleInput.prop('checked', true);
			} else {
				$title.addClass('check_partial');
				$titleInput.prop('checked', false);
			}
		} else {
			$title.removeClass('check_partial');
			$titleInput.prop('checked', false);
		}
	});
});