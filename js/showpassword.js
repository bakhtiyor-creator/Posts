const togglePassword = document.querySelector("#togglePassword");
const passwordas = document.querySelector("#password");

togglePassword.addEventListener("click", function () {
  // toggle the type attribute
  const type =
    passwordas.getAttribute("type") === "password" ? "text" : "password";
  passwordas.setAttribute("type", type);

  // toggle the icon
  this.classList.toggle("bi-eye");
});

// prevent form submit
const form = document.querySelector(".form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
});

const togglePassword2 = document.querySelector("#togglePassword2");
const password2 = document.querySelector("#password2");

togglePassword2.addEventListener("click", function () {
  // toggle the type attribute
  const type =
    password2.getAttribute("type") === "password2" ? "text" : "password2";
  password2.setAttribute("type", type);

  // toggle the icon
  this.classList.toggle("bi-eye");
});
