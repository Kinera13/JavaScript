let m = prompt('первое число', '');
typeof m

let n = prompt('второе число', '');
let op = prompt('арифметическая операция', '');

if (op == '+') {
	alert(m+n);
}

else if (op == '-'){
	alert(m-n);
}

else if (op == '*'){
	alert(m*n);
}

else if(op == '/'){
	alert(m/n);
}

else {
	alert('Вычисление невозможно');
}