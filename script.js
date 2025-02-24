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

    // Add New Farm
    const farmForm = document.getElementById("farmForm");
    if (farmForm) {
        farmForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const farmName = document.getElementById("farmName").value;
            const ownerName = document.getElementById("ownerName").value;
            const location = document.getElementById("location").value;
            const area = document.getElementById("area").value;
            const syNo = document.getElementById("syNo").value;

            const farmTableBody = document.getElementById("farmTableBody");

            const newRow = document.createElement("tr");
            newRow.innerHTML = `
                <td>${farmName}</td>
                <td>${ownerName}</td>
                <td>${location}</td>
                <td>${area}</td>
                <td>${syNo}</td>
                <td><a href="https://meebhoomi.ap.gov.in/" target="_blank">AP Meebhoomi</a></td>
            `;

            farmTableBody.appendChild(newRow);

            // Clear form fields
            farmForm.reset();
        });
    }
});
