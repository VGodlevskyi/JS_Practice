String.prototype.camelCase = function () {
	if (this == ' ') return 'TestCase';
	return this.split(' ')
		.map(item => (item = item.substr(0, 1).toUpperCase() + item.slice(1)))
		.join('');
};

console.log('camel case method'.camelCase(''));
