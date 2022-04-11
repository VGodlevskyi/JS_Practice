function isPangram(string) {
	let pangramSymbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let res = true;
	let arrPangr = pangramSymbols.split('');
	arrPangr.map(item => {
		if (!string.includes(item) && !string.includes(item.toLowerCase())) {
			res = false;
		}
	});
	return res;
}

console.log(isPangram('The quiox jumps over the lazy dog.'));
