// weirdReverse = a => a.sort(n => 1);

weirdReverse = a => a.map((e, i, a) => a[a.length - 1 - i]);

console.log(weirdReverse([1, 5, 9, 16]));
