const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const example = document.querySelector(".logo");

let code = example.innerHTML;
code = code + "international";
console.log(code);

burger.addEventListener("click", function () {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});
