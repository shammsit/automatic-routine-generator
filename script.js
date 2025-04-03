document.addEventListener("DOMContentLoaded", function () {
  // Handle Sign Up button click
  const signupBtn = document.querySelector(".signup-btn");
  if (signupBtn) {
    signupBtn.addEventListener("click", function () {
      window.location.href = "signup.html"; // Redirect to Sign Up page
    });
  }

  // Handle Login button click
  const goToLoginBtn = document.querySelector(".login-btn");
  if (goToLoginBtn) {
    goToLoginBtn.addEventListener("click", function () {
      console.log("Go to Log IN button clicked"); // Debugging log
      window.location.href = "login.html";
    });
  }

  // Handle Forgot Password button click
  const forgotBtn = document.querySelector(".forgot-btn");
  if (forgotBtn) {
    forgotBtn.addEventListener("click", function () {
      window.location.href = "forgot-password.html"; // Redirect to Forgot Password page
    });
  }
});
