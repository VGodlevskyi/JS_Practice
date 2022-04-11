function alphanumeric(string) {
	console.log(string);
	if (string.indexOf('_') > -1) return false;
	let a = string.match(/([A-z]|[0-9])/g) ? string.match(/([A-z]|[0-9])/g).length : 0;
	let b = !!string.replace(/\s/g, '') ? string.length : 1;
	return a == b;
}

// function alphanumeric(string) {
// 	return /^[0-9a-z]+$/i.test(string);
// }

console.log(alphanumeric('&)))((('));
