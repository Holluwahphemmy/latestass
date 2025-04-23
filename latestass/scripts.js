// let newclass = document.getElementsByClassName("neww");
// console.log(newclass.innerText);
// console.log(newclass);
// for (let i = 0; i < newclass.length; i++) {
//   const element = newclass[i];
//   console.log(element);
//   if (element.innerText.includes("here")) {
//     element.style.backgroundColor = "blue";
//   }
// }
let val = document.querySelector("ul");
console.log(val.childNodes)
console.log(val.children)
console.log(val.firstChild)
console.log(val.lastChild)



let ul = document.createElement("ul");
let li = document.createElement("li");
let text = document.createTextNode("This is Femi");
li.appendChild(text);
ul.appendChild(li);

document.body.appendChild(ul);


