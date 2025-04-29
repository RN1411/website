function validateLogin() {
    const username = document.getElementById('loginUser').value.trim();
    const password = document.getElementById('loginPass').value.trim();
    const usernameError = document.getElementById('username-error');
    const passwordError = document.getElementById('password-error');
    
    // Reset error messages
    usernameError.style.display = 'none';
    passwordError.style.display = 'none';
    
    let isValid = true;
    
    if (!username) {
      usernameError.style.display = 'block';
      isValid = false;
    }
    
    if (!password) {
      passwordError.style.display = 'block';
      isValid = false;
    }
    
    if (isValid) {
      login();
    }
  }

  function login() {
    const username = document.getElementById('loginUser').value;
    const password = document.getElementById('loginPass').value;
    
    // Check if user exists in localStorage
    if (localStorage.getItem(username) === password) {
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("currentUser", username);
      window.location.href = "index.html";
    } else {
      alert("Invalid username or password. Please try again.");
    }
  }

  // Allow pressing Enter to submit
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('loginPass').addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        validateLogin();
      }
    });
  });