let foot = document.getElementById("foot");
let p = document.getElementById("para");
p.textContent = "First Paragraph";

let p2 = document.querySelector(".main p.some");
p2.textContent = "Second Paragraph";

let ps = document.querySelectorAll(".main p");
for(var i =0, num=ps.length; i<num; i++){
    ps[i].textContent += " LOOPED";
}