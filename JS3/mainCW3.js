let array = [2,17,13,6,22,31,45,66,100,-18];
i = 0;
while (i < array.length) {
    document.write(array[i]);
    i++
}
let array2 = [2,17,13,6,22,31,45,66,100,-18];
for (let i = 0; i < array.length; i++) {
    document.write(array2[i]);
}
let array3 = [2,17,13,6,22,31,45,66,100,-18];
i = 0;
while (i < array3.length) {
    document.write(array3[i]);
    i+=2
}
let array4 = [2,17,13,6,22,31,45,66,100,-18];
for (let i = 0; i < array4.length; i+=2) {
    console.log(array4[i]);
}
let array5 = [2,17,13,6,22,31,45,66,100,-18];
i = 1;
while (i < array5.length) {
    document.write(array5[i]);
    i+=2
}


let array6 = [2,17,13,6,22,31,45,66,100,-18];
for (let i = 1; i < array6.length; i+=2) {
    console.log(array6[i]);
}

let array7 = [2,17,13,6,22,31,45,66,100,-18];
for (let i=0; i< array7.length; i++) {
    if (array7[i] % 3 ===0) {
        array7[i] = 'okten';
        document.write(array7[i]);
    }
}
document.write(array7);

//8
let array8 = [2,17,13,6,22,31,45,66,100,-18];
for (let i=array8.length-1; i>=0; i--) {
    document.write(array8[i]);
}
//9
// 1 зворотній
let array9 = [2,17,13,6,22,31,45,66,100,-18];
i = array9.length-1;
while (i >=0) {
    console.log(array9[i]);
    i--
}
// 2 зворотній в завданні 8
// 3 зворотній
let array10 = [2,17,13,6,22,31,45,66,100,-18];
i = array10.length-1;
while (i >=0) {
    console.log(array10[i]);
    i-=2
}
// 4 зворотній
let array11 = [2,17,13,6,22,31,45,66,100,-18];
for (let i = array11.length-1; i>=0; i-=2) {
    document.write(array11[i])
}
// 5 зворотній
let array12 = [2,17,13,6,22,31,45,66,100,-18];
i = array12.length-2;
while (i>=0) {
    console.log(array12[i]);
    i-=2
}

// 6 зворотній
let array13 = [2,17,13,6,22,31,45,66,100,-18];
for (let i =array13.length-2; i>=0; i-=2) {
    console.log(array13[i]);
}

// 7 зворотній
let array14 = [2,17,13,6,22,31,45,66,100,-18];
for (let i=array14.length-1; i>=0; i--) {
    if (array14[i] % 3 === 0) {
        array14[i] = 'okten';
        console.log(array14[i]);
    }
}
console.log(array14);

