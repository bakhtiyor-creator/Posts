const loginForm = document.getElementById("login-form");
const firstName = document.querySelector("#FirsName");
const lastName = document.querySelector("#LName");
const username = document.querySelector("#username");
const password = document.querySelector("#password");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  request
    .post("auth/register", {
      first_name: firstName.value,
      last_name: lastName.value,
      username: username.value,
      password: password.value,
    })
    .then((res) => {
      console.log(res);
      window.location.href = '/login.html'
    });
});
