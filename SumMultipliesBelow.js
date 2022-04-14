function solution(number) {
	if (number <= 3) return 0;
	let count = 0;
	for (let index = 3; index < number; index++) {
		if (index % 3 === 0 || index % 5 === 0) count = count + index;
	}
	return count;
}

console.log(solution(10));
