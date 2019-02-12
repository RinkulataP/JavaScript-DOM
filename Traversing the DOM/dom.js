let main = document.querySelector('.main');

// let c = main.children;
// let c2 = main.childNodes;
// // console.log(c.length);
// // console.log(c2.length);


// let ul = main.children[1];
// let h2 = main.firstElementChild;
// let ul2 = h2.nextElementSibling;
// console.log(ul2);
// let h2a = ul2.previousElementSibling;
// console.log(h2a);

let ul = main.children[1];
let lis = ul.children;
let firstLi = lis[0]; //ul.firstElementChild

var txt = firstLi.textContent;
var txt2 = firstLi.firstChild.nodeValue;
console.log(txt, txt2);

firstLi.firstChild.nodeValue = txt.toUpperCase();