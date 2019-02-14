let main = document.querySelector('#main');
let ul = main.querySelector("ul");
let h1 = document.querySelector("header h1");
let foot = document.querySelector("#foot p");

main.className = "some abc";
main.id = "main";
main.title = "mouseover text";

foot.style.backgroundColor = "salmon";

foot.classList.add("some");
foot.classList.remove("other");
foot.classList.toggle("other");

let style = window.getComputedStyle(ul);
console.log(style.length);
console.log(style.item(200));
console.log(style.getPropertyValue('color'));