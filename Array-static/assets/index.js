//Static methods
//Array.from()
generate.onclick = (event) => {
    var start = parseInt(document.getElementById('start').value);
    var stop = parseInt(document.getElementById('stop').value);
    var step = parseInt(document.getElementById('step').value);
    console.log(range(start,stop,step));
    document.getElementById('output').textContent = range(start,stop,step);
}
var set = new Set([1,2,3,4,5,6,7,8,9,5,10]);
var map = new Map([[1,'Suriya'],[2,'Tharun'],[3,'Dinesh'],[4,'Arun']]);
var array = [1,2,3,4,5];
var divElement = document.getElementsByTagName('div');
console.log(Array.from('Venktesan'));
console.log(Array.from(set));
console.log(Array.from(map.keys()));
console.log(Array.from(map.values()));
console.log(Array.from(divElement,element=>element.textContent));
console.log(Array.from({length:5},(v,i)=>i));
var range = (start,stop, step) => Array.from({length:(stop-start)/step+1},(v,i)=>start+(step*i));
//Array.isArray()
console.log(Array.isArray([]));
console.log(Array.isArray([1]));
console.log(Array.isArray(new Array()));
console.log(Array.isArray(new Array('V','e', 'n', 'k', 'y')));
console.log(Array.isArray(new Array(6)));
console.log(Array.isArray());
console.log(Array.isArray({}));
console.log(Array.isArray(null));
console.log(Array.isArray(undefined));
console.log(Array.isArray(17));
console.log(Array.isArray('Venkatesan'));
console.log(Array.isArray(true));
console.log(Array.isArray(false));
console.log(Array.isArray(new Uint8Array()));
const iframe = document.createElement('iframe');
document.body.appendChild(iframe);
xArray = window.frames[window.frames.length-1].Array;
const arr = new xArray(1,2,3);
console.log(Array.isArray(arr));
console.log(arr instanceof Array);
//Array.of
console.log(Array.of(1));
console.log(Array.of(1,2,3));
console.log(Array.of(undefined));
//Static properties
//Array.prototype.length
if(array.length > 3)
    array.length = 3;
console.log(array);