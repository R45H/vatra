var
	classBlock = 'filter',
	$block = $('.' + classBlock),
	$toggles = $block.find('.' + classBlock + '__toggle'),
	classToggleActive = classBlock + '__toggle_active',
	$btns = $block.find('.' + classBlock + '__view-btn'),
	classBtnActive = classBlock + '__view-btn_active';

$btns.on('click', function() {
	var $this = $(this);

	if ($this.hasClass(classBtnActive)) return;

	$btns.removeClass(classBtnActive);
	$this.addClass(classBtnActive);
});

$toggles.on('click', function(event) {
	var
		$this = $(this),
		$target = $(event.target);

	if ($this.hasClass(classToggleActive)) return;

	$toggles.removeClass(classToggleActive);
	$this.addClass(classToggleActive);

	if ($target.hasClass(classBlock + '__view-btn')) return;

	$btns.removeClass(classBtnActive);

	$this
		.find('.' + classBlock + '__view-btn')
		.first()
		.addClass(classBtnActive);
});