document.addEventListener("DOMContentLoaded", function () {
    console.log("Login System Loaded!");

    // Check if already logged in
    if (localStorage.getItem("isLoggedIn") === "true" && window.location.pathname.includes("login.html")) {
        window.location.href = "index.html"; // Redirect if already logged in
    }

    // Login Functionality
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            console.log("Login button clicked!"); // Debugging Log

            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();
            const errorMessage = document.getElementById("errorMessage");

            if (username === "admin" && password === "admin123") {
                localStorage.setItem("isLoggedIn", "true");
                window.location.href = "index.html"; // Redirect to dashboard
            } else {
                errorMessage.textContent = "❌ Invalid username or password!";
            }
        });
    }

    // Logout functionality
    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            localStorage.removeItem("isLoggedIn");
            window.location.href = "login.html";
        });
    }

    // Redirect to login if not logged in
    if (!localStorage.getItem("isLoggedIn") && !window.location.pathname.includes("login.html")) {
        window.location.href = "login.html";
    }
});
