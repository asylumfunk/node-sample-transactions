(function () {
$(document).ready(function () {
	$('SELECT#send_currency').change(function (event) {
		var currency = $(event.target).val();
		var symbol = '&#36;';
		if (currency === 'eur') {
			symbol = '&euro;';
		} else if (currency === 'jpy') {
			symbol = '&yen;';
		}
		$('SPAN.currency_symbol').html(symbol);
	});
	$('INPUT#send_amount').blur(function (event) {
		var $amount = $(event.target);
		var amounts = $amount.val().split('.');
		var output = '';
		var length;
		var index;
		var i;
		amounts[0] = (amounts[0] || '0').replace(/[^0-9]/g, '');
		amounts[1] = (amounts[1] || '00').substring(0, 2);
		length = amounts[0].length;
		for (i = length - 1; i >= 0; i -= 1) {
			index = length - i - 1;
			if (index > 0 && index % 3 === 0) {
				output = ',' + output;
			}
			output = amounts[0][i] + output;
		}
		output = output || '0';
		$amount.val(output + '.' + amounts[1]);
	});
	$('FORM#send').submit(function (event) {
		var valid = true;
		var $to = $('#send_to');
		var $amount = $('#send_amount');
		var $loading;
		if (/[^0-9,.]|^[ \t0,.]*$/.test($amount.val())) {
			$amount.addClass('error');
			valid = false;
		} else {
			$amount.removeClass('error');
		}
		if (valid) {
			$loading = $('.loading');
			$loading.show();
			window.setTimeout(function () {
				$loading.find('H1').text('success');
				window.setTimeout(function () {
					window.location = '/';
				}, 3000);
			}, 3000);
		}
		event.preventDefault();
	});
});
}())

