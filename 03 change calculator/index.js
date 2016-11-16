var currencies = [
    { dollar: 'one-hundred', worth: 100 },
    { dollar: 'fifty', worth: 50 },
    { dollar: 'twenty', worth: 20 },
    { dollar: 'ten', worth: 10 },
    { dollar: 'five', worth: 5 },
    { dollar: 'one', worth: 1 },
    { dollar: 'quarter', worth: 0.25 },
    { dollar: 'dime', worth: 0.1 },
    { dollar: 'nickel', worth: 0.05 },
    { dollar: 'penny', worth: 0.01 }
]

function roundToDecimal(num, dec) {
    var rounded = (Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec)).toFixed(dec);

    return rounded;
}
		var amountDue = document.getElementById('amountDue');

		var amountPaid = document.getElementById('amountPaid');

		var button = document.getElementById('returnAmount');

		var changeDue = 0;

		button.onclick = function() {

		    changeDue = amountPaid.value - amountDue.value;

		    var message = 'Your change is $' + roundToDecimal(changeDue, 2) + '!';

		    var output = document.getElementById('output');

		    output.innerHTML = message;

		    for (var i = 0; i < currencies.length; i++) {
		        var currency = currencies[i];
		        if (changeDue >= currency.worth) {
		         var bill = Math.floor(changeDue / currency.worth);
		         changeDue = roundToDecimal(changeDue - bill * currency.worth, 2);
		         document.getElementById(currency.dollar).innerHTML = bill;
        }
    }
}

