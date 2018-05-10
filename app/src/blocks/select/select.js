var
	classBlock = 'select',
	$select = $('.' + classBlock + '__origin'),
	innerClasses = {
		'ui-selectmenu-button': classBlock + '__current', // Кнопка селекта
		'ui-selectmenu-button-open': classBlock + '__current_active', // Состояние кнопки при открытом селекте
		'ui-selectmenu-text': classBlock + '__text', // Текст внутри кнопки
		'ui-selectmenu-menu': classBlock + '__list' // Выпадающий список
	};

$select.each(function() {
	var
		$this = $(this),
		isColors = $this.hasClass(classBlock + '__origin_colors');

	if (isColors) {
		$this.iconselectmenu({
			classes: innerClasses,
			change: function(event, ui) {
				var
					$this = $(this),
					colorStyle = $this.find(':selected').attr('data-style'),
					$text = $this.next();

				$text
					.find('.' + classBlock + '__color')
					.remove();

				$('<span>', {
					'class': classBlock + '__color',
					style: colorStyle
				})
					.prependTo($text);
			}
		});
	} else {
		$this.selectmenu({
			classes: innerClasses
		});
	}
});

$(window).on('resize', function() {
	$select.selectmenu('close');
});