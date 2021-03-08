const buttonHide = document.querySelector(".button-hide");
const elementHide = document.querySelector(".element-hide");

const pressed = [];
const secretCode = "alex";

window.addEventListener("keyup", (event) => {
  pressed.push(event.key);

  // if (pressed.length > secretCode.length) pressed.splice(0, 1);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

  if (pressed.join("") === secretCode) cornify_add();
});

buttonHide.addEventListener("click", toggleHint);

function toggleHint() {
  elementHide.classList.contains("hidden")
    ? elementHide.classList.remove("hidden")
    : elementHide.classList.add("hidden");
}
