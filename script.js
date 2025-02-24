document.addEventListener("DOMContentLoaded", function () {
    console.log("System Loaded!");

    // Redirect if not logged in
    if (!localStorage.getItem("isLoggedIn") && !window.location.pathname.includes("login.html")) {
        window.location.href = "login.html";
    }

    // Login Functionality
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            console.log("Login button clicked!");

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

    // Data Handling
    function loadData(key, defaultData) {
        return JSON.parse(localStorage.getItem(key)) || defaultData;
    }

    function saveData(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }

    // Load Farms
    const farmTable = document.getElementById("farmTable");
    if (farmTable) {
        const farms = loadData("farms", [
            { name: "Farm-1", owner: "Pavan", location: "Devathapuram", area: "13.5 Acr", syNo: "120", link: "https://meebhoomi.ap.gov.in/" },
            { name: "Farm-2", owner: "Prasanna", location: "JR Palle", area: "3.5 Acr", syNo: "121", link: "https://meebhoomi.ap.gov.in/" }
        ]);
        farms.forEach(farm => {
            farmTable.innerHTML += `<tr>
                <td>${farm.name}</td>
                <td>${farm.owner}</td>
                <td>${farm.location}</td>
                <td>${farm.area}</td>
                <td>${farm.syNo}</td>
                <td><a href="${farm.link}" target="_blank">AP Meebhoomi</a></td>
            </tr>`;
        });
    }

    // Load Crops
    const cropTable = document.getElementById("cropTable");
    if (cropTable) {
        const crops = loadData("crops", [
            { name: "Lime", density: "100", plants: "350", variety: "Sweet", planted: "2022-03-11", days: "560" }
        ]);
        crops.forEach(crop => {
            cropTable.innerHTML += `<tr>
                <td>${crop.name}</td>
                <td>${crop.density}</td>
                <td>${crop.plants}</td>
                <td>${crop.variety}</td>
                <td>${crop.planted}</td>
                <td>${crop.days}</td>
            </tr>`;
        });
    }

    // Load Resources
    const resourceTable = document.getElementById("resourceTable");
    if (resourceTable) {
        const resources = loadData("resources", [
            { name: "Naresh", location: "Simhadripuram", skill: "Electrician-Motorpump-starter", type: "Service", contact: "90000456789", rating: "Good" },
            { name: "Sana", location: "JR Palle", skill: "Tractor-Plowing-Trolley-Watering-Spraying-Weeding", type: "Daily", contact: "92300456789", rating: "Average" },
            { name: "Seenu", location: "Devathapuram", skill: "Pipeline and Pruning", type: "Daily", contact: "92300456789", rating: "Good" }
        ]);
        resources.forEach(resource => {
            resourceTable.innerHTML += `<tr>
                <td>${resource.name}</td>
                <td>${resource.location}</td>
                <td>${resource.skill}</td>
                <td>${resource.type}</td>
                <td>${resource.contact}</td>
                <td>${resource.rating}</td>
            </tr>`;
        });
    }
});
