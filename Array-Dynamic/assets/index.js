//Array.prototype.at()
const cart = ['mobile','laptop','tab','earphones'];
function returnFirst(array)
{
    return array.at(0);
}
function returnLast(array)
{
    return array.at(-1);
}
console.log(returnFirst(cart),returnLast(cart));
//Array.prototype.concat()
var letters = ['a','b','c'];
var numbers = [1,2,3];
var alphaNumeric = letters.concat(numbers);
console.log(alphaNumeric);
//Array.prototype.copyWithin()
console.log([1,2,3,4,5].copyWithin(-2));
console.log([1,2,3,4,5].copyWithin(0,3));
console.log([1,2,3,4,5].copyWithin(0,3,4));
//Array.prototype.entries()
const iterator = alphaNumeric.entries();
console.log(iterator.next().value);
console.log(iterator.next().value);
for(element of iterator)
    console.log(element);
//Array.prototype.every()
function isBig(element, index, array)
{
    return element >= 10;
}
console.log([9,20,30,40,50,60,70,80,90,100].every(isBig));
console.log([20,30,40,50,60,70,80,90,100].every(isBig));
var array1 = [1,2,3,4,5];
//Array.prototype.fill()
console.log(array1.fill(6));
console.log(array1.fill(5,1));
console.log(array1.fill(4,2,4));
//Array.prototype.filter()
console.log(array1.filter(number => number%2==0));
//Array.prototype.find()
console.log(array1.find(number => number%2==0));
//Array.prototype.findIndex()
console.log(array1.findIndex(number => number%2==0));
//Array.prototype.flat()
var array2 = [1,2,[3,4]];
console.log(array2.flat());
//Array.prototype.flatMap()
var array3 = [1,2,3,4];
console.log(array3.flatMap(x => [x,x*2]));
//Array.prototype.includes()
console.log(array3.includes(4));
//Array.prototype.join()
console.log(array3.join(','));
//Array.forEach()
array3.forEach(element => console.log(element));
//Array.indexOf()
console.log(array3.indexOf(4));
//Array.prototype.pop()
console.log(array3.pop());
console.log(array3);
//Array.push()
console.log(array3.push(5));
console.log(array3);
//Array.prototype.reduce()
console.log(array3.reduce((p,c)=>p*c,1));
//Array.prototype.map()
console.log(array3.map(element => element+1));
//Array.prototype.reverse()
console.log(array3.reverse());
//Array.prototype.shift()
console.log(array3.shift());
//Array.prototype.splice()
console.log(2,4);
//Array.prototype.toString()
console.log(array3.toString());
//Array.prototype.toLocaleString()
var array4 = [1,'venky',new Date()];
console.log(array4.toString());
console.log(array4.toLocaleString());
//Array.prototype.some()
console.log(array3.some((e)=>e%2==0));
//Array.prototype.unshift()
console.log(array3.unshift(6,7,8,9,20));
console.log(array3);