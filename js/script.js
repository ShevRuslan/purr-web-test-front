const buttonAcceptCookie = document.querySelector(".cookie__accept-button");
const cookieBlock = document.querySelector(".wrapper-cookie");

buttonAcceptCookie.addEventListener("click", () => {
  cookieBlock.style.opacity = 0;
  setTimeout(() => {
    cookieBlock.remove();
  }, 500);
});

const buttonSend = document.querySelector(".get-in-touch-form__button");
const inputs = document.querySelectorAll(".get-in-touch-form__input");

buttonSend.addEventListener("click", (e) => {
  e.preventDefault();
  inputs.forEach((input) => {
    if (input.value.trim() == "") {
      input.style.borderColor = "#FF0000";
    }
  });
});
