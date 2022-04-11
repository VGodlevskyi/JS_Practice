// function firstNonRepeatingLetter(s) {
// 	// Add your code here
// 	let arr = s.split('');
// 	let res = '';
// 	arr.forEach(element => {
// 		let count = arr.filter(item => item.toLowerCase() === element.toLowerCase()).length;
// 		if (count === 1) {
// 			res == '' ? (res = element) : res;
// 			return element;
// 		}
// 	});

// 	return res;
// }

function firstNonRepeatingLetter(str) {
	return str.split('').find(e => str.match(new RegExp(`${e}`, 'gi')).length === 1) || '';
}

console.log(firstNonRepeatingLetter('sWress'));
