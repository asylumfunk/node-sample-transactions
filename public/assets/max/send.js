(function () {
$(document).ready(function () {
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
		if (!/\S+@\S+\.\S+/.test($to.val())) {
			$to.addClass('error');
			valid = false;
		} else {
			$to.removeClass('error');
		}
		if (/[^0-9,.]|^[ \t]*$/.test($amount.val())) {
			$amount.addClass('error');
			valid = false;
		} else {
			$amount.removeClass('error');
		}
		event.preventDefault();
	});
});
}())

