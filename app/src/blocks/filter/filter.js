var
	classBlock = 'filter',
	$block = $('.' + classBlock),
	$toggles = $block.find('.' + classBlock + '__toggle'),
	classToggleActive = classBlock + '__toggle_active',
	$btns = $block.find('.' + classBlock + '__view-btn'),
	classBtnActive = classBlock + '__view-btn_active',
	classHiddenTab = classBlock + '__tab_hidden',
	$dataTargets = $block.find('[data-filter-target]');

/* Обработка клика по кнопкам для смены вида */
$btns.on('click', function() {
	var $this = $(this);

	if ($this.hasClass(classBtnActive)) return;

	if ($btns.eq(0).hasClass(classBtnActive)) {
		toggleBtns(1);
	} else {

		if ($btns.eq(1).hasClass(classBtnActive)) {
			toggleBtns(0);
		} else {
			toggleBtns($btns.index($this));
		}
	}
});
/* ===== */

/* Обработка клика по кнопкам для смены с категорий на элементы */
$toggles.on('click', function(event) {

	var $this = $(this);

	if ($(event.target).hasClass(classBlock + '__view-btn')) {

		toggleBtns($btns.index($(event.target)));

		if (!$this.hasClass(classToggleActive)) {
			toggleToggles($toggles.index($this));
		}

		return;
	}

	if ($this.find('.' + classBlock + '__view-btn').length) {

		if ($this.hasClass(classToggleActive)) {

			if ($btns.eq(0).hasClass(classBtnActive)) {
				toggleBtns(1);
			} else {
				toggleBtns(0);
			}
		} else {
			toggleToggles(0);
			toggleBtns(0);
		}
	} else {
		toggleToggles(1);
		toggleBtns();
	}
});
/* ===== */

// Переключение кнопок вида
function toggleBtns(btnNum) {
	var $btn = btnNum !== undefined ? $btns.eq(btnNum) : null;

	$btns.removeClass(classBtnActive);

	if ($btn !== null) {
		$btn.addClass(classBtnActive);

		if ($btn.attr('data-filter-link')) {
			toggleTabs($btn);
		}
	}
}

// Переключение категории / элементы
function toggleToggles(toggleNum) {
	var $toggle = toggleNum !== undefined ? $toggles.eq(toggleNum) : null;

	$toggles.removeClass(classToggleActive);

	if ($toggle !== null) {
		$toggle.addClass(classToggleActive);

		if ($toggle.attr('data-filter-link')) {
			toggleTabs($toggle);
		}
	}
}

function toggleTabs($tab) {
	var
		$target = $dataTargets.filter('[data-filter-target=' + $tab.attr('data-filter-link') + ']');

	$dataTargets
		.addClass(classHiddenTab)
		.find('.slider')
		.trigger('filter.hidden');

	$target
		.removeClass(classHiddenTab)
		.find('.slider')
		.trigger('filter.shown');
}