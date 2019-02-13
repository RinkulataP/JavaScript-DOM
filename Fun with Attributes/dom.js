let main = document.querySelector('.main');
let li = main.querySelector("ul li");

main.setAttribute("title", "my movies");
console.log(li.getAttribute("data-year"));
li.dataset.year = 1998;
console.log(li.dataset.year);