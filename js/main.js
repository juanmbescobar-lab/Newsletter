// DON'T remove the below import
//import "./styles.css";
window.onload = function () {
  const form = document.getElementById("form_valid");
  const emailInput = document.getElementById("email");
  const message = document.getElementById("message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isValidEmail) {
      message.textContent = "Please enter a valid email address.";
      message.className = "error";
      return;
    }

    message.textContent = "Thank you for subscribing!";
    message.className = "success";
  });
};
