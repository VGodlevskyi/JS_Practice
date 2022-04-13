// var isPP = function (checking) {
// 	var current = 2,
// 		power = 2,
// 		max = Math.floor(checking / 2);

// 	while (current <= max) {
// 		power = 2;
// 		while (Math.pow(current, power) <= checking) {
// 			if (checking === Math.pow(current, power)) {
// 				return [current, power];
// 			} else {
// 				power += 1;
// 			}
// 		}
// 		current += 1;
// 	}

// 	return null;
// };

function isPP(n) {
	for (var m = 2; m * m <= n; ++m)
		for (var k = 2; Math.pow(m, k) <= n; ++k) if (Math.pow(m, k) == n) return [m, k];
	return null;
}

console.log(isPP(27));
