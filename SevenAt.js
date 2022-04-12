// function sevenAte9(str) {
// 	return str.replace(/79/g, (item, count) => {
// 		return str[count + 2] == 7 ? 7 : item;
// 	});
// }

sevenAte9 = str => str.replace(/79(?=7)/g, '7');

console.log(sevenAte9('7979797'));
