document.addEventListener("DOMContentLoaded", function () {
  const signupBtn = document.querySelector(".signup-btn"); // Select Sign Up button
  if (signupBtn) {
    signupBtn.addEventListener("click", function () {
      window.location.href = "signup.html"; // Redirect to signup page
    });
  }

  const goToLoginBtn = document.querySelector(".btn[onclick*='login.html']");
  if (goToLoginBtn) {
    goToLoginBtn.addEventListener("click", function () {
      console.log("Go to Log IN button clicked"); // Debugging log
      window.location.href = "login.html";

  const forgotBtn = document.querySelector(".forgot-btn");
  if (forgotBtn) {
    forgotBtn.addEventListener("click", function () {
      window.location.href = "forgot-password.html"; // Redirect to forgot password page
    });
  }
});
