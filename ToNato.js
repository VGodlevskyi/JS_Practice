const NATO = {
	a: 'Alfa',
	n: 'November',
	b: 'Bravo',
	o: 'Oscar',
	c: 'Charlie',
	p: 'Papa',
	d: 'Delta',
	q: 'Quebec',
	e: 'Echo',
	r: 'Romeo',
	f: 'Foxtrot',
	s: 'Sierra',
	g: 'Golf',
	t: 'Tango',
	h: 'Hotel',
	u: 'Uniform',
	i: 'India',
	v: 'Victor',
	j: 'Juliett',
	w: 'Whiskey',
	k: 'Kilo',
	x: 'Xray',
	l: 'Lima',
	y: 'Yankee',
	m: 'Mike',
	z: 'Zulu',
};

// function to_nato(words) {
// 	let resString = '';
// 	words.split(' ').map(word => {
// 		arrLetters = word.split('');
// 		arrLetters.forEach(letter => {
// 			if (NATO.hasOwnProperty(letter.toLowerCase())) {
// 				resString = resString.concat(NATO[letter.toLowerCase()]);
// 			} else resString = resString.concat(letter);
// 			resString = resString + ' ';
// 		});
// 	});
// 	return resString.slice(0, -1);
// }

function to_nato(words) {
	return words
		.replace(/\s/g, '')
		.toLowerCase()
		.split('')
		.map(e => (NATO[e] ? NATO[e] : e))
		.join(' ');
}

console.log(to_nato('If you can read'));
// "India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta");
