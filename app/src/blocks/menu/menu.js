var
	classBlock = 'menu',
	classOpened = classBlock + '__item_opened',
	classHeadOpened = classBlock + '__head_opened',
	classWrapOpened = classBlock + '__wrap_opened',
	$block = $('.' + classBlock),
	$wrap = $block.find('.' + classBlock + '__wrap'),
	$withSub = $block.find('.' + classBlock + '__item_sub'),
	$head = $('.' + classBlock + '__head'),
	mobilePoint = 576;

/* Работа подменю у обычных пунктов меню в мобильной версии */
$withSub.on('click', function() {
	if (window.innerWidth >= mobilePoint) return;
	$(this).toggleClass(classOpened);
	return false;
});
/* ===== */

/* Схлопывание меню при клике вне него */
$(document).on('click', function(event) {
	var
		$openedLinks = $withSub.filter('.' + classOpened),
		$target = $(event.target);

	if (!$openedLinks.length || $target.closest('.' + classBlock).length) return;

	$openedLinks.removeClass(classOpened);
});
/* ===== */

/* Работа кнопки "Меню" в мобильной версии */
$head.on('click', function() {
	var $this = $(this);

	if ($this.hasClass(classHeadOpened)) {
		$wrap.slideUp(150, function() {
			$(this)
				.css('display', '')
				.removeClass(classWrapOpened);
		});
	} else {
		$wrap.slideDown(150, function() {
			$(this)
				.css('display', '')
				.addClass(classWrapOpened);
		});
	}

	$(this).toggleClass(classHeadOpened);
});
/* ===== */

$(window).on('resize', function() {
	if (window.innerWidth < mobilePoint) return;

	$withSub.removeClass(classOpened);
	$head.removeClass(classHeadOpened);
	$wrap.removeClass(classWrapOpened);
});