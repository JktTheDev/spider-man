const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Clear previous messages
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMsg.textContent = "";

    let isValid = true;

    // Name validation
    if (nameInput.value.trim().length < 3) {
        nameError.textContent = "Name must be at least 3 characters";
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = "Please enter a valid email address";
        isValid = false;
    }

    // Message validation
    if (messageInput.value.trim().length < 10) {
        messageError.textContent = "Message must be at least 10 characters";
        isValid = false;
    }

    // Success
    if (isValid) {
        successMsg.textContent = "✅ Message sent successfully!";
        successMsg.style.color = "#00ff99";

        form.reset();
    }
});
