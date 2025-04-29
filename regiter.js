    // Password strength indicator
    document.getElementById('regPassword').addEventListener('input', function() {
        const password = this.value;
        const strengthMeter = document.getElementById('strength-meter');
        let strength = 0;
        
        // Check password length
        if (password.length >= 8) strength += 1;
        if (password.length >= 12) strength += 1;
        
        // Check for mixed case
        if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength += 1;
        
        // Check for numbers
        if (/\d/.test(password)) strength += 1;
        
        // Check for special chars
        if (/[^a-zA-Z0-9]/.test(password)) strength += 1;
        
        // Update strength meter
        const width = strength * 20;
        strengthMeter.style.width = width + '%';
        
        // Change color based on strength
        if (strength <= 1) {
          strengthMeter.style.background = '#ff6b6b';
        } else if (strength <= 3) {
          strengthMeter.style.background = '#ffb347';
        } else {
          strengthMeter.style.background = '#4caf50';
        }
      });
  
      function validateRegistration() {
        const username = document.getElementById('regUsername').value.trim();
        const email = document.getElementById('regEmail').value.trim();
        const password = document.getElementById('regPassword').value;
        const confirmPassword = document.getElementById('regConfirmPassword').value;
        
        // Reset error messages
        document.querySelectorAll('.error-message').forEach(el => {
          el.style.display = 'none';
        });
        
        let isValid = true;
        
        // Validate username
        if (username.length < 4) {
          document.getElementById('username-error').style.display = 'block';
          isValid = false;
        }
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          document.getElementById('email-error').style.display = 'block';
          isValid = false;
        }
        
        // Validate password
        if (password.length < 8) {
          document.getElementById('password-error').style.display = 'block';
          isValid = false;
        }
        
        // Validate password match
        if (password !== confirmPassword) {
          document.getElementById('confirm-error').style.display = 'block';
          isValid = false;
        }
        
        if (isValid) {
          registerUser(username, email, password);
        }
      }
  
      function registerUser(username, email, password) {
        // Check if username already exists
        if (localStorage.getItem(username)) {
          alert('Username already exists. Please choose another.');
          return;
        }
        
        // Store user data (in a real app, this would be server-side)
        localStorage.setItem(username, password);
        localStorage.setItem(`${username}_email`, email);
        
        // Show success message
        const successMessage = document.getElementById('success-message');
        successMessage.style.display = 'block';
        
        // Redirect to login after 2 seconds
        setTimeout(() => {
          window.location.href = 'login.html';
        }, 2000);
      }
  
      // Allow pressing Enter to submit
      document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('regConfirmPassword').addEventListener('keypress', (e) => {
          if (e.key === 'Enter') {
            validateRegistration();
          }
        });
      });
