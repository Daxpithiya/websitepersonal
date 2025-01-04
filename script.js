// Hardcoded credentials (use a secure backend in real applications)
const validUsername = "test";
const validPassword = "test";

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("error-msg");

  if (username === validUsername && password === validPassword) {
    errorMsg.textContent = "";
    // Redirect to the second page
    window.location.href = "https://www.google.co.in";
  } else {
    errorMsg.textContent = "Invalid username or password.";
  }
}
