function validateForm() {
    // Get form elements
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    // Basic validation
    if (name === "") {
        alert("Please enter your name.");
        return false;
    } else if (email === "") {
        alert("Please enter your email address.");
        return false;
    } else if (phone === "") {
        alert("Please enter your phone number.");
        return false;
    } else if (date === "") {
        alert("Please select a date.");
        return false;
    } else if (time === "") {
        alert("Please select a time.");
        return false;
    } else if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    } else if (!validatePhone(phone)) {
        alert("Please enter a valid phone number.");
        return false;
    }

    // Additional validation (e.g., date and time availability)
    // ...

    return true;
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    // Adjust the regex according to your specific phone number format
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
}