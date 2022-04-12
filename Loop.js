function pickIt(array) {
	var odd = [],
		even = [];

	for (let index = 0; index < array.length; index++) {
		const element = array[index];
		element % 2 == 0 ? even.push(element) : odd.push(element);
	}
	return [odd, even];
}
console.log(pickIt([8, 1, 5, 4, 6, 1, 1]));
