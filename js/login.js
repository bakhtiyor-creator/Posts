const loginForm = document.querySelector("#login-form");
const username = document.querySelector("#username");
const passwords = document.querySelector("#password");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  request
    .post("auth/login", {
      username: username.value,
      password: passwords.value,
    })
    .then((res) => {
      console.log(res);
      localStorage.setItem(TOKEN, res.data.token);
      window.location.href = "/mypost.html";
    });
});
