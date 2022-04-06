// - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
let content = document.getElementById('content')
console.log(content);


// -- отримує текст з блоку з id "rules"
let rules = document.getElementById('rules')
console.log(rules);
// -- замініть текст параграфа з id 'content' на будь-який інший
content.innerHTML = 'blablabla';
// -- замініть текст параграфа з id 'rules' на будь-який інший
rules.innerHTML = 'no rules'
// -- змініть кожному елементу колір фону на червоний
let allElements = document.body.children;
for (let element of allElements) {
    element.style.backgroundColor = 'red';
}
// -- змініть кожному елементу колір тексту на синій
for (let element of allElements) {
    element.style.color = 'blue';}
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(rules.classList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let fcRules = document.getElementsByClassName('fc_rules');
for (let fcRule of fcRules) {
    fcRule.style.color = 'red';
}