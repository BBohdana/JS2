// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
let header = document.getElementById('main_header');
header.classList.add('dec-2021');
console.log(header);
// b) робить шириниу елементу ul 400px
let ul = document.getElementsByTagName("ul");
ul[0].style.width = '400px';
console.log(ul);
// c) робить шириниу всіх елементів з класом linkList шириною 50%

let list = document.getElementsByClassName('linkList');
for (let element of list) {
    element.style.width = '50%';
}
console.log(list);
// d) отримує текст який зберігається в елементі з класом listElement2
let element2 = document.getElementsByClassName('listElement2');
for (const element2Element of element2) {
        console.log(element2Element.innerText)

}

// // e) отримує всі елементи li та змінює ім колір фону на сірий
// let li = document.getElementsByTagName('li');
// for (const liElement of li) {
//     liElement.style.background = 'blue';

// }
// f) отримує всі елементи 'a' та додає їм клас anchor
let a = document.getElementsByTagName('a');
for (const aElement of a) {
    aElement.classList.add('anchor');
}
console.log(a);
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
for (const aElement of a) {
    if (aElement.innerText === 'link3'){
        aElement.style.fontSize = '40px';
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (const aElement of a) {
let XXX = aElement.innerText;
aElement.classList.add(`element_${XXX}`)
}
console.log(a);
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let getColor = prompt('enter your color');
let sub = document.getElementsByClassName('sub-header');
for (const subElement of sub) {
    subElement.style.background = getColor;
}

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let textColor = prompt('enter text color');
for (const subElement of sub) {
    if (subElement.innerHTML === 'content 2 segment'){
        subElement.style.color = textColor;
    }
}
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let text = prompt('enter your text');
let content1 = document.getElementsByClassName('content_1');
for (const content1Element of content1) {
    content1Element.innerHTML = text
}
// l) отримати елементи p та змінити їм padding на 20px
let p = document.getElementsByTagName('p');
for (const pElement of p) {
    pElement.style.padding = '20px'
}
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let text2 = document.getElementsByClassName('text2');
for (const text2Element of text2) {
    text2Element.innerHTML = 'dec-2021'
}
console.log(text2);