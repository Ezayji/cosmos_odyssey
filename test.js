// recieved valid until
const value = '2021-04-15T05:54:41.402885Z'
const value2 = '2021-04-15T06:12:09.676682Z'

const d = new Date(value);
const d2 = new Date(value2);

console.log('Value 1\n');
console.log(d.toString());
console.log(d.toLocaleTimeString());
console.log(d.valueOf());
console.log(Date.now());

console.log('Value 2')
console.log(d2.toString());
console.log(d2.toLocaleDateString());
console.log(d2.toLocaleTimeString());
console.log(d2.valueOf());

console.log(new Date(1619071581627).toLocaleString())