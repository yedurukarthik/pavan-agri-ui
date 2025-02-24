document.addEventListener("DOMContentLoaded", function () {
    console.log("Pavan Agri Solutions Loaded");

    
    const addFarmBtn = document.getElementById("addFarmBtn");
    const farmFormContainer = document.getElementById("farmFormContainer");
    const closeForm = document.getElementById("closeForm");

    if (addFarmBtn) {
        addFarmBtn.addEventListener("click", function () {
            farmFormContainer.style.display = "block";
        });
    }

    if (closeForm) {
        closeForm.addEventListener("click", function () {
            farmFormContainer.style.display = "none";
        });
    }

    
    const farmForm = document.getElementById("farmForm");
    const farmTableBody = document.getElementById("farmTableBody");

    if (farmForm) {
        farmForm.addEventListener("submit", function (event) {
            event.preventDefault();
            
            const farmName = document.getElementById("farmName").value;
            const location = document.getElementById("location").value;
            const size = document.getElementById("size").value;
            const owner = document.getElementById("owner").value;

            const newRow = document.createElement("tr");
            newRow.innerHTML = `
                <td>${farmName}</td>
                <td>${location}</td>
                <td>${size}</td>
                <td>${owner}</td>
                <td><button class="edit">Edit</button> <button class="delete">Delete</button></td>
            `;

            farmTableBody.appendChild(newRow);
            farmFormContainer.style.display = "none";
        });
    }
});
