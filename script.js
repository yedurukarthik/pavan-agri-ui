document.addEventListener("DOMContentLoaded", function () {
    console.log("Pavan Agri Solutions Loaded");

    // Logout functionality
    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            localStorage.removeItem("isLoggedIn");
            window.location.href = "login.html";
        });
    }

    // Add New Resource
    const resourceForm = document.getElementById("resourceForm");
    if (resourceForm) {
        resourceForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const tableBody = document.getElementById("resourceTableBody");

            const newRow = document.createElement("tr");
            newRow.innerHTML = `
                <td>${resName.value}</td>
                <td>${resLocation.value}</td>
                <td>${resSkill.value}</td>
                <td>${resType.value}</td>
                <td>${resContact.value}</td>
                <td>${resRating.value}</td>
            `;
            tableBody.appendChild(newRow);
            resourceForm.reset();
        });
    }

    // Add New Crop
    const cropForm = document.getElementById("cropForm");
    if (cropForm) {
        cropForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const tableBody = document.getElementById("cropTableBody");
            const plantedDate = new Date(cropPlanted.value);
            const today = new Date();
            const daysPassed = Math.floor((today - plantedDate) / (1000 * 60 * 60 * 24));

            const newRow = document.createElement("tr");
            newRow.innerHTML = `
                <td>${cropName.value}</td>
                <td>${cropDensity.value}</td>
                <td>${cropPlants.value}</td>
                <td>${cropVariety.value}</td>
                <td>${cropPlanted.value}</td>
                <td>${daysPassed}</td>
            `;
            tableBody.appendChild(newRow);
            cropForm.reset();
        });
    }
});
