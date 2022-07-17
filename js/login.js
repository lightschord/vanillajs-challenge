const loginForm = document.querySelector("#login-form");
const loginFormInput = document.querySelector("#login-form input:first-child");
const loginMsg = document.querySelector("#login-container h1");

function updateLoginStatus() {
  const loginName = localStorage.getItem("loginName");
  if(loginName === null)
  {
    loginForm.classList.remove("hidden");
    loginMsg.innerText = ``;
  }
  else
  {
    loginForm.classList.add("hidden");
    loginMsg.innerText = `user name : ${loginName}`;
  }    
}

updateLoginStatus();

function handleSubmit(event) {
  event.preventDefault();
  localStorage.setItem("loginName", loginFormInput.value);
  updateLoginStatus();
}
loginForm.addEventListener("submit", handleSubmit);

