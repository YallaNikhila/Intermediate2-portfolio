// Dark Mode Toggle
const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

    // Save preference
    localStorage.setItem(
        "darkMode",
        document.body.classList.contains("dark-mode")
    );

});

// Load saved dark mode
window.onload = function() {

    if (localStorage.getItem("darkMode") === "true") {

        document.body.classList.add("dark-mode");

    }

};

// Change About Text
function changeText() {

    const aboutText = document.getElementById("aboutText");

    aboutText.innerHTML =
        "I enjoy creating responsive and interactive websites using HTML, CSS, and JavaScript.";

}

// Form Validation
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    // Input Values
    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("message").value.trim();

    // Error Elements
    const nameError = document.getElementById("nameError");

    const emailError = document.getElementById("emailError");

    const messageError = document.getElementById("messageError");

    const successMessage =
        document.getElementById("successMessage");

    // Reset Errors
    nameError.innerHTML = "";
    emailError.innerHTML = "";
    messageError.innerHTML = "";
    successMessage.innerHTML = "";

    let isValid = true;

    // Name Validation
    if (name === "") {

        nameError.innerHTML =
            "Please enter your name";

        isValid = false;

    }

    // Email Validation
    if (!email.includes("@")) {

        emailError.innerHTML =
            "Please enter valid email";

        isValid = false;

    }

    // Message Validation
    if (message.length < 10) {

        messageError.innerHTML =
            "Message must contain at least 10 characters";

        isValid = false;

    }

    // Success
    if (isValid) {

        successMessage.innerHTML =
            "Message Sent Successfully!";

        form.reset();

    }

});