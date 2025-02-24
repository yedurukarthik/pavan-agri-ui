document.addEventListener("DOMContentLoaded", function () {
    console.log("Pavan Agri Solutions Loaded");

    // Login Logic
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const errorMsg = document.getElementById("errorMsg");

            // Hardcoded Login (Replace with backend API in future)
            if (username === "admin" && password === "password123") {
                localStorage.setItem("isLoggedIn", "true");
                window.location.href = "index.html"; // Redirect to Dashboard
            } else {
                errorMsg.textContent = "Invalid username or password!";
            }
        });
    }

    // Redirect if user is not logged in (For all pages except login)
    if (!window.location.href.includes("login.html")) {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        if (!isLoggedIn) {
            window.location.href = "login.html";
        }
    }
});
