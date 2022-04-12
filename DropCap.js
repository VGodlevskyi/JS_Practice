function dropCap(n) {
	return n.replace(/[A-z]{3,100}/g, word => {
		return word.replace(/[A-z]/gi, (letter, count) => {
			return count == 0 ? letter[0].toUpperCase() : letter.toLowerCase();
		});
	});
}

console.log(dropCap('jj JJ CaPs CrAzInEsS'));
