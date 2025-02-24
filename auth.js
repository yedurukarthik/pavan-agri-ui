document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username === "admin" && password === "admin123") {
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "index.html";
    } else {
        document.getElementById("errorMessage").textContent = "Invalid credentials";
    }
});

document.addEventListener("DOMContentLoaded", function() {
    if (!localStorage.getItem("isLoggedIn")) {
        window.location.href = "login.html";
    }
});
