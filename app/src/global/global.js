// Для ссылок с href='#' и наличием только атрибутов class, href и style отключается стандартное поведение ссылки
$(document).on('click', 'a', function(event) {
	var $this = $(this);

	if ($this.attr('href') != '#') return;

	if (
		(this.attributes.length < 4 && $this.attr('class') && $this.attr('href') && $this.attr('style')) ||
		(this.attributes.length < 3 && $this.attr('class') && $this.attr('href')) ||
		(this.attributes.length < 2 && !$this.attr('class') && $this.attr('href'))
	) {
		event.preventDefault();
	}
});

// Добавление цветов к селектам
$.widget('custom.iconselectmenu', $.ui.selectmenu, {
	_renderItem: function(ul, item) {
		var
			li = $('<li>'),
			wrapper = $('<div>', {text: item.label}),
			style = item.element.attr('data-style');

		if (item.disabled) {
			li.addClass('ui-state-disabled');
		}

		$('<span>', {
			'class': 'select__color',
			style: style || 'visibility: hidden;'
		})
			.prependTo(wrapper);

		return li.append(wrapper).appendTo(ul);
	}
});