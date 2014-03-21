(function () {
$(document).ready(function () {
	$.getJSON('/api/1/json/transactions', function (data) {
			var response = data && data.response || {};
			var transactions = response.transactions || [];
			var $table = $('TABLE.transactions');
			var $tbody = $('<TBODY>');
			transactions.forEach(function (transaction) {
				var date = transaction.date;
				var to = transaction.to;
				var amount = transaction.amount.toFixed(2);
				$tbody.append(
					$('<TR>')
						.append(
							$('<TD>')
								.text(date)
						)
						.append(
							$('<TD>')
								.text(to)
						)
						.append(
							$('<TD>')
								.text(amount)
						)
				);
			});
			$table.append($tbody);
	})
	.fail(function () {
		console.log('todo: handle failure gracefully');
	})
});
}());

