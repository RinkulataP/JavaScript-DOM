let ul = document.querySelector('.main ul');
let lis = ul.children;
let AN = lis[5];
let newNode = document.createElement("li");
newNode.textContent = "The Sixth Sense";

ul.insertBefore(newNode, AN);

let jp = document.createElement("li");
jp.textContent = "Jurassic Park";
ul.replaceChild(jp, lis[5]);

let f = ul.cloneNode(false);
let t = ul.cloneNode(true);
console.log(f);
console.log(t);