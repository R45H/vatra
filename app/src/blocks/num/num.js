var
	classBlock = 'num',
	$blocks = $('.' + classBlock);

$blocks.each(function() {
	var
		$this = $(this),
		$num = $this.find('.num__input'), // Поле ввода типа number
		$nBtn = $this.find('.num__btn'); // Кнопка у поля ввода типа number

	$num.on('input', function() { // Обработка вводимых данных
		var
			$this = $(this),
			val = +parseInt($this.val());

		if (this.value.match(/[^0-9]/g)) {
			this.value = this.value.replace(/[^0-9]/g, '');
		}

		if (+parseInt(this.value.charAt(0)) == 0) {
			this.value = this.value.slice(1);
		}

		if (!val) {
			$this.val('0');
		}
	});

	$nBtn.on('click', function() { // Обработка кнопок + и -
		var
			$this = $(this),
			val = +parseInt($num.val());

		if ($this.hasClass(classBlock + '__btn_pos')) {
			$num.val(val + 1);
		} else {
			if (val != 0) {
				$num.val(val - 1);
			}
		}
	});
});