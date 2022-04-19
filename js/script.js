const buttonAcceptCookie = document.querySelector(".cookie__accept-button");
const cookieBlock = document.querySelector(".wrapper-cookie");

buttonAcceptCookie.addEventListener("click", () => {
  cookieBlock.style.opacity = 0;
  setTimeout(() => {
    cookieBlock.remove();
  }, 500);
});
