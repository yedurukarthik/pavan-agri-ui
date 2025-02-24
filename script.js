document.addEventListener("DOMContentLoaded", function () {
    console.log("Pavan Agri Solutions Loaded");

    // Load saved farms when the page loads
    loadSavedFarms();

    // Add Farm Functionality
    const addFarmForm = document.getElementById("addFarmForm");
    if (addFarmForm) {
        addFarmForm.addEventListener("submit", function (event) {
            event.preventDefault();
            console.log("Add Farm button clicked!"); // Debugging Log

            // Get input values
            const farmName = document.getElementById("farmName").value;
            const ownerName = document.getElementById("ownerName").value;
            const location = document.getElementById("location").value;
            const area = document.getElementById("area").value;
            const syNo = document.getElementById("syNo").value;

            // Validate inputs
            if (!farmName || !ownerName || !location || !area || !syNo) {
                alert("Please fill in all fields.");
                return;
            }

            // Retrieve farms from localStorage or create empty array
            let farms = JSON.parse(localStorage.getItem("farms")) || [];
            
            // Add new farm
            farms.push({ farmName, ownerName, location, area, syNo });

            // Save back to localStorage
            localStorage.setItem("farms", JSON.stringify(farms));

            // Reload farms to show updated data
            loadSavedFarms();

            // Clear input fields after adding
            addFarmForm.reset();
        });
    }
});

// Load saved farms from localStorage
function loadSavedFarms() {
    console.log("Loading saved farms..."); // Debugging Log
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

// Delete farm from localStorage
function deleteFarm(index) {
    let farms = JSON.parse(localStorage.getItem("farms")) || [];
    farms.splice(index, 1);
    localStorage.setItem("farms", JSON.stringify(farms));
    loadSavedFarms();
}
