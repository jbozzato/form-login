var form = document.querySelector("#app");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  var email = event.target.email.value;
  var senha = event.target.senha.value;
  alert(`Email: ${email}, Senha: ${senha}`);
});
