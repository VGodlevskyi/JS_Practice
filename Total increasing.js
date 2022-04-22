// function totalIncDec(x) {
// 	//your code here
// 	let count = 0;
// 	console.log(x);
// 	function checkIncr(num) {
// 		let incr = 0;
// 		let res = true;
// 		String(num)
// 			.split('')
// 			.reduce((prev, cur) => {
// 				if ((incr !== 0 && !incr && cur > prev) || (incr === true && prev > cur)) res = false;
// 				if (cur > prev) incr = true;
// 				else if (cur < prev) incr = false;
// 				return cur;
// 			});
// 		return res;
// 	}

// 	for (let index = Math.pow(10, x); index > 0; index--) {
// 		if (checkIncr(index)) count++;
// 	}
// 	return count;
// }

function totalIncDec(n) {
	let a = 1;
	let b = 1;
	let c = 1 + 10 * n;
	for (let i = 0; i < n; i++) {
		a = Math.floor((a * (10 + i)) / (i + 1));
		b = Math.floor((b * (11 + i)) / (i + 1));
	}
	return a + b - c;
}

console.log(totalIncDec(8));
// console.log(totalIncDec(2));
