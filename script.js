document.addEventListener("DOMContentLoaded", function () {
  const signupBtn = document.querySelector(".signup-btn"); // Select Sign Up button
  if (signupBtn) {
    signupBtn.addEventListener("click", function () {
      window.location.href = "signup.html"; // Redirect to signup page
    });
  }

  const forgotBtn = document.querySelector(".forgot-btn");
  if (forgotBtn) {
    forgotBtn.addEventListener("click", function () {
      window.location.href = "forgot-password.html"; // Redirect to forgot password page
    });
  }
});
