document.addEventListener("DOMContentLoaded", function () {
    console.log("Pavan Agri Solutions Loaded");

    // Redirect if already logged in
    if (localStorage.getItem("isLoggedIn") && window.location.pathname.includes("login.html")) {
        window.location.href = "index.html";
    }

    // Login Functionality
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const errorMessage = document.getElementById("errorMessage");

            // Default credentials (You can replace these with actual database authentication later)
            if (username === "admin" && password === "admin123") {
                localStorage.setItem("isLoggedIn", "true");
                window.location.href = "index.html"; // Redirect to dashboard
            } else {
                errorMessage.textContent = "Invalid username or password!";
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

    // Redirect users to login page if not logged in
    if (!localStorage.getItem("isLoggedIn") && !window.location.pathname.includes("login.html")) {
        window.location.href = "login.html";
    }
});
