window.calculateSumListener = function calculateSumListener() {
	//Return the value of the input #firstNumber
	var stringA = document.getElementById("firstNumber").value;
	//Return the value of the input #secondNumber
	var stringB = document.getElementById("secondNumber").value;

	//your code goes here
	var num1 = parseInt(stringA);
	var num2 = parseInt(stringB);
	var result = document.querySelector("#resultNumber");

	var total = num1 + num2;

	return (result.value = total);
};
