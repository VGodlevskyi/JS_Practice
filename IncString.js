// function incrementString(strng) {
// 	// return incrementedString
// 	let strOfString = strng
// 		.split('')
// 		.reduce((prev, cur) => (isNaN(cur) ? String(prev) + String(cur) : prev), '');

// 	let numberOfString = strng
// 		.split('')
// 		.reduce((prev, cur) => (!isNaN(cur) ? String(prev) + String(cur) : prev), '');

// 	let partNulls = numberOfString
// 		.split('')
// 		.filter(item => item == 0)
// 		.join('');

// 	let partNumbers = numberOfString
// 		.split('')
// 		.filter(item => item != 0)
// 		.join('');

// 	return String(+partNumbers).length == String(+partNumbers + 1).length && +partNumbers !== 0
// 		? strOfString + partNulls + (+partNumbers + 1)
// 		: strOfString + partNulls.slice(1) + (+partNumbers + 1);
// }

function incrementString2(input) {
	return input.replace(/([0-8]?)(9*)$/, function (s, d, ns) {
		return +d + 1 + ns.replace(/9/g, '0');
	});
}

let incrementString = str => str.replace(/([0-8]|\d?9+)?$/, e => (e ? +e + 1 : 1));

console.log(incrementString('foobar0099'));
