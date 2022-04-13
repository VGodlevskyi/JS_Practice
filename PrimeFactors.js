function primeFactors(n) {
	let res = '',
		curAmount = 0,
		div = 2,
		rest = n;
	while (rest > 1) {
		if (rest % div == 0) {
			curAmount += 1;
			rest = rest / div;
		} else {
			if (curAmount === 1) res = res.concat('(' + div + ')');
			if (curAmount > 1) res = res.concat('(' + div + '**' + curAmount + ')');
			curAmount = 0;
			div += 1;
		}
	}
	if (curAmount === 1) res = res.concat('(' + div + ')');
	if (curAmount > 1) res = res.concat('(' + div + '**' + curAmount + ')');
	return res;
}

// function primeFactors(n) {
// 	for (var i = 2, res = '', f; i <= n; i++) {
// 		f = 0;
// 		while (n % i == 0) {
// 			f++;
// 			n /= i;
// 		}
// 		res += f ? '(' + (f > 1 ? i + '**' + f : i) + ')' : '';
// 	}
// 	return res || '(' + n + ')';
// }

console.log(primeFactors(7775460));
