const elForm = document.querySelector("form");
const elInput = document.querySelector("#input");
const elBtn = document.querySelector("#btn");
const elCircles = document.querySelector(".circle__left");
const elRight = document.querySelector(".circle__right");

elForm.addEventListener("submit", function (e) {
  e.preventDefault();

  if (elInput.value < 10) {
    elCircles.style.border = "1px solid red";
    elRight.style.border = "none";
  } else if (elInput.value > 9 && elInput.value < 99) {
    elCircles.style.border = "none";
    elRight.style.border = "1px solid red";
  } else if (elInput > 99) {
    alert("son kiriting");
  }
});
