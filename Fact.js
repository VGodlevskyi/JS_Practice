function fact(number) {
	let res = 1;
	for (let index = 1; index <= +number; index++) {
		res = res * index;
	}
	return res;
}

function dec2FactString(num) {
	const legend = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
	let str = '0';
	let i = 2;
	while (num) {
		str = legend[num % i] + str;
		num = Math.floor(num / i);
		i++;
	}
	return str;
}

function factString2Dec(str) {
	str = str.split('').reverse().join('');
	let res = 0;
	for (let index = 0; index < str.length; index++) {
		res = res + +str[index] * fact(index);
	}
	return res;
}

console.log(factString2Dec('4041000'));
