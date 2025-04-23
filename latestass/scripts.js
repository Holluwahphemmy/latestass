let newclass = document.getElementsByClassName("neww");
console.log(newclass.innerText);
console.log(newclass);
for (let i = 0; i < newclass.length; i++) {
  const element = newclass[i];
  console.log(element);
  if (element.innerText.includes("here")) {
    element.style.backgroundColor = "blue";
  }


