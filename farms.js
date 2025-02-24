document.addEventListener("DOMContentLoaded", loadFarms);

function loadFarms() {
    const tableBody = document.getElementById("farmsTableBody");
    const farmsData = JSON.parse(localStorage.getItem("farms")) || [];

    tableBody.innerHTML = ""; // Clear previous entries
    farmsData.forEach((farm, index) => {
        let row = `<tr>
            <td>${farm.name}</td>
            <td>${farm.owner}</td>
            <td>${farm.location}</td>
            <td>${farm.area}</td>
            <td>${farm.syNo}</td>
            <td><a href="https://meebhoomi.ap.gov.in/" target="_blank">AP Meebhoomi</a></td>
            <td><button class="button" onclick="deleteFarm(${index})">Delete</button></td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

function addFarm() {
    const name = document.getElementById("farmName").value;
    const owner = document.getElementById("ownerName").value;
    const location = document.getElementById("location").value;
    const area = document.getElementById("area").value;
    const syNo = document.getElementById("syNo").value;

    if (name && owner && location && area && syNo) {
        let farmsData = JSON.parse(localStorage.getItem("farms")) || [];
        farmsData.push({ name, owner, location, area, syNo });
        localStorage.setItem("farms", JSON.stringify(farmsData));
        loadFarms(); // Refresh table
    } else {
        alert("Please fill all fields!");
    }
}

function deleteFarm(index) {
    let farmsData = JSON.parse(localStorage.getItem("farms")) || [];
    farmsData.splice(index, 1);
    localStorage.setItem("farms", JSON.stringify(farmsData));
    loadFarms(); // Refresh table
}
