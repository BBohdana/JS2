//1
let numbers = [11, 12, 13, 14, 15];
console.log(numbers);
let string = ["name", "age", "work", "status", "position"];
console.log(string);
let all = ["cake", "star", 5,7, 5>3];
console.log(all);

//2
let array = [];
array[0] = 'day';
array[1] = 'week';
array[2] = 'month';
console.log(array);

//3
for (let i = 0; i < 10; i++) {
    document.write(`<div>donut ${i}</div>`);
}
let i  = 0;
while (i < 20) {
    document.write('<h1>item</h1>');
    i++
}
let k  = 0;
while (k < 20) {
    document.write(`<h1>item ${k}</h1>`);
    k++
}
//4

let arr = [25, 45,454, 23, 56, 78, 45, 34,45,33];
for (let i = 0; i <=9; i++) {
    document.write(arr[i]);
}
let stringarr = ['tom', 'jerry', 'code', 'like', 'love', 'john', 'winter', 'snow', 'cold', 'wind']
for (let i = 0; i<=9; i++) {
    document.write(stringarr[i]);
}

let alltypearray = ['tom', 'jerry', 'code', 'like', 33, 44, 55555, 8===8, 9>12, 9!==1]
for (let i = 0; i < 9; i++) {
    document.write(alltypearray[i]);
}

let bool = ['tom', 'jerry', 'code', 'like', 33, 44, 55555, 8===8, 9>12, 9!==1]
for (let i= 0; i < bool.length; i++)  {
    if (typeof bool[i] === 'boolean') {
        document.write(bool[i]);
    }
}

let num = ['tom', 'jerry', 'code', 'like', 33, 44, 55555, 8===8, 9>12, 9!==1];
for (let i = 0; i< num.length; i++) {
    if (typeof num[i] === 'number') {
        document.write(num[i]);
    }
}
let str = ['tom', 'jerry', 'code', 'like', 33, 44, 55555, 8===8, 9>12, 9!==1];
for (let i = 0; i<= str.length; i++) {
    if (typeof str[i] === 'string') {
        document.write(str[i]);
    }
}

//5
let emptyarrray = [];
emptyarrray[0] = 'tom';
emptyarrray[1] = 'jerry';
emptyarrray[2] = 'code';
emptyarrray[3] = 'like';
emptyarrray[4] = 33;
emptyarrray[5] = 44;
emptyarrray[6] = 67;
emptyarrray[7] = 34;
emptyarrray[8] = 8===8;
emptyarrray[9] = 9!==1;

for (let i = 0; i<=emptyarrray.length; i++) {
    document.write(emptyarrray[i]);
}
for (let i = 0; i < 10; i++) {
    console.log(`item${i}`)
    document.write(`item${i}`)
}
for (let i = 0; i<100; i++ ) {
    console.log(`item${i}`)
    document.write(`ìtem${i}`)
}
for (let i = 0; i < 100; i+=2) {
    console.log(`item${i}`)
    document.write(`ìtem${i}`)
}
for (let i = 1; i < 100; i+=2) {
    console.log(`item${i}`)
    document.write(`ìtem${i}`)
}