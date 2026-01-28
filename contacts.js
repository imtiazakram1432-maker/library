document.getElementById("membershipForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const category = document.getElementById("category").value;
    const duration = document.getElementById("duration").value;

    // error elements
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const passwordError = document.getElementById("passwordError");
    const categoryError = document.getElementById("categoryError");
    const durationError = document.getElementById("durationError");

    // clear old errors
    emailError.textContent = "";
    phoneError.textContent = "";
    passwordError.textContent = "";
    categoryError.textContent = "";
    durationError.textContent = "";

    let valid = true;

    // Email validation
    if (!email) {
        emailError.textContent = "Email is required";
        valid = false;
    } else if (!email.includes("@")) {
        emailError.textContent = "Enter a valid email";
        valid = false;
    }

    // Phone validation
    if (!phone) {
        phoneError.textContent = "Phone number is required";
        valid = false;
    } else if (!/^\d{10,}$/.test(phone)) {
        phoneError.textContent = "At least 10 digits required";
        valid = false;
    }

    // Password validation
    if (!password) {
        passwordError.textContent = "Password is required";
        valid = false;
    } else if (password.length < 6) {
        passwordError.textContent = "Minimum 6 characters";
        valid = false;
    }

    // Category
    if (!category) {
        categoryError.textContent = "Select a category";
        valid = false;
    }

    // Duration
    if (!duration) {
        durationError.textContent = "Select duration";
        valid = false;
    }

    // Success
    if (valid) {
        alert("Registration Successful!");
        this.reset();
        window.location.href = "personal  details.html";
    }
});
