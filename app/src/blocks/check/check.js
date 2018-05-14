var
	classBlock = 'check',
	$blocks = $('.' + classBlock);

$blocks.on('click', function() {
	$(this).removeClass(classBlock + '_partial');
});