document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      alert(`You clicked on ${this.innerText}`);
    });
  });

  const forgotBtn = document.querySelector(".forgot-btn");
  if (forgotBtn) {
    forgotBtn.addEventListener("click", function () {
      alert("Forgot Password clicked!");
    });
  }
});
