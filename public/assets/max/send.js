(function () {
$(document).ready(function () {
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

