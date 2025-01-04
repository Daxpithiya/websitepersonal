<script>
    // Hardcoded credentials (use a secure backend in real applications)
    const validUsername = "user";
    const validPassword = "password";

    function login() {
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      const errorMsg = document.getElementById("error-msg");

      if (username === test && password === test) {
        errorMsg.textContent = "";
        // Redirect to the second page
        window.location.href = "notes.html";
      } else {
        errorMsg.textContent = "Invalid username or password.";
      }
    }
  </script>
