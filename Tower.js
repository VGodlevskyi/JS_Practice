function towerBuilder(nFloors) {
	// build here
	let array = [];
	let str = [];
	for (let index = 1; index < nFloors * 2; index++) {
		str.push('*');
	}
	array.push(str.join(''));

	for (let index = 0; index < nFloors - 1; index++) {
		str[index] = ' ';
		str[nFloors * 2 - 2 - index] = ' ';
		array.unshift(str.join(''));
	}
	console.log(array);
	return array;
}

console.log(towerBuilder(6));
