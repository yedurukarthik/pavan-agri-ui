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

    // Load saved farm data
    loadSavedFarms();

    // Add farm functionality
    const addFarmForm = document.getElementById("addFarmForm");
    if (addFarmForm) {
        addFarmForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const farmName = document.getElementById("farmName").value;
            const ownerName = document.getElementById("ownerName").value;
            const location = document.getElementById("location").value;
            const area = document.getElementById("area").value;
            const syNo = document.getElementById("syNo").value;

            let farms = JSON.parse(localStorage.getItem("farms")) || [];
            farms.push({ farmName, ownerName, location, area, syNo });

            localStorage.setItem("farms", JSON.stringify(farms));
            loadSavedFarms();
        });
    }
});

// Load saved farms from localStorage
function loadSavedFarms() {
    const farmTable = document.getElementById("farmTableBody");
    if (!farmTable) return;

    farmTable.innerHTML = ""; // Clear old content
    let farms = JSON.parse(localStorage.getItem("farms")) || [];

    farms.forEach((farm, index) => {
        let row = `<tr>
            <td>${farm.farmName}</td>
            <td>${farm.ownerName}</td>
            <td>${farm.location}</td>
            <td>${farm.area}</td>
            <td>${farm.syNo}</td>
            <td><a href="https://meebhoomi.ap.gov.in/" target="_blank">AP Meebhoomi</a></td>
            <td><button onclick="deleteFarm(${index})">Delete</button></td>
        </tr>`;
        farmTable.innerHTML += row;
    });
}

// Delete farm
function deleteFarm(index) {
    let farms = JSON.parse(localStorage.getItem("farms")) || [];
    farms.splice(index, 1);
    localStorage.setItem("farms", JSON.stringify(farms));
    loadSavedFarms();
}
